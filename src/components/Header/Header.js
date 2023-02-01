import { Link } from 'react-router-dom'
import { ButtonStyled } from '../ButtonStyled/ButtonStyled'
import { ROUTES } from '../../constants/routes'
import { HeaderWrapper, HeaderContent } from './style'

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link to={ROUTES.Books}>
          <ButtonStyled buttonName='Books' />
        </Link>
        <Link to={ROUTES.APOD}>
          <ButtonStyled buttonName='APOD' />
        </Link>
      </HeaderContent>
    </HeaderWrapper>
  )
}
