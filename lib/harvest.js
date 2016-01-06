import xray from 'x-ray'
import request from 'superagent'
import phantom from 'x-ray-phantom'

const x = xray().driver(phantom())
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

export default (meta, payload) => {
  return new Promise((resolve, reject) => {
    const { url, ajax } = meta
    request.get(url)
           .end((error, response) => {
      let { text, status } = response

      if (undefined !== ajax)
        text = url

      x(text, build( payload ))((error, data) => {
        if (error) reject(error)

        resolve({
          metadata: {
            status: status
          },
          payload: data
        })
      })
    })
  })
}
