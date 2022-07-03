#!/usr/bin/env mode
import getArgs from './helpers/args.js';
import {printError, printHelp, printSuccess, printWeather} from './services/log.service.js';
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from './services/storage.service.js';
import {getIcon, getWeather} from './services/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('token is required')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('token was saved')
  } catch (e) {
    printError(e.message)
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('city is required')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess('city was saved')
  } catch (e) {
    printError(e.message)
  }
}

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
    const weather = await getWeather(city)
    printWeather(weather, getIcon(weather.weather[0].icon))
  } catch (e) {
    if (e?.response?.status === 404) {
      printError('invalid city')
    } else if (e?.response?.status === 401) {
      printError('invalid token')
    } else {
      printError(e.message)
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  }
  if (args.s) {
   saveCity(args.s)
  }
  if (args.t) {
    return saveToken(args.t)
  }
  getForecast()
}

initCLI()
