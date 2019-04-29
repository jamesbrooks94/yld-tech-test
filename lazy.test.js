import { Lazy } from './lazy'

describe('Lazy tests', () => {
  it('Should be able to add a simple function to the array and execute', () => {
    const computation = Lazy()
    computation.add(Math.sqrt)

    expect(computation.evaluate([4])).toEqual([2])
  })
})
