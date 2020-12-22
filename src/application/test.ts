import * as path from 'path';
import * as fs from 'fs';
import * as showdown from 'showdown';
import { getProjectRoot } from '../utils/io/node/getProjectRoot';
import { of } from '../utils/io';

const headContent: string = `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
  <title>Enrico Polanski's Blog</title>`;

type State = 'ABOUT_ME' | 'BLOG';

const createHeaderContent: (state: State) => string = (
  state: State
) => `<header>
<h1 class="main-header">
  How to overcomplicate your blog with functional programming
</h1>
<nav class="top-nav-bar w100 center-horizontally">
  <ul>
    <li ${state === 'BLOG' ? `class="selected"` : ''}>
      <a href="/index.html">
        BLOG</a>
    </li>
    <li ${state === 'ABOUT_ME' ? `class="selected"` : ''}>
      <a href="/about-me.html">ABOUT ME</a></li>
  </ul>
</nav>
</header>`;

// given a path return a lazy promise of a string
const readFile: (path: string) => Promise<string> = (path: string) =>
  of(() => fs.promises.readFile(path, 'utf8'));

const convertToHtml: (markdown: string) => string = (markdown) =>
  new showdown.Converter().makeHtml(markdown);

// given a head and body element, return a string representing an html document containing both
const createHtmlPage: (
  headContent: string
) => (bodyContent: string) => string = (headContent) => (
  bodyContent
) => `<!DOCTYPE html>
<html lang="en">
  <head>${headContent}</head>
  <body>${bodyContent}</body>
</html>`;

const withHead = createHtmlPage(headContent);

// takes a string representing html and saves it on the file system
const saveHtml: (path: string) => (html: string) => void = (path) => (html) =>
  fs.promises.writeFile(path, html);

const composeBody: (header: string) => (main: string) => string = (header) => (
  main
) => `<div class="root-body">${header + main}</div>`;

const createAboutMeContent = () => {
  return getProjectRoot()
    .then(
      (root) =>
        root + `${path.sep}src${path.sep}application${path.sep}about-me.md`
    )
    .then(readFile)
    .then(convertToHtml);
};

const createIndexContent = () => {
  return getProjectRoot()
    .then(
      (root) =>
        root + `${path.sep}src${path.sep}articles${path.sep}initial-commit.md`
    )
    .then(readFile)
    .then(convertToHtml);
};

// the only evaluation we do, it returns void
const run: (fn: () => void) => void = (fn) => fn();

// run(program); //?
