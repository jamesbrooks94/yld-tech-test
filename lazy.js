export const Lazy = () => {
  const functionsArray = []

  const add = fnToAdd => functionsArray.push(fnToAdd)

  const evaluate = arrayOfValues => {
    return arrayOfValues.map(item => {
      let result = item
      functionsArray.forEach(fn => {
        result = fn(result)
      })
      return result
    })
  }

  return {
    add,
    evaluate,
  }
}
