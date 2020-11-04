# Initial Commit

What should be a good first article for a _blog about developing a blog in a git repo_?

I guess we should lay down the process that brought us to read that blog online!

Let's lay down the requirements:

- blog

  - a web page: as any other blog on the internet we'll deploy a web application
  - content to the web page: the article you're reading and some information about me, I guess

- git project
  - should contain all source, configuration and content files necessary to deploy the blog itself.

Writing down the goals makes it easier to complete a task, doesn't it?

Let's start with the git project.

We'll start in a brand empty folder, and `git init` a new project. We'll use the `main` branch as the reference production branch. We'll leverage other branches eventually for development and testing, in particular:

- `development`, which I'll treat as the main branch for development
- `article-1`, which is a branch forked from `development` where I'll implements all the requirements for `article-1`.

Let's document the project? I'll use this [guide on github](https://guides.github.com/features/wikis/#Formatting-a-readme) as a starting point.

We'll first write a `README.md` file following the previous guide:

README.md

> # Enrico Polanski Blog
>
> ## Description
>
> This is a git "blog". It contains code and content needed to release my personal blog. Each pull request merged into `main` results in a new release of the blog with a new article.
>
> ## Installation
>
> SKIP FOR NOW, WE HAVEN'T INSTALLED ANY SOFTWARE YET
>
> ## Usage
>
> There are two main ways to consume this blog. You can either clone the project `git clone https://github.com/enricopolanski/blog.git` on your device and consume the software and blog articles directly on your filesystem/ide or you can simply read the published version on: TODO: INSERT LINK.
> The latest article can be found at `TODO: INSERT LINK`.
>
> ## Contributing
>
> See Contributing.md
>
> ## License
>
> See License.md

So, we got most info out of the way:; we don't need The Table of Contents right now as we don't have contents yet. As for installation, all I've done till now was create a repo and write a `README` file so we still don't know what are the software requirements.

As for the license, we'll copy paste the MIT license. It's an important feature for a blog about solutions to software problems that people can use or change the software itself and do anything they want with it. A summary of the MIT License can be found [here](https://tldrlegal.com/license/mit-license#summary). The full text can be found in `License.md`.

For the contribution file, we'll copy and edit [this template](https://gist.github.com/PurpleBooth/b24679402957c63ec426). Everything merged into `main` will be released on the blog as well and everyone's free to contribute!

I don't expect lots of contributors at the moment, so an edited template for now we'll do to the job

At this point. We have the basics of our project up. And can commit on the `article-1` branch.

You can track the content that this project had by the hash of the specific commit.

running `git log`:

    commit 49ee65349fd220112cf139663e9ed45793432afb (HEAD -> article-1, origin/article-1)
    Author: EnricoPolanski <stuff>
    Date:   Sun Nov 1 20:50:10 2020 +0100

    feat (articles): Added first version of initial-commit.md

Among the various info we have the hash of the current commit: 49ee65349fd220112cf139663e9ed45793432afb

I can now forever point to this specific version of my blog!

I can, e.g., checkout to this specific commit and create a totally different version of this project. I can also simply use the hash to point you to the following URL:

https://github.com/enricopolanski/blog/tree/49ee65349fd220112cf139663e9ed45793432afb

which will only contain the 3 project files (CONTRIBUTING, README, LICENSE) and the half-worked `initial-commit.md`.

### The Blog

---

We have a public project with its basic info, we half-written the first article, what we miss is to write an application that will display our blog. Let's check again the requirements.

> - a web page: as any other blog on the internet we'll deploy a web application
> - content to the web page: the article you're reading and some information about me, I guess

Let's translate the requirements and try to find the shortest and simplest way to release my blog.

- a web page
- should contain an article (we're doing so right now, so we got that)
- should contain about me information

At this point all we need to do is implement a program that will generate an `.html` file.

I'll use TypeScript to write such a program, thus we'll need Node.js and add it to the dependencies to the README file. We'll use `TypeScript 4.0.5` on `Node v15.0.1` in this commit.

We'll initiate a new npm project through `npm init` and a TypeScript configuration file through `tsc --init`. I'll skip over the specific configurations, if you're interested in them check the project files at _this commit_, use GitHub issues if you have curiosities or want to discuss those or any other content in the blog/project.

We have now all we need to generate or first blog entry.

Lets write a basic html file, let's start with the `<head>` tag content. `head.html` and put it under `application/head.html`.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Enrico Polanski's Blog</title>
</head>
```

Now, we need content for the body, we'll put it in `application/index.html`.

It would be nice to have a list of articles, but does it makes sense when there's only one article? No, which is why we didn't have it in our requirements.

Thus, the body for our index is simply an html version of this article!
