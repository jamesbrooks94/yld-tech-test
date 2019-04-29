export const Lazy = () => {
  const functionsArray = []

  const add = fnToAdd => functionsArray.push(fnToAdd)

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
