import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../themes/colors'

export const Template = styled.button`
  color: ${() => `${COLORS.lightColor}`};
  background: ${() => `${COLORS.primaryColor10}`};
  margin: 5px;
  font-size: '12px';
  border: none;
  padding: 10px 17px;
  display: inline-block;
  min-height: 24px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background: ${() => `${COLORS.primaryColor20}`};
  }
`

export const ButtonStyled = (props) => {
  const { onClick, type, buttonName } = props

  return (
    <Template type={type} onClick={onClick}>
      {buttonName}
    </Template>
  )
}

ButtonStyled.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
}
