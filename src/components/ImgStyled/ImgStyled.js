import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Img = styled.img`
  margin-top: ${(props) => props.top || '10px'};
  margin-bottom: ${(props) => props.bottom || '10px'};
  margin-left: ${(props) => props.left || '10px'};
  margin-right: ${(props) => props.right || '10px'};
  padding: ${(props) => props.padding || '0px'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || '230px'};
  text-align: ${(props) => props.textAlign || 'center'};
`

export const ImgStyled = (props) => {
  return <Img {...props} />
}

ImgStyled.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  textAlign: PropTypes.string,
}
