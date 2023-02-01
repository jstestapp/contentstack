import styled from 'styled-components'
import { COLORS } from '../../themes/colors'

export const CardWrapper = styled.div`
  margin: 10px;
  color: ${() => `${COLORS.darkColor}`};
  background-color: ${() => `${COLORS.lightColor}`};
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`

export const Title = styled.span`
  margin-top: 10px;
  padding: 1px 7px;
  font-size: 16px;
`

export const Date = styled.span`
  margin: 10px;
  padding: 1px 7px;
  border-radius: 10px;
  overflow: hidden;
  color: ${() => `${COLORS.lightColor}`};
  background-color: ${() => `${COLORS.secondaryColor30}`};
`

export const Description = styled.span`
  margin-top: 10px;
  padding: 1px 7px;
  font-size: 12px;
`
