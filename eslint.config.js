import globals from 'globals'
import parser from 'vue-eslint-parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  {
    ignores: [
      '**/*.sh',
      '**/node_modules',
      '**/*.md',
      '**/*.woff',
      '**/*.ttf',
      '**/.vscode',
      '**/.idea',
      '**/dist',
      'public',
      'docs',
      '**/.husky',
      '**/.local',
      '**/.eslintrc.cjs',
      '**/.prettierrc.cjs',
      '**/.stylelintrc.cjs',
      'bin'
    ]
  },
  ...compat.extends(
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs,
        ...globals.browser
      },

      parser: parser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },

    rules: {
      'vue/script-setup-uses-vars': 'error',
      'vue/custom-event-name-casing': 'off',
      'no-use-before-define': 'off',
      'no-misleading-character-class': 'off',
      'no-useless-escape': 'off',
      'vue/no-reserved-component-names': 'off',
      'no-undef': 2, // 任何对未声明的变量的引用都会导致错误
      'vue/no-dupe-keys': 'off',
      'vue/no-unused-vars': 'off',
      'vue/no-unused-components': 'off',
      'vue/valid-v-for': 'warn',
      'no-empty': 'off',
      'no-shadow': 'off',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'prefer-const': 'warn',
      'space-before-function-paren': 'off',
      'vue/attributes-order': 'off',
      'vue/one-component-per-file': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/require-default-prop': 'off',
      'arrow-spacing': [2, { before: true, after: true }], // 箭头间距
      'brace-style': [2, '1tbs', { allowSingleLine: false }], // 大括号样式允许单行
      camelcase: [2, { properties: 'always' }], //为属性强制执行驼峰命名
      eqeqeq: ['error', 'always', { null: 'ignore' }], // 强制使用全等
      'no-delete-var': 2, // 不允许在变量上使用delete操作符
      'no-dupe-args': 2, // 不允许在函数声明或表达式中使用重复的参数名称
      'no-dupe-keys': 2, // 不允许在对象文字中使用重复键
      'no-duplicate-case': 2, // 不允许在switch语句的case子句中使用重复的测试表达式
      'no-eval': 2, // 不允许使用eval
      'no-implied-eval': 2, // 消除隐含eval()
      'no-invalid-regexp': 2, //不允许RegExp构造函数中的无效正则表达式字符串
      'no-irregular-whitespace': 2, //捕获无效的空格
      'no-ex-assign': 2, // 不允许在catch子句中重新分配例外
      'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
      'no-return-assign': [2, 'except-parens'], // 消除return陈述中的任务，除非用括号括起来
      // 关闭特殊文件名称的校验，组件文件名称需要2个以上的连词，除了index和404以为
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['index', 'Layout', 'Login', '403', '404', '500'] //在这个数组中加入的文件名字需要忽略的组件名
        }
      ],

      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always'
          },

          svg: 'always',
          math: 'always'
        }
      ]
    }
  }
]
