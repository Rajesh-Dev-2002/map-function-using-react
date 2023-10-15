import React from 'react'
import { restaurant } from './restaurant'

const App = () => {
  return (
    <div>
      {restaurant.map((item)=>(
        <img src={item.url} alt="" />
      ))}
    </div>
  )
}

export default App
