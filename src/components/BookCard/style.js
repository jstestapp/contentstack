import styled from 'styled-components'
import { COLORS } from '../../themes/colors'

export const CardWrapper = styled.div`
  margin: 10px;
  color: ${() => `${COLORS.darkColor}`};
  background-color: ${() => `${COLORS.lightColor}`};
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  width: 300px;
  overflow: hidden;
  padding: 0px 25px;
`

export const Title = styled.span`
  padding: 1px 10px;
  font-size: 16px;
`
