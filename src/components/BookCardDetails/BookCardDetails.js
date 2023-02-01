import PropTypes from 'prop-types'
import { CardWrapper, Title, Description } from './style'
import { FlexStyled } from '../FlexStyled/FlexStyled'
import { ButtonStyled } from '../ButtonStyled/ButtonStyled'
import { ROUTES } from '../../constants/routes'
import { Link } from 'react-router-dom'
import { ImgStyled } from '../ImgStyled/ImgStyled'

export const BookCardDetails = (props) => {
  const { title, description, url } = props

  return (
    <>
      <CardWrapper>
        <FlexStyled direction={'row'} justify={'space-between'}>
          <ImgStyled
            top={'0px'}
            left={'0px'}
            bottom={'0px'}
            right={'0px'}
            height={'350px'}
            src={url}
            alt='img'
          />
          <FlexStyled>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Link to={`${ROUTES.Books}`}>
              <ButtonStyled buttonName='Back' />
            </Link>
          </FlexStyled>
        </FlexStyled>
      </CardWrapper>
    </>
  )
}

BookCardDetails.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string,
}
