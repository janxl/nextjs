import React from 'react'
import pigs from '../styles/squealingpig/styles.css'
import second from '../styles/secondsite/styles.css'

export default function GetCss(siteId) {
  switch (siteId) {
    case '6aee88e2-0358-429a-b721-82dd6854c4a1':
      return pigs
    default:
      return second
  }
}