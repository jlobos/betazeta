import test from 'ava'
import { article, articles, tag, search } from './index'

test('article', async t => {
  const {
    siteCode,
    title,
    type
  } = await article({
    name: 'la-ultima-temporada-de-game-of-thrones-sera-tremendamente-corta',
    site: 'fayerwayer'
  })

  t.is(siteCode, 'fayerwayer')
  t.is(title, 'La octava temporada de Game Of Thrones será extremadamente corta')
  t.is(type, 'post')
})

test('articles of fayerwayer', async t => {
  const {
    items,
    limit
  } = await articles({ localization: 'cl', site: 'fayerwayer' })

  t.is(items[0].siteCode, 'fayerwayer')
  t.is(limit, 10)
})

test('best articles of last 7 days', async t => {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 7)

  const {
    limit
  } = await articles({ startDate, order_by: 'social_weight' })

  t.is(limit, 10)
})

test('tag', async t => {
  const { name, slug } = await tag({ name: 'game-of-thrones' })

  t.is(name, 'Game of Thrones')
  t.is(slug, 'game-of-thrones')
})

test('search', async t => {
  const { taglist } = await search({ site: 'betazeta', q: 'docker' })
  t.is(taglist.query, 'docker')
})
