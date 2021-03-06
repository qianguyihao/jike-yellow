const fs = require('fs')

let arr = [];

// 前1000
for (let i = 001; i < 1000; i++) {
  if (i < 10) {
    arr.push(`### 00${i}：待补充\n\n![](https://img.smyhvae.com/jike-yellow-00${i}.jpg)\n\n`);
  } else if (i < 99) {
    arr.push(`### 0${i}：待补充\n\n![](https://img.smyhvae.com/jike-yellow-0${i}.jpg)\n\n`);
  } else {
    arr.push(`### ${i}：待补充\n\n![](https://img.smyhvae.com/jike-yellow-${i}.jpg)\n\n`);
  }
}

fs.writeFile('jike-yellow_1000.txt', arr, err => {
  if (err) {
    console.error(err)
    return
  }
})

// 前2000
const fs = require('fs')

let arr = [];

for (let i = 1001; i < 2000; i++) {
  arr.push(`### ${i}：待补充\n\n![](https://img.smyhvae.com/jike-yellow-${i}.jpg)\n\n`);
}

fs.writeFile('jike-yellow_2000.txt', arr, err => {
  if (err) {
    console.error(err)
    return
  }
})



