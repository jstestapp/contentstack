export const typePolicies = {
  Query: {
    fields: {
      all_book: {
        keyArgs: false,
        // merge(existing = [], incoming) {
        //   const incomingItems = formattedData(incoming.items)
        //   let list = [...existing, ...incomingItems]
        //   const key = 'uid'

        //   const arrayUniqueByKey = [
        //     ...new Map(list.map((item) => [item[key], item])).values(),
        //   ]
        //   return arrayUniqueByKey || existing
        // },
      },
    },
  },
  AllBook: {
    fields: {
      items: {
        merge(existing = [], incoming) {
          return existing ? [...existing, ...incoming] : incoming
        },
      },
    },
  },
}
