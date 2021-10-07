import markdown from 'markdown-it'

const md = markdown()

export default string => md.render(string)
