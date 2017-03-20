# betazeta API para Node.js (no oficial)

[![Build Status](https://travis-ci.org/jlobos/betazeta.svg?branch=master)](https://travis-ci.org/jlobos/betazeta)
[![Build status](https://ci.appveyor.com/api/projects/status/3ap1yhyelal1y332?svg=true)](https://ci.appveyor.com/project/jlobos/betazeta)
[![bitHound Dependencies](https://www.bithound.io/github/jlobos/betazeta/badges/dependencies.svg)](https://www.bithound.io/github/jlobos/betazeta/94a330313a9944243e4708321c92c54b7ce2751e/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/jlobos/betazeta/badges/code.svg)](https://www.bithound.io/github/jlobos/betazeta)

Simple librería para casi todo el contenido de [Betazeta](https://www.betazeta.com/) (Belelú, Bólido, Fayerwayer, Niubie, Sabrosía, Wayerless, Betazeta, Ferplei, Saborizante, Veoverde).

## Instalación

```sh
$ npm install --save betazeta
```

## Uso

```js
const betazeta = require('betazeta')

betazeta.articles({ site: 'fayerwayer' }).then(articles => {
  console.log(articles)
})
```

## API

### .articles(`object`)

Obtener un listado de artículos.

#### Parámetros soportados

- `content` - `boolean` mostrar el contenido de los artículos, por defecto `true`
- `endDate` - `string` obtener artículos a partir de una fecha final
- `full` - `boolean`
- `localization` - `string ` artículos de acuerdo a un país específico
- `mini` - `boolean` obtener solo algunos datos de los artículos, por defecto `true`
- `order_by` - `string` indicar un orden
- `page` - `number` número de página
- `pageSize` - `number` total de artículos
- `site` - `string` nombre del sitio
- `startDate` - `string` obtener artículos a partir de una fecha inicial

#### Ejemplos

- [Populares últimos 7 días](https://www.betazeta.com/top/)

```js
const startDate = new Date()
startDate.setDate(startDate.getDate() - 7)

betazeta.articles({ startDate, order_by: 'social_weight' }).then(res => {
  console.log(res)
})
```

- [Últimos 30 artículos de VeoVerde para Chile](https://www.veoverde.com/)

```js
betazeta.articles({
  localization: 'cl',
  pageSize: 30,
  site: 'veoverde'
}).then(res => {
  console.log(res)
})
```

### .article(`object`)

Obtener un artículo a partir de su identificador.

#### Parámetros soportados

- `name` - `string` identificador del articulo
- `site` - `string` nombre del sitio

#### Ejemplos

- Obtener el artículo [La octava temporada de Game Of Thrones será extremadamente corta](https://www.fayerwayer.com/2017/03/la-ultima-temporada-de-game-of-thrones-sera-tremendamente-corta/)

```js
betazeta.article({
  name: 'la-ultima-temporada-de-game-of-thrones-sera-tremendamente-corta',
  site: 'fayerwayer'
}).then(res => {
  console.log(res)
})
```

### .articleNext(`object`)

Obtener el artículo siguiente al especificado

#### Parámetros soportados

- `name` - `string` identificador del articulo
- `site` - `string` nombre del sitio

### .articlePrev(`object`)

Obtener el artículo anterior al especificado

#### Parámetros soportados

- `name` - `string` identificador del articulo
- `site` - `string` nombre del sitio

### .search(`object`)

Buscar artículos

#### Parámetros soportados

- `q` - `string` que buscar
- `site` - `string` nombre del sitio donde se buscara

#### Ejemplos

- Buscar sobre Game of Thrones en Fayerwayer

```js
betazeta.search({
  q: 'game of thrones',
  site: 'fayerwayer'
}).then(res => {
  console.log(res)
})
```

### .tag(`object`)

Obtener datos de un tag

#### Parámetros soportados

- `name` - `string` nombre del tag

#### Ejemplos

- Tag de Game of Thrones en Fayerwayer

```js
betazeta.tag({ name: 'game-of-thrones' }).then(res => {
  console.log(res)
})
```

## Licencia

MIT
