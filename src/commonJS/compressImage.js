import Compressor from 'compressorjs'

export default { compress }

function compress(file, options) {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      ...options,
      success(result) {
        resolve(result)
      },
      error(err) {
        console.log(err.message)
        reject(err)
      },
    })
  })
}

function download() {

}
