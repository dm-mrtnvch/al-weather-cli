import chalk from 'chalk'
import dedent from 'dedent'


const {bgGreen, bgRed, bgCyan, bgYellow} = chalk

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

const printWeather = (res, icon) => {
  console.log(
    dedent`${bgYellow(' WEATHER ')} Weather in city ${res.name}
    ${icon} ${res.weather[0].description}
    temperature: ${res.main.temp} (feels like ${res.main.feels_like})
    humidity: ${res.main.humidity}%
    wind: ${res.wind.speed}
    `
  )
}


export {printSuccess, printError, printHelp, printWeather}
