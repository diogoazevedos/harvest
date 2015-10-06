# Harvest

[![Build Status](https://img.shields.io/travis/diogoazevedos/harvest/master.svg)](https://travis-ci.org/diogoazevedos/harvest)
[![npm Version](https://img.shields.io/npm/v/@diogoazevedos/harvest.svg)](https://www.npmjs.com/package/@diogoazevedos/harvest)
[![License](https://img.shields.io/npm/l/@diogoazevedos/harvest.svg)](https://raw.githubusercontent.com/diogoazevedos/harvest/master/LICENSE)
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
