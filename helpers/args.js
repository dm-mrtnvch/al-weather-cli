const getArgs = (args) => {
  const res = {}
  const [executor, file, ...restArgs] = args
  restArgs.forEach((arg, index, array) => {
    if(arg.charAt(0) === '-'){
      if(index === array.length - 1){
         res[arg.substring(1)] = true
      } else if(array[index + 1] !== '-'){
        res[arg.substring(1)] = array[index + 1]
      } else {
        res[arg.substring(1)] = true
      }
    }
  })
  return res
}

export default getArgs
