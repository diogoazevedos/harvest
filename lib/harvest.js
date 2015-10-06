import xray from 'x-ray'
import request from 'superagent'

const x = xray()
const build = payload => {
  let source = payload
  if (payload instanceof Array)
    payload = payload[0]

  let scope = payload.$root
  delete payload.$root

  for (let key in payload) {
    if (payload[ key ] instanceof Array)
      payload[ key ] = build(payload[ key ])
  }

  if (source instanceof Array) {
    if (undefined !== scope)
      return x(scope, [ payload ])
    return x([ payload ])
  }

  if (undefined !== scope)
    return x(scope, payload)
  return x(payload)
}

export default (url, payload) => {
  return new Promise((resolve, reject) => {
    request.get(url).end((error, response) => {
      if (error) reject(error)

      const { text, status } = response
      x(text, build( payload ))((error, data) => {
        if (error) reject(error)

        resolve({
          data: data,
          status: status
        })
      })
    })
  })
}
