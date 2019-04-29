export const Lazy = () => {
  const functionsArray = []

  const add = (fn, ...args) => {
    functionsArray.push(param => fn(...args, param))
  }

  const evaluate = array =>
    array.map(item =>
      functionsArray.reduce(
        (lastValue, currentFunction) => currentFunction(lastValue),
        item
      )
    )

  return {
    add,
    evaluate,
  }
}
