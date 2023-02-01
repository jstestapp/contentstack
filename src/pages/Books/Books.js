import { useQuery } from '@apollo/client'
import { Header } from '../../components/Header/Header'
import { GET_BOOKS } from '../../apollo/books'
import { PageWarpperStyled } from '../../components/PageWarpperStyled/PageWarpperStyled'
import { ButtonStyled } from '../../components/ButtonStyled/ButtonStyled'
import { FlexStyled } from '../../components/FlexStyled/FlexStyled'
import { BookCard } from '../../components/BookCard/BookCard'
import { SpinnerStyled } from '../../components/SpinnerStyled/SpinnerStyled'
import BooksState from '../../store/books'
import { observer } from 'mobx-react-lite'

export const Books = observer(() => {
  const limitItems = 2

  const { data, fetchMore, loading } = useQuery(GET_BOOKS, {
    variables: { limit: limitItems, skip: 0 },
    notifyOnNetworkStatusChange: true,
  })

  const handleMore = () => {
    BooksState.setSkip()

    fetchMore({
      variables: {
        skip: BooksState.skip,
        limit: limitItems,
      },
    })
  }

  return (
    <>
      <Header />
      <PageWarpperStyled>
        <FlexStyled>
          {loading && <SpinnerStyled />}
          {data?.all_book.items.map((item) => {
            return (
              <div key={item.system.uid}>
                <BookCard
                  title={item.title}
                  id={item.system.uid}
                  url={item.imgConnection.edges[0].node.url}
                />
              </div>
            )
          })}
        </FlexStyled>
        <FlexStyled>
          {BooksState.skip < data?.all_book.total && (
            <ButtonStyled buttonName='Load more' onClick={() => handleMore()} />
          )}
        </FlexStyled>
      </PageWarpperStyled>
    </>
  )
})
