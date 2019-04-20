import React, { useState, useEffect } from 'react'
import Slot from './slot'
import getIconsFromChapter from '../chapter-to-icons'
import CHAPTERS from '../chapter-list'
import styled from 'styled-components'
import shuffle from 'array-shuffle'

const Background = styled.div`
  color: #FFF;
  background: black;

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Slots = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
`

const iconSize = 200
const randomizedChapterList = shuffle(Object.values(CHAPTERS))
const chapterUpdateMs = 2900

const SlotMachine = () => {
  const [currentChapter, setCurrentChapter] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      let nextIndex = currentChapter+1
      if(nextIndex === randomizedChapterList.length){
        nextIndex = 0
      }
      setCurrentChapter(nextIndex)
    }, chapterUpdateMs)
  })

  const {icons} = getIconsFromChapter(randomizedChapterList[currentChapter])
  return(<Background>
    <Slots>
      <Slot size={iconSize} type={icons[0]} position='left' />
      <Slot size={iconSize} type={icons[1]} position='center' />
      <Slot size={iconSize} type={icons[2]} position='right' />
    </Slots>
  </Background>)
}

export default SlotMachine