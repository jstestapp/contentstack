import PropTypes from 'prop-types'
import { CardWrapper, Title } from './style'
import { FlexStyled } from '../FlexStyled/FlexStyled'
import { ButtonStyled } from '../ButtonStyled/ButtonStyled'
import { ROUTES } from '../../constants/routes'
import { Link } from 'react-router-dom'
import { ImgStyled } from '../ImgStyled/ImgStyled'

export const BookCard = (props) => {
  const { title, id, url } = props

  return (
    <>
      <CardWrapper>
        <FlexStyled direction={'row'} justify={'space-between'}>
          <ImgStyled
            top={'0px'}
            left={'0px'}
            bottom={'0px'}
            right={'0px'}
            height={'160px'}
            src={url}
            alt='img'
          />
          <FlexStyled>
            <Title>{title}</Title>
            <Link to={`${ROUTES.About}${id}`}>
              <ButtonStyled buttonName='About' />
            </Link>
          </FlexStyled>
        </FlexStyled>
      </CardWrapper>
    </>
  )
}

BookCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string,
}
