import { expect } from 'chai'
import harvest from '../lib/harvest'

const url = 'https://github.com/diogoazevedos'

describe('Harvest()', () => {
  it('arrays should work with a simple selector', function(done) {
    this.timeout(10000)
    harvest(url, [{
      $root: '.popular-repos .source',
      name: '.repo'
    }])
    .then(response => {
      let { data } = response

      expect(data).to.contains({
        name: 'custom'
      })

      done()
    })
    .catch(error => {
      done(error)
    })
  })

  it('should work with complex selections', function(done) {
    this.timeout(10000)
    harvest(url, {
      name: '.vcard-fullname',
      repos: [{
        $root: '.popular-repos .source',
        name: '.repo'
      }]
    })
    .then(response => {
      let { data } = response

      expect(data.name).to.equal('Diogo Azevedo')
      expect(data.repos).to.contains({
        name: 'custom'
      })

      done()
    })
    .catch(error => {
      done(error)
    })
  })
})
