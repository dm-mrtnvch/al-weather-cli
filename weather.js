#!/usr/bin/env mode
import getArgs from './helpers/args.js';
import {printError, printHelp, printSuccess} from './services/log.service.js';
import {saveKeyValue, TOKEN_DICTIONARY} from './services/storage.service.js';
import {getWeather} from './services/api.service.js';

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

const getForecast = async () => {
  try {
    const weather = await getWeather(process.env.CITY)
    console.log(weather)
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
    // save city
  }
  if (args.t) {
    return saveToken(args.t)
  }
  getForecast()
}

initCLI()
