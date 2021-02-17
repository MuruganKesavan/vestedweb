
import React, { memo } from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content, width }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        justify-content: center;
        background: #f4f6f8;
        box-align: center;
        align-items: center;
        border: none;
        float: left;
        padding: 8px;
        width: 300px;
        height: 100px;
        box-sizing: border-box;
        display: block;
        height: 100px;
        margin-bottom: 0px;
        margin-left: 4px;
        margin-right: 4px;
        margin-top: 0px;
        min-height: 1px;
        padding-bottom: 100px;
        padding-left: 60px;
        padding-right: 60px;
        padding-top: 60px;
      `}
    />
  )
}

export default memo(Slide)
