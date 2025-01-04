import globals from 'globals'
import parser from 'vue-eslint-parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

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
		plugins: {
			unicorn: eslintPluginUnicorn
		},
		languageOptions: {
			globals: {
				...globals.node,
				...globals.commonjs,
				...globals.browser,
				withDefaults: true,
				defineExpose: true,
				defineEmits: true,
				defineProps: true
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
			'vue/component-options-name-casing': 'error', // 强制在components选项中对组件名称进行大小写(PascalCase)
			'vue/custom-event-name-casing': ['error', 'camelCase'], // 在 Vue 3 中，使用 camelCase 或 kebab-case 作为自定义事件名称不会限制其在 v-on 中的使用。但是，遵循 JavaScript 约定，camelCase 更自然。
			'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
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
			'no-multiple-empty-lines': [2, { max: 1 }], // 连续空行不超过 1 行
			'no-extra-semi': 2, // 不允许出现多余的分号
			'key-spacing': [2, { beforeColon: false, afterColon: true }], // 属性名与冒号之间不能有空格，冒号后必须有空格
			'new-cap': ['error', { newIsCap: true, capIsNew: false }], // 构造函数首字母必须大写
			'no-else-return': [1, { allowElseIf: false }], // 禁止 else 语句，如果 if 语句中已返回值
			'no-loop-func': 2, // 禁止在循环中定义函数
			'no-implicit-coercion': [1, { allow: ['!!'] }], // 禁止隐式类型转换
			'max-lines-per-function': [
				1,
				{
					max: 50, // 函数最大行数为 50 行
					skipComments: true, // 跳过注释行
					skipBlankLines: true, // 跳过空行
					IIFEs: true // 对立即调用的函数表达式 (IIFE) 应用规则
				}
			],
			'prefer-template': 1, // 建议使用模板字符串
			'no-duplicate-imports': 2, // 禁止重复导入
			'max-params': [1, 3], // 函数参数最大数量为 3
			'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }], // 要求箭头函数的参数使用圆括号
			// 关闭特殊文件名称的校验，组件文件名称需要2个以上的连词，除了index和404以为
			'vue/multi-word-component-names': 'off',
			// 'vue/multi-word-component-names': [
			// 	'error',
			// 	{
			// 		ignores: ['index', 'Layout', 'Login', '403', '404', '500'] //在这个数组中加入的文件名字需要忽略的组件名
			// 	}
			// ],
			'unicorn/better-regex': 'error',
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						kebabCase: false,
						camelCase: false,
						pascalCase: true,
						snakeCase: false
					},
					ignore: ['\\.(?:(?:(?:j|t)sx?)|(?:j|t)s)$']
				}
			],
			// 强制类名命名规范为 item-cell 而不是 item--cell 或 item_cell
			// 'jsdoc/require-jsdoc': ['error', {
			//   require: {
			//     FunctionDeclaration: true, // 要求函数声明有 JSDoc 注释
			//     MethodDefinition: true,    // 要求方法定义有 JSDoc 注释
			//     ClassDeclaration: true,    // 要求类声明有 JSDoc 注释
			//     ArrowFunctionExpression: false, // 不要求箭头函数有 JSDoc 注释（可选）
			//     FunctionExpression: false, // 不要求匿名函数表达式有 JSDoc 注释（可选）
			//   },
			//   // camelCase: false,
			//   // PascalCase: false,
			//   // 'kebab-case': true, // 强制使用 kebab-case (item-cell)
			//   // allowLeadingUnderscore: false,
			//   // allowSingleCharacter: false,
			//  }],
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
