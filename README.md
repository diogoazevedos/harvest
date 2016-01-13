# Harvest

[![Build Status](https://img.shields.io/travis/diogoazevedos/harvest/master.svg)](https://travis-ci.org/diogoazevedos/harvest)
[![Dependency Status](https://img.shields.io/david/diogoazevedos/harvest.svg)](https://david-dm.org/diogoazevedos/harvest)
[![devDependency Status](https://img.shields.io/david/dev/diogoazevedos/harvest.svg)](https://david-dm.org/diogoazevedos/harvest#info=devDependencies)

```javascript
import harvest from '@diogoazevedos/harvest'

const meta = {
  link: 'https://github.com/diogoazevedos'
}

const blueprint = {
  name: '.vcard-fullname',
  repos: [{
    $root: '.popular-repos .source',
    name: '.repo'
  }]
}

harvest(meta, blueprint)
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

### Requirement

Harvest uses PhantomJS behind the scenes, because of this you need to install it
globally.

```shell
$ npm install -g phantomjs # Only for tests, don't use in production
```

> **Note:** See [builds](https://bitbucket.org/ariya/phantomjs/downloads) to your OS. Support only version v1.9.*.

### Getting started

Just install as a dependency to your project.

```shell
$ npm install @diogoazevedos/harvest --save
```

### License

MIT
