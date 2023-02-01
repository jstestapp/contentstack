import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../themes/colors'

const Template = styled.svg`
  animation: rotate 2s linear infinite;
  width: 40px;
  height: 40px;

  & .path {
    stroke: ${() => `${COLORS.primaryColor10}`};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
const SpinnerBodyStyled = styled.div`
  height: 100vh;
  position: fixed;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 100;
`

export const SpinnerStyled = () => (
  <SpinnerBodyStyled>
    <Template viewBox='0 0 50 50'>
      <circle
        className='path'
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='4'
      />
    </Template>
  </SpinnerBodyStyled>
)
