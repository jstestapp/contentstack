import styled from 'styled-components'
import { COLORS } from '../../themes/colors'

export const HeaderWrapper = styled.div`
  background-color: ${() => `${COLORS.secondaryColor10}`};
  position: fixed;
  top: 0px;
  height: 44px;
  width: 100%;
  z-index: 100;
`
export const HeaderContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
