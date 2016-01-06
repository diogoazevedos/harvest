# Harvest

[![Build Status](https://img.shields.io/travis/diogoazevedos/harvest/master.svg)](https://travis-ci.org/diogoazevedos/harvest)
[![Dependency Status](https://img.shields.io/david/diogoazevedos/harvest.svg)](https://david-dm.org/diogoazevedos/harvest)
[![devDependency Status](https://img.shields.io/david/dev/diogoazevedos/harvest.svg)](https://david-dm.org/diogoazevedos/harvest#info=devDependencies)

```javascript
import harvest from '@diogoazevedos/harvest'

const url = 'https://github.com/diogoazevedos'
const payload = {
  name: '.vcard-fullname',
  repos: [{
    $root: '.popular-repos .source',
    name: '.repo'
  }]
}

harvest(url, payload)
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

### Installation
```shell
$ npm install @diogoazevedos/harvest --save
```

### License

MIT
