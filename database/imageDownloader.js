
const download = require('image-downloader')

const imageNumber = 1000;


for(let i = 0; i < imageNumber; i++){
  options = {
    url: 'https://loremflickr.com/583/700',
    dest: `/Users/henrymattoon/Desktop/testImages/photo${i}.jpeg`
  }
  download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
  })
  .catch((err) => {
    console.error(err)
  })
}


