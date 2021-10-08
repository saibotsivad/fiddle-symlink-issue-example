# fiddle-symlink-issue-example

This repo is an example of symlink behaviour which surprised me at the time.

Here's the symlink

```
app/build/node_modules/@test2/plugins
=>
app/_plugins
```

A dependency (in this example `markdown-it`) is installed in `app/build` and the file at `app/_plugins/markdown.js` imports it.

My expectation was that the symlink would be treated as a normal folder in the NodeJS resolution algorithm, and I saw nothing about symlinks in the docs: https://nodejs.org/api/esm.html#esm_resolution_algorithm

However, I stumbled across the NODE_PRESERVE_SYMLINKS option: https://nodejs.org/api/cli.html#cli_node_preserve_symlinks_1

> NODE_PRESERVE_SYMLINKS=1
>
> Added in: v7.1.0
>
> When set to `1`, instructs the module loader to preserve symbolic links when resolving and caching modules.

So, that's that I guess.

You can try this out by running `npm install` then `npm run setup` then you can run the JS file directly to see the failing state `node ./index.js` and use the shell script `bash ./bin.sh` to see a success.

Have a look at the `setup` run script, then look at the `cli.js` file for comments.
