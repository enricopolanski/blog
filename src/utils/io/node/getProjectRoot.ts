import * as path from 'path';
import { filter } from '../../array';
import { Refinement } from '../../functions';

const isPackageJson: Refinement<string, 'package.json'> = (
  s
): s is 'package.json' => s === 'package.json';

const hasPackageJson = (ss: string[]) => filter(isPackageJson)(ss).length > 0;

/**
 * Recursively check the current directory and its parents till it finds a directory containing a package.json file, then returns the path as a string, or `undefined`.
 *
 * @example
 * getProjectRoot()
 * checks [ '/home/enrico/dev/blog/src', '/home/enrico/dev/blog', '/home/enrico/dev', '/home/enrico', '/home' ]
 * // when resolved will return '/home/enrico/dev/blog'
 * */
export const getProjectRoot = () => {
  const currentPath = path.dirname(__dirname);
  // const pathsArray = currentPath.split(path.sep);
  // const paths = reduce<string, string[]>([], (acc, val) => [
  //   ...acc,
  //   (last(acc) || '') + val + '/',
  // ])(pathsArray);
  // return Promise.all(paths.map((path) => fs.promises.readdir(path)))
  //   .then((directories) => directories.map(isRoot))
  //   .then((dirs) => paths.filter((_, i) => dirs[i]))
  //   .then((roots) => (roots[0] ? roots[0] : undefined));
};
