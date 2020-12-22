import * as fs from 'fs';
import * as path from 'path';

interface SynchOperation<A> {
  (): A;
}

interface ASynchOperation<A> {
  (): Promise<A>;
}

type NodeOperation<A> = SynchOperation<A> | ASynchOperation<A>;

export const readDirectory: (path: string) => NodeOperation<string[]> = (
  path
) => () => fs.promises.readdir(path);

export const getAbsoluteDirectory: (
  directory: string
) => SynchOperation<string> = (directory) => () => path.parse(directory).dir;

export const getParent: (directory: string) => SynchOperation<string> = (
  directory
) => () => path.dirname(directory);

export const nodePath: string = getAbsoluteDirectory(__filename)();
