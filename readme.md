# Example react monorepo using Bazel

**This is experimental, as part of mds! There may be breaking changes.**

This is part of the ABC project. The overall goal is to make it possible to
develop react/next/apollo applications the same way at Google.

## Guide to the example

This example is a monorepo, meant to show many different features and integrations that we expect are generally useful for enterprise use cases.

## Installation

You only need to install one build tool, and which one you choose typically depends on what kind of development you do most often.

If you're a frontend developer, you should install NodeJS and yarn.
The `package.json` file has an `engines` section which indicates the range of NodeJS and yarn versions that you could use.
You simply run `yarn` commands shown below, and don't need to install Bazel or any other dependencies.

If you're a full-stack developer, you might be using Bazel for your backend already.
In this case, you should install Bazel following instructions at http://bazel.build.
Also install `ibazel`, which is a watch mode for Bazel not included in the standard distribution. See https://github.com/bazelbuild/bazel-watcher#installation.
The `WORKSPACE` file has a `check_bazel_version` call which will print an error if your Bazel version is not in the supported range.
You simply run `bazel` commands shown below, and don't need to install NodeJS, yarn, or any other dependencies.

## Development

First we'll run the development server:

```bash
$ bazel run docs
```
