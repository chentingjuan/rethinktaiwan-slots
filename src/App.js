import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import rawData from './data'

let data = { location: {}, thing: {}, feeling: {} }
Object.keys(rawData).map((teamId, i) => {
  data.location[teamId] = rawData[teamId][0]
  data.thing[teamId] = rawData[teamId][1]
  data.feeling[teamId] = rawData[teamId][2]
})

const App = () => {
  const [activeIds, setActiveIds] = useState(null)
  const [superRandomMode, setSuperRandomMode] = useState(false)
  const [idsDisplayed, setIdsDisplayed] = useState([false, false, false])
  // console.log(rawData)
  // console.log(data)

  const handleButtonClicked = async () => {
    setIdsDisplayed([false, false, false])
    await deleteActiveData()
    if(superRandomMode) {
      let newActiveIds = [];
      Object.keys(data).map(key => {
        const currentIds = Object.keys(data[key])
        newActiveIds.push(currentIds[getRandomInt(currentIds.length)])
      });
      setActiveIds(newActiveIds)
    } else {
      const currentIds = Object.keys(data.location)
      const newActiveId = currentIds[getRandomInt(currentIds.length)]
      setActiveIds([newActiveId, newActiveId, newActiveId])
    }
  }

  const handleItemMouseOver = (index) => {
    if(activeIds[0]===activeIds[1] && activeIds[1]===activeIds[2]) {
      setIdsDisplayed([true, true, true])
    } else {     
      setIdsDisplayed(prevState => {
        prevState[index] = true
        return [...prevState]
      })
    }
  }

  const deleteActiveData = () => {
    if(activeIds) {
      delete data.location[activeIds[0]]
      delete data.thing[activeIds[1]]
      delete data.feeling[activeIds[2]]
    }
  }

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

  const renderRawData = Object.keys(rawData).map((teamId, i) => pug`
    tr
      td #{teamId}
      
      td(className=activeIds&&activeIds[0]===teamId ? "active" : !data.location[teamId] ? "empty" : "") #{rawData[teamId][0]}
      
      td(className=activeIds&&activeIds[1]===teamId ? "active" : !data.thing[teamId] ? "empty" : "") #{rawData[teamId][1]}
      
      td(className=activeIds&&activeIds[2]===teamId ? "active" : !data.feeling[teamId] ? "empty" : "") #{rawData[teamId][2]}
  `)

  return pug`
    .App
      .slots
        h2 迴響議題拉霸機
        .title
          div 地點
          
          div 實際作為

          div 重要人物的感受
            
        if(activeIds && Object.keys(data.location).length)
          .screen
            .item-wrapper(onMouseOver=()=>handleItemMouseOver(0))
              .item
                span.id(className=idsDisplayed[0] ? "active" : "") ##{activeIds[0]}

                span #{data.location[activeIds[0]]}

            .item-wrapper(onMouseOver=()=>handleItemMouseOver(1))
              .item
                span.id(className=idsDisplayed[1] ? "active" : "") ##{activeIds[1]} 

                span #{data.thing[activeIds[1]]} 
            
            .item-wrapper(onMouseOver=()=>handleItemMouseOver(2))
              .item
                span.id(className=idsDisplayed[2] ? "active" : "") ##{activeIds[2]} 

                span #{data.feeling[activeIds[2]]} 
        
        else
          .screen
            .item-wrapper 
              .item ???

            .item-wrapper 
              .item ???
            
            .item-wrapper 
              .item ???

        .control-bar 
          if(activeIds)
            .remain 剩下 #{Object.keys(data.location).length-1} 回合

          else
            .remain

          button(
            onClick=()=>setSuperRandomMode(true) 
            disabled=superRandomMode||Object.keys(data.location).length<=1) 超級混合模式

          button(
            onClick=handleButtonClicked
            disabled=Object.keys(data.location).length<=1) 下一回合 
               
      hr

      h4 全部的資料：（正式版不會顯示）

      table #{renderRawData}
  `
}

export default App;