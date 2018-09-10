import * as React from 'react'

interface IProps {
  readonly onAdd: () => any
}

const OptionsMenu = (props: IProps) => {
  return (
    <div className="options-menu">
      <button className="button-add" onClick={() => props.onAdd()}>+ Add Item</button>
    </div>
  )
}

export default OptionsMenu