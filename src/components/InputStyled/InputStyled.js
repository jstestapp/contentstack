import styled from 'styled-components'
import { COLORS } from '../../themes/colors'

const Template = styled.input`
  width: 200px;
  padding: 1px 10px;
  margin: 3px;
  border: ${() => `1px solid ${COLORS.primaryColor10}`};
  border-radius: 10px;
  background: ${() => `${COLORS.lightColor}`};
  outline: none;
  height: 30px;
  color: ${() => `${COLORS.primaryColor10}`};
  font-size: 12px;
  transition-duration: 0.3s;
  &::active {
    border: ${() => `1px solid ${COLORS.primaryColor30}`};
  }
  &::placeholder {
    color: ${() => `${COLORS.secondaryColor10}`};
    background: ${() => `${COLORS.lightColor}`};
  }
`

export const InputStyled = (props) => {
  const { ...rest } = props
  return <Template {...rest} />
}
