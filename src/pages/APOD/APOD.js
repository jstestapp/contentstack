import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Nasa as ApiNasa } from '../../api/Nasa'
import { PageWarpperStyled } from '../../components/PageWarpperStyled/PageWarpperStyled'
import { Card } from '../../components/Card/Card'

export const APOD = () => {
  const apiNasa = useMemo(() => new ApiNasa(), [])

  const [data, setData] = useState([])

  const loadPage = useCallback(async () => {
    const [nasaData] = await Promise.all([apiNasa.APOD()])

    if (nasaData) {
      setData(nasaData.data)
    }
  }, [apiNasa])

  useEffect(() => {
    loadPage()
  }, [loadPage])

  return (
    <>
      <Header />
      <PageWarpperStyled>
        {data.length !== 0 && (
          <Card
            title={data.title}
            url={data.url}
            date={data.date}
            explanation={data.explanation}
          />
        )}
      </PageWarpperStyled>
    </>
  )
}
