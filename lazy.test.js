import { Lazy } from './lazy'

describe('Lazy tests', () => {
  it('Should be able to add a simple function to the array and execute', () => {
    const computation = Lazy()
    computation.add(Math.sqrt)

    expect(computation.evaluate([4])).toEqual([2])
  })
  it('Should be able to add a complex function with a parameter passed', () => {
    const computation = Lazy()

    computation.add((a, b) => a + b, 2)
    computation.add(a => a * 2)

    expect(computation.evaluate([1, 5, 7, 8])).toEqual([6, 14, 18, 20])
  })
  it('Should be able to add a complex function with multiple parameters passed', () => {
    const computation = Lazy()

    //I have named the variables below to clearly see where they are, representing their values.
    computation.add((two, three, a) => (a + two) * three, 2, 3) // 5 + 2 = 7, 7 * 3 = 21
    computation.add(a => a * 2) // 21 * 2 = 42

    expect(computation.evaluate([5, 10, 16])).toEqual([42, 72, 108])
  })
})
