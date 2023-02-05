import prettier from 'prettier'

export const formatFile = (content: string): Promise<string> => {
  console.log('&&&&&&&&&&&&& -------------- &&&&&&&&&&&&&')
  return new Promise((res, rej) =>
    prettier.resolveConfig(process.cwd()).then((options) => {
      if (!options) {
        res(content) // no prettier config was found, no need to format
        console.log('&&&&&&&&&&&&& No prettier found &&&&&&&&&&&&&')
      }

      try {
        console.log('&&&&&&&&&&&&&  prettier found &&&&&&&&&&&&&')
        const formatted = prettier.format(content, {
          ...options,
          parser: 'typescript',
        })

        res(formatted)
      } catch (error) {
        rej(error)
      }
    }),
  )
}
