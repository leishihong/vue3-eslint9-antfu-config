module.exports = {
  '**/*.{css,scss,vue}': ['stylelint  --fix --cache'],
  '**/*.{ts,tsx,vue}': ['eslint --fix --cache'],
  '*.md': ['prettier --write']
}
