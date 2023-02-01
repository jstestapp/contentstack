import { Header } from '../../../components/Header/Header'
import { GET_BOOK } from '../../../apollo/books'
import { PageWarpperStyled } from '../../../components/PageWarpperStyled/PageWarpperStyled'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { BookCardDetails } from '../../../components/BookCardDetails/BookCardDetails'
import { SpinnerStyled } from '../../../components/SpinnerStyled/SpinnerStyled'

export const About = () => {
  const { id } = useParams()
  const { data, loading } = useQuery(GET_BOOK, {
    variables: { uid: id.substring(3) },
  })

  return (
    <>
      <Header />
      <PageWarpperStyled>
        {loading && <SpinnerStyled />}
        <BookCardDetails
          title={data?.book.title}
          description={data?.book.multi_line}
          url={data?.book.imgConnection.edges[0].node.url}
        />
      </PageWarpperStyled>
    </>
  )
}
