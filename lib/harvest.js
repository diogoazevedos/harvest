import xray from 'x-ray'
import request from 'superagent'
import phantom from 'x-ray-phantom'

const x = xray().driver(phantom())
const build = payload => {
  let source = payload
  if (payload instanceof Array) {
    payload = payload[0]
  }

  let scope = payload.$root
  delete payload.$root

  for (let key in payload) {
    if (payload[key] instanceof Array) {
      payload[key] = build(payload[key])
    }
  }

  if (undefined !== scope && source instanceof Array) {
    return x(scope, [payload])
  } else if (undefined !== scope) {
    return x(scope, payload)
  } else if (source instanceof Array) {
    return x([payload])
  }

  return x(payload)
}

export default (meta, payload) => {
  return new Promise((resolve, reject) => {
    const { link, dynamic } = meta
    request.get(link).end((error, response) => {
      let { text, status } = response

      if (true === dynamic) text = link

      x(text, build( payload ))((error, data) => {
        if (error) reject(error)

        resolve({ status: status, payload: data })
      })
    })
  })
}
