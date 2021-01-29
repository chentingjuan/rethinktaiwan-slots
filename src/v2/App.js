import React, { useEffect, useState, useRef } from 'react'
import './App.scss'
import rawData from './data'
import teamName from './data-team-name'
// import SlotMachine from 'jquery-slotmachine/lib/slot-machine.js'

let data = { left: {}, center: {}, right: {} }
Object.keys(rawData).map((teamId, i) => {
  data.left[teamId] = {...rawData[teamId][0]}
  data.center[teamId] = {...rawData[teamId][1]}
  data.right[teamId] = {...rawData[teamId][2]}
})

const App = () => {
  // const [started, setStarted] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const [selectableIds, setSelectableIds] = useState(Object.keys(data.left))
  const [isRotated, setIsRotated] = useState(false);
  const [idDisplayed, setIdDisplayed] = useState(false)
  const itemLeftRef = useRef(null)
  const itemCenterRef = useRef(null)
  const itemRightRef = useRef(null)
  // let itemLeftMachine, itemCenterMachine, itemRightMachine;

  const handleNextRoundButtonClicked = (prevId) => {
    setIdDisplayed(false)
    let currentSelectableIds = [...selectableIds].filter(id => id !== prevId)
    setSelectableIds(currentSelectableIds)
    setIsRotated(false);
    const newActiveId = currentSelectableIds[getRandomInt(currentSelectableIds.length)]
    // setTimeout(() => {
      setActiveId(newActiveId)
    // }, 1000)
    

    // setTimeout(() => deleteActiveData(prevId) ,0)
  }

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

  const renderRawData = Object.keys(rawData).map((teamId, i) => pug`
    tr
      td #{teamId}
      
      td(className=activeId===teamId ? "active" : selectableIds.indexOf(teamId)===-1 ? 'empty' : '') #{rawData[teamId][0].label}:#{rawData[teamId][0].value}
      
      td(className=activeId===teamId ? "active" : selectableIds.indexOf(teamId)===-1 ? 'empty' : '') #{rawData[teamId][1].label}:#{rawData[teamId][1].value}
      
      td(className=activeId===teamId ? "active" : selectableIds.indexOf(teamId)===-1 ? 'empty' : '') #{rawData[teamId][2].label}:#{rawData[teamId][2].value}
  `)

  const renderLeftItems = Object.keys(data.left).map((teamId, i) => i<10 && teamId!==activeId && pug`
    .item #{data.left[teamId].value}  
  `)

  const renderCenterItems = Object.keys(data.center).map((teamId, i) => i<10 && teamId!==activeId && pug`
    .item #{data.center[teamId].value}  
  `)

  const renderRightItems = Object.keys(data.right).map((teamId, i) => i<10 && teamId!==activeId && pug`
    .item #{data.right[teamId].value}  
  `)

  // console.log('hello: ', activeId ? `${activeId} ${data.left[activeId]}` : '')

  const rodWrapperClass = `rod-wrapper + ${isRotated ? 'active': ''} ${(!activeId || selectableIds.length<=1 || isRotated) ? 'disabled' : ''}`

  return pug`
    .App
      .machine-wrapper
        div(
          onClick=()=>setIsRotated(true)
          className=rodWrapperClass
        )
          .seat
            .body
              .head

        .machine-top
          .slots-wrapper
            .titles
              div
                .title #{activeId ? data.left[activeId].label : '？'}
              
              div
                .title #{activeId ? data.center[activeId].label : '？'}

              div
                .title #{activeId ? data.right[activeId].label : '？'}

            .slots
              .slots-inner-wrapper
                .slot(
                  ref=itemLeftRef
                  className=isRotated ? "animation" : ""
                ) 
                  .item #{activeId ? data.left[activeId].value : '？'}
                  |#{renderLeftItems}
                  
                .slot(
                  ref=itemCenterRef
                  className=isRotated ? "animation" : ""
                ) 
                  .item #{activeId ? data.center[activeId].value : '？'}
                  |#{renderCenterItems}
                
                .slot(
                  ref=itemRightRef
                  className=isRotated ? "animation" : ""
                ) 
                  .item #{activeId ? data.right[activeId].value : '？'}
                  |#{renderRightItems}

                .cover(className=!isRotated ? "open" : "")
                  .content
                    h2 ２０幾天的行動，印象最深刻的一件事？
              
                    p 
                      | 請於主持人問完「這是誰的一件事？」
                      br
                      | 倒數３秒內，舉手搶答，並說出解答
                      br
                      | 成功者，則會獲得「提案如何不緊張」小卡
                    
                    if(activeId===null)
                      button(
                        onClick=()=>handleNextRoundButtonClicked(activeId)) 開始

                .shadow

          .team-wrapper(className=idDisplayed ? "active" : "") 
            .team 
              .id ##{activeId}
              .name #{teamName[activeId]}
          
          .control-bar 
            // if(activeId)
            //   .remain 剩下 #{Object.keys(data.left).length-1} 回合

            // else
            //   .remain

            if(activeId)
              button(
                onClick=()=>handleNextRoundButtonClicked(activeId)
                disabled=!isRotated || !idDisplayed || selectableIds.length<=1) 下一回合 
            
            // button(
              onClick=()=>setIsRotated(true)
              disabled=!activeId || selectableIds.length<=1 || isRotated) 拉桿 

            button(
              onClick=()=>setIdDisplayed(true)
              disabled=!activeId || selectableIds.length<=1 || idDisplayed) 揭曉 
                
        // hr

        // h4 全部的資料：（正式版不會顯示）

        // table #{renderRawData}
  `
}

export default App;