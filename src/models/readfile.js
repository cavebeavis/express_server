// import { readFile } from 'fs';
var fs = require('fs');

const read = async () => {
  try {
    return fs.readFile('./src/assets/foo.txt', (err, source) => {
      if (err) {
        console.log(err)
        return err;
      } else {
        console.log("i got here")
        return source;
      }
    });
  } catch (err) {
    console.log(`read error: ${err}`)
    return err
  }
  finally {
    console.log('done with read')
  }
}


/*export {
  readFile
}*/

module.exports = read;