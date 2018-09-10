import * as React from 'react'
import { Component } from 'react'
import DragOrderList from '../drag-order-list/containers/DragOrderList';
import InfoBox from '../components/InfoBox';

interface RawItemData { 
  headline: string,
  body: string
 }

const initialItemsData: RawItemData[] = [
  {headline: 'Drag Order List v0.2 by Sven Kohn', body: 'Drag some items around to re-order them.'},
  {headline: 'Item 2', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Curabitur consectetur arcu libero, at lobortis lectus consectetur 
  auctor. Cras et elit accumsan, lobortis ex nec, fermentum mi. Nulla 
  at massa vitae libero aliquam molestie. Curabitur eget iaculis nulla, 
  eget elementum ligula. Sed non mauris elit. Aliquam tincidunt neque augue.`},
  {headline: 'Item 3', body: 'Drag some items around to re-order them.'},
  {headline: 'Item 4', body: 'Drag some items around to re-order them.'},
  {headline: 'Item 5', body: 'Drag some items around to re-order them.'}
]

class App extends Component {
  render() {
    return (
      <div>
        <InfoBox />
        <DragOrderList initialItemsData={initialItemsData} />
      </div>
    )
  }
}

export default App