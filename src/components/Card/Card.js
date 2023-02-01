import PropTypes from 'prop-types'
import { CardWrapper, Date, Title, Description } from './style'
import { ImgStyled } from '../ImgStyled/ImgStyled'
import { FlexStyled } from '../FlexStyled/FlexStyled'

export const Card = (props) => {
  const { date, explanation, title, url } = props
  return (
    <>
      <CardWrapper>
        <FlexStyled direction={'row'}>
          <ImgStyled
            top={'0px'}
            left={'0px'}
            bottom={'0px'}
            src={url}
            alt='img'
          />
          <FlexStyled>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Description>{explanation}</Description>
          </FlexStyled>
        </FlexStyled>
      </CardWrapper>
    </>
  )
}

Card.propTypes = {
  date: PropTypes.string,
  explanation: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}
