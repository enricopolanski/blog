# Initial Commit

What should be a good first entry for a _blog about developing a blog in a git repo_?

Well, we're developing two things:

1. a blog, like most blogs on the internet I know, is just a web page containing articles
2. a git project made of source files, configuration files and content necessary to deploy the blog itself.

Let's lay down the requirements:

- blog

  - its the main application of this repo and is deployed, as any other blog on the internet, as a web page
  - should display info about me and a list of articles.
  - the list of articles should be non empty (if the list of articles is empty, where's the blog?)

- git project

  - should be public
  - should contain all the content necessary to build and deploy the application

Now we have a set of requirements. It's nice to know what your goals are, it makes it easier to not get lost as well as to track completion of the goal.

Let's start with the git project.

We'll start in a brand empty folder, and `git init` a new project. We'll use the `main` branch as the reference branch and the one that will always get published. We'll leverage other branches eventually for development and testing.

I create two branches: `development`, which I'll treat as the main branch for development, and `article-1`, which is a branch forked from `development` where I'll implements all the requirements for `article-1`.

I'll use this [guide on github](https://guides.github.com/features/wikis/#Formatting-a-readme) as a starting point on how to document a project.

The starting point of any good repository is a `README.md` file. These should be the requirements of a good README:

- Project name.

- Description.

- Table of Contents.

- Installation.

- Usage.

- Contributing.

- Credits.

- License.

README.md

> # Enrico Polanski Blog
>
> ## Description
>
> This is a git "blog". It contains code and content needed to release my personal blog. Each pull request merged into `main` results in a new release of the blog.
>
> ## Installation
>
> TODO: At the moment there is nothing to install
>
> ## Usage
>
> There are two main ways to consume this blog. You can either `git clone TODO: INSERT REPO` > the project on your device and consume the software and blog articles directly on your file > system/ide or you can simply read the published version on: TODO: INSERT LINK.
> The latest article can be found at `TODO: INSERT LINK`.
>
> ## Contributing
>
> See Contributing.md
>
> ## License
>
> See License.md

So, we got out of the way: Project Name: Enrico Polanski's Blog, we filled in a description, contributing and license will go into separate files. The Table of Contents is not needed right now. As for installation, we're not done developing the application yet so I can't describe yet the installation procedure. It will get postponed for later.

Note: TODO: found in code are basically bookmarks for future improvement. If I get lost in the project and I don't know what to do I can always query "TODO:" in my projects and find what needs to be done or improved.

As for the license, we'll copy paste the MIT license. It's an important feature for a blog about solutions to software problems that people can use or change the software itself. You're free to do anything you want with it. A summary of the MIT License can be found [here](https://tldrlegal.com/license/mit-license#summary). The full text can be found in License.md.

For the contribution file, we'll copy and edit [this template](https://gist.github.com/PurpleBooth/b24679402957c63ec426). The overall spirit of contributions is open to anyone. You can clone this repo and do what you want with it. You can also contribute to it by writing an article, translating it, correcting it, from the typos to the content, finding better implementations in the source code or anything you want really. Everything merged into `main` will be released on the blog as well.

I don't expect lots of contributors at the moment, so an edited template for now we'll do. We'll evaluate in the future how to improve it, when and if we'll have the problem.

At this point. We have the basics of our project up. I created a repo

After writing the first 88 lines of this file (`initial-commit.md`) and the README, CONTRIBUTING, LICENSE files I am ready to commit in the `article-1` branch of the `development` branch.
