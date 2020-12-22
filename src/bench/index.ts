/**
 * This file is a free bench to test stuff :)
 */

import {
  nodePath,
  getAbsoluteDirectory,
} from '../utils/io/node/getCurrentPath';
import * as path from 'path';
import * as fs from 'fs';

const absoluteDirectory = getAbsoluteDirectory(__filename)(); //?
fs.promises.readdir(absoluteDirectory); //?
