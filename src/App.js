import { createGlobalStyle } from 'styled-components'
import { RoutesLinks } from './routes/RoutesLinks'
import spinnerState from './store/spinnerState'
import { observer } from 'mobx-react-lite'
import { SpinnerStyled } from './components/SpinnerStyled/SpinnerStyled'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-family: 'proxima-nova', sans-serif;
  outline: none !important;
}
`
export const App = observer(() => {
  return (
    <>
      <Global />
      {spinnerState.isLoading && <SpinnerStyled />}
      <RoutesLinks />
    </>
  )
})
