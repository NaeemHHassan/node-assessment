const fs = require('fs')

const main = (path) => {
  if (fs.existsSync(path))
    if (fs.lstatSync(path).isDirectory())
      return Promise.reject({ message: 'Path is a directory' })

  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(path)

      return resolve(JSON.parse(data))
    } catch (err) {
      if (err instanceof SyntaxError) {
        return reject({ message: 'JSON Invalid' })
      }

      return reject({ message: 'File Does Not Exist' })
    }
  })
}

module.exports = main
