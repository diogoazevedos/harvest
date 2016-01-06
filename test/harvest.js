import { expect } from 'chai'
import harvest from '../lib/harvest'

const meta = {
  url: 'https://github.com/diogoazevedos'
}

describe('Harvest()', () => {
  it('arrays should work with a simple selector', function(done) {
    this.timeout(10000)
    harvest(meta, [{
      $root: '.popular-repos .source',
      name: '.repo'
    }]).then(response => {
      let { payload } = response
      expect(payload).to.contains({
        name: 'custom'
      })

      done()
    }).catch(error => {
      done(error)
    })
  })

  it('should work with complex selections', function(done) {
    this.timeout(10000)
    harvest(meta, {
      name: '.vcard-fullname',
      repos: [{
        $root: '.popular-repos .source',
        name: '.repo'
      }]
    }).then(response => {
      let { payload } = response
      expect(payload.name).to.equal('Diogo Azevedo')
      expect(payload.repos).to.contains({
        name: 'custom'
      })

      done()
    }).catch(error => {
      done(error)
    })
  })

  it('should work with simple ajax selection', function(done) {
    this.timeout(60000)
    harvest({
      url: 'https://github.com/diogoazevedos/harvest',
      ajax: true
    }, {
      contributors: '.numbers-summary li:nth-last-child(1) .num'
    }).then(response => {
      let { payload } = response
      expect(payload).to.have.property('contributors')

      done()
    }).catch(error => {
      done(error)
    })
  })
})
