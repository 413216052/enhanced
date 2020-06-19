### enhanced
![images](https://travis-ci.org/xiaoxiaojx/enhanced.svg?branch=master)
> node utils.

#### Install
```
  npm i enhanced --save
```

#### log
```
  const { log } = require('enhanced')
  log.success("hello green message!")
  log.error("hello red message!")
  log.warn("hello yellow message!")
  log.info("hello cyan message!")
  log.log("hello normal message!")
```

#### confirm
```
  const { confirm } = require('enhanced')
  const answer = await confirm('Please enter yes to confirm deletion!')
  if (answer !== "yes") {
        return;
   } else {
      // do something
   }
```

#### isInstalled
```
  const { isInstalled } = require('enhanced')
  console.log(isInstalled('parcel-bundler'))
```

#### runCommand
```
  const { runCommand } = require('enhanced')
  runCommand('parcel-bundler', ['-v'])
    .then(() => {
      console.log('you can run parcel index.html')
    })
    .catch(err => {
      console.log('you should npm install -g parcel-bundler')
    })
```

#### isYarn
```
  const { isYarn } = require('enhanced')
  console.log(isYarn())
```

#### traverseFile
```
  const { traverseFile } = require('enhanced')
  const files = []
  const collectFiles = traverseFile((filePath) => files.push(filePath))
  collectFiles('./traverseFile')
  console.log(files.join(', '))
```

##### How to contribute
1. 新建 src/functionName.ts (index.ts 会自动引入懒加载导出)
2. 运行 tsc 编译
3. test/index.js 补充测试
