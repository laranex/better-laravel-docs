import {defineConfigWithTheme} from "vitepress";
import type {ThemeConfig} from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'Better Laravel',
    description: 'A package which allows you to build scalable Laravel Application',
    base: '/docs/',
    cleanUrls: false,
    srcDir: 'src',

    head: [
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: 'https://forge.laravel.com/apple-touch-icon.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            href: 'https://forge.laravel.com/favicon-16x16.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            href: 'https://forge.laravel.com/favicon-32x32.png',
        }],
        ['link', {
            rel: 'manifest',
            href: 'https://forge.laravel.com/site.webmanifest',
        }],
        ['link', {
            rel: 'mask-icon',
            href: 'https://forge.laravel.com/safari-pinned-tab.svg',
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#18b69b',
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: 'forge.laravel.com/mstile-144x144.png',
        }],
        ['meta', {
            property: 'og:image',
            content: 'https://forge.laravel.com/social-share.png',
        }],
        ['meta', {
            property: 'twitter:card',
            content: 'summary_large_image',
        }],
        ['meta', {
            property: 'twitter:image',
            content: 'https://forge.laravel.com/social-share.png',
        }],
    ],

    themeConfig: {
        logo: {
            light: '/logo.svg',
            dark: '/logo.svg',
        },
        nav: [
            {text: 'Github', link: 'https://github.com/laranex/better-laravel'}
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    {text: 'Introduction', link: '/introduction'},
                    {text: 'Principles', link: '/principles'},
                    {text: 'Installation', link: '/installation'},
                    {text: 'Configuration', link: '/configuration'}
                ],
            },
        ],
        search: {
            provider: 'local',
            options: {
                placeholder: 'Search Better Laravel...',
            },
        }
    },
    vite: {
        server: {
            host: true,
            fs: {
                // for when developing with locally linked theme
                allow: ['../..']
            }
        },
    }
})
