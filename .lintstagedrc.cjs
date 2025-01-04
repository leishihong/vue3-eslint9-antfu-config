module.exports = {
  '**/*.{css,scss,vue}': ['stylelint  --fix --cache'],
  '**/*.{ts,tsx,vue}': ['pretty-quick --staged', 'eslint --fix --cache'],
  '*.md': ['prettier --write']
}
