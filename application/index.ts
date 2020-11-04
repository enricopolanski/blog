import * as showdown from 'showdown';
import * as fs from 'fs';
import * as path from 'path';

const articleFileName = 'initial-commit.md';

const articleFilePath =
  path
    .dirname(__filename)
    .split(path.sep)
    .map((el, i, arr) => (i === arr.length - 1 ? 'articles' : el))
    .join(path.sep) +
  path.sep +
  articleFileName;

const convertToHtml: (markdown: string) => string = (markdown) =>
  new showdown.Converter().makeHtml(markdown);

const getArticle = (path: string) => fs.promises.readFile(path, 'utf8');

const program: () => void = () => {
  getArticle(articleFilePath).then(convertToHtml).then(console.log);
};

const run: (fn: () => void) => void = (fn) => fn();

run(program);
