import test from 'ava'

test('异步测试', async (t) => {
  const data = await Promise.resolve('Hello AVA')
  t.is(data, 'Hello AVA')
})