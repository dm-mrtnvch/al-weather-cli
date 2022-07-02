#!/usr/bin/env mode
import os from 'os'
import getArgs from './helpers/args.js';
import {printHelp} from './services/log.service.js';
import {saveKeyValue} from './services/storage.service.js';

const initCLI = () => {
  const args = getArgs(process.argv)
  // console.log(args)
  if(args.h) {
    printHelp()
  }
  if(args.s){
    // save city
  }
  if(args.t){
    saveKeyValue('token', args.t)
  }
  // show weather
}

initCLI()
