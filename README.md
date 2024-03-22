# byelide-demo-01

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

```
架构0-1：把控整个app生命周期开发周期
    1.需求评审 方案评审(针对不同模块用什么方案)
    2.开发模块化设计
    3.用什么搭建框架(vite  webpack5)
    4.选模块(SSR:nestjs lastjs; 客户端结构:spa  multi)
    5.构建脚本(webpack build  loader  plugin)
    6.团队规范(stylelint  cspellcheck commitlint)
    7.开发节奏(大厂一周开发 一周测试)
    8.功能提测 代码review
    9.通过分支管控实现(master  feature开发)开发完提到测试环境 发布时做归档处理
    9.CI/CD(资源是否需要cdn加速 构建过程中使用什么样的方式构建docker、静态资源方式  nginx做反向代理)
    10.上线完成后做版本控制 版本迭代



.eslintrc.cjs文件中新增 页面禁止console.log no-debugger  no-explicit-any:error 禁止any类型
    rules:{
        "no-console":"off",
        "no-debugger":"off",
        "no-explicit-any":"error"
    }

package.json新增：
 "devDependencies": {
    "stylelint":"",
    "typescript-eslint":''
 }





```
