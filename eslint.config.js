import js from '@eslint/js';
import globals from 'globals';
import importSort from "eslint-plugin-simple-import-sort"
import pluginVue from 'eslint-plugin-vue';
import vueEslintParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.config.js', '**/*.config.ts'], // <-- 关键修改在这里
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    languageOptions: {
      globals: {
        // ...globals.browser, // 通常在推荐配置中已包含，可以省略
        computed: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineProps: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        reactive: 'readonly',
        ref: 'readonly',
        shallowReactive: 'readonly',
        shallowRef: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
      },
    },
    name: 'xxx/vue/setup',
    plugins: {
      vue: pluginVue,
    },
  },
  {
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs['flat/recommended'].rules,
      'no-console': 'error',
      'no-undef': 'warn',
      'no-unused-vars': 'error',
      'vue/valid-define-emits': 'error',
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        // ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        parser: tsParser,
        sourceType: 'module',
        // project: [
        //   path.join(import.meta.dirname, 'tsconfig.eslint.json'),
        //   path.join(import.meta.dirname, '../../**/tsconfig.json')
        // ],
        // // project: path.join(import.meta.dirname, 'tsconfig.eslint.json'),
        // tsconfigRootDir: import.meta.dirname
      },
    },
    plugins: {
      vue: pluginVue,
      'simple-import-sort': importSort,
    },
  },
];
