import fs from 'fs'
import path from 'path'
// import { formatFile } from './formatFile'

export const writeFileSafely = async (writeLocation: string, content: any) => {
  fs.mkdirSync(path.dirname(writeLocation), {
    recursive: true,
  })
  // console.log('++++++++++Going to write file now ++++++++++++', writeLocation)
  // var v = await formatFile(content)
  fs.writeFileSync(writeLocation, content)
}
