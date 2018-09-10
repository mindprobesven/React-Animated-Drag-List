import * as React from 'react'
import { Component } from 'react'

interface IProps {
  readonly id: number,
  readonly headline: string,
  readonly body: string,
  readonly movedY: number,
  readonly posY: number,
  readonly height: number,
  readonly isMove: boolean,
  readonly blockTransition: boolean,
  readonly onDelete: (id: number) => any
}

class Item extends Component<IProps> {
  private ref = React.createRef<HTMLDivElement>()

  getHeight() {
    return this.ref.current!.getBoundingClientRect().height
  }
  
  getTop() {
    return this.ref.current!.getBoundingClientRect().top
  }
  
  getElement() {
    return this.ref.current!
  }

  render() {
    const { id, headline, body, movedY, isMove, blockTransition, onDelete } = this.props

    const itemTransition = isMove || blockTransition ? 
    `transform 0ms ease-out,
    background-color 500ms ease`
    : 
    `transform 250ms ease-out,
    background-color 500ms ease`

    return (
      <div className={isMove ? 'item move' : 'item'} ref={this.ref} style={{
        transform: `translateY(${movedY}px)`,
        transition: itemTransition,
        zIndex: isMove && 9999,
        opacity: isMove && 0.75
      }}>
        <div className="item-content">
          <h3 className="headline">{id} - {headline}</h3>
          <p className="body-text">{body}</p>
        </div>
        <div className="button-delete" onClick={() => onDelete(id)}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="button-move" data-id={id}>
          <div className="button-move-content" style={{ 
          transform: isMove && `rotateZ(${movedY}deg)`  
          }}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Item