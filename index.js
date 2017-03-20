// Packages
const fetch = require('node-fetch')
const qs = require('qs')

const API = 'https://api.betazeta.com'

const r = (method, path, params = {}) => {
  let url = `${API}/${path}`
  let payload = {
    method,
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Origin': 'https://github.com/jlobos/betazeta'
    }
  }

  if (method === 'GET') {
    params = qs.stringify(Object.assign({
      // default
      content: true,
      crossContent: true,
      full: true,
      mini: true
    }, params))
    url = `${url}?localization=WW&${params}`
  }

  return new Promise((resolve, reject) => {
    fetch(url, payload)
    .then(res => {
      if (res.status >= 400) {
        return reject(Error('Uno de los monos que tenemos dándole cuerda a los servidores se resbaló con una cáscara de plátano y quedó inconsciente. Por favor vuelve más tarde mientras lo reanimamos.'))
      } else {
        return res.json()
      }
    })
    .then(resolve)
  })
}

module.exports = {
  article: ({ site, name }) => r('GET', `data/site/${site}/${name}`),
  articleNext: ({ site, name }) => r('GET', `data/site/${site}/${name}/next`),
  articlePrev: ({ site, name }) => r('GET', `data/site/${site}/${name}/prev`),
  articles: params => r('GET', 'content', params),
  search: ({ site = 'betazeta', q }) => r('GET', `data/site/${site}/search`, { q }),
  tag: ({ name }) => r('GET', `agroupations/tag/${name}`)
}
