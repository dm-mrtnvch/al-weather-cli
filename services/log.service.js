import chalk from 'chalk'
import dedent from 'dedent'


const {bgGreen, bgRed, bgCyan} = chalk

const printSuccess = (message) => {
  console.log(bgGreen('SUCCESS:'), message)
}

const printError = (error) => {
  console.log(bgRed('ERROR:'), error)
}

const printHelp = () => {
  console.log(
    dedent(`${bgCyan(' HELP ')}
    without params - weather input
    -s [CITY] to set a city
    -h for help
    -t [API_KEY] to save token`
    ))
}

export {printSuccess, printError, printHelp}
