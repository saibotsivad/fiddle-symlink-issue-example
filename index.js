#!/usr/bin/env node
const work = async () => {
	console.log('make sure to run "npm run setup" first')

	const plugin1 = await import('./app/build/node_modules/@test1/plugins/markdown.js')
	console.log(plugin1.default('# copied'))
	// ^ you can import this and it resolves to the `app/build/node_modules/markdown-it`

	const plugin2 = await import('./app/build/node_modules/@test2/plugins/markdown.js')
	console.log(plugin2.default('# symlink'))
	// ^ this throws, because ... something with symlinks???
}

work()
	.then(() => console.log('done'))
	.catch(err => console.error('failure', err))
