import styled from 'styled-components'
import PropTypes from 'prop-types'

const Flex = styled.div`
  margin-top: ${(props) => props.top || '0px'};
  margin-bottom: ${(props) => props.bottom || '0px'};
  margin-left: ${(props) => props.left || '0px'};
  margin-right: ${(props) => props.right || '0px'};
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'center'};
  position: ${(props) => props.position || 'relative'};
`

export const FlexStyled = (props) => {
  return <Flex {...props} />
}

FlexStyled.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  position: PropTypes.string,
}
