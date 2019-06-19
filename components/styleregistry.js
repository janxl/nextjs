import React from 'react'
import {StyleProvider as style1} from '../styles/squealingpig/styles'
import {StyleProvider as style2} from '../styles/secondsite/styles'

export default function GetCss(siteId) {
  switch (siteId) {
    case '6aee88e2-0358-429a-b721-82dd6854c4a1':
      console.log('fetching styles')
      return style1()
    default:
      return style2()
  }
}