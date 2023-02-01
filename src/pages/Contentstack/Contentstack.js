import { Header } from '../../components/Header/Header'
import { PageWarpperStyled } from '../../components/PageWarpperStyled/PageWarpperStyled'
import { FlexStyled } from '../../components/FlexStyled/FlexStyled'

export const Contentstack = () => {
  return (
    <>
      <Header />
      <PageWarpperStyled>
        <FlexStyled>
          <h1>Contentstack welcome page</h1>
        </FlexStyled>
      </PageWarpperStyled>
    </>
  )
}
