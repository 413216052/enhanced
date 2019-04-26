## enhanced

![images](https://travis-ci.org/xiaoxiaojx/enhanced.svg?branch=master)

### 一些通用的实用函数, 告别每个项目都要复制一份同样的代码, 如果你有比较实用的函数, 一起加入进来吧!

### Install
```
  npm i enhanced --save
```

### utils
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
  const answer = await confirm('请输入 yes 确认删除!') 
  if (answer !== "yes") {
        return;
   } else {
      // xxx
   }
```

#### isInstalled
```
  const { isInstalled } = require('enhanced')
  console.log(isInstalled('parcel-bundler'))
```

### traverseFile
```
  const { traverseFile } = require('enhanced')
  const files = []
  const collectFiles = traverseFile((filePath) => files.push(filePath))
  collectFiles('./traverseFile')
  console.log(files.join(', '))
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

### isYarn
```
  const { isYarn } = require('enhanced')
  console.log(isYarn())
```

### How to contribute
1. 新建 src/functionName.ts (index.ts 会自动引入懒加载导出)
2. 运行 tsc 编译
3. test/index.js 补充测试
