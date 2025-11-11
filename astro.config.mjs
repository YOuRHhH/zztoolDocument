// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  site: 'https://yourhhh.github.io', // 你的实际域名
  base:"/zztoolDocument/",
  trailingSlash: "ignore",
  build: {
    format: 'directory'
  },
  // i18n: {
  //   locales: ["zh-CN", "en"],
  //   defaultLocale: "zh-CN",
  // },
	integrations: [
		starlight({
			title: '@zzcpt/zztool',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/YOuRHhH/zztool' }],
      sidebar: [
        {
          label: '快速开始',
          items:[
            {label:'📦 安装 install',link:'start/install'},
            {label:'🚀 使用 usage',link:'start/usage'},
            {label:'🍔 更新日志',link:'https://github.com/YOuRHhH/zztool/blob/main/CHANGELOG.md'}
          ]
          
        },
        {
          label: '方法', 
          items: [
            {
              label: '对象操作',
              autogenerate: { directory: 'example/object' }
            },
            {
              label: '数组操作',
              autogenerate: { directory: 'example/array' }
            },
            {
              label: '日期',
              autogenerate: { directory: 'example/date' }
            },
            {
              label: '字符串',
              autogenerate: { directory: 'example/string' }
            },
            {
              label: '正则校验',
              autogenerate: { directory: 'example/regExp' }
            },
            {
              label: '存储',
              autogenerate: { directory: 'example/storage' }
            },
            {
              label: '工具',
              autogenerate: { directory: 'example/utils' }
            },
          ]
        }
      ],
		}),
		mdx(),
	],
});
