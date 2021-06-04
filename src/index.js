
import { join } from 'path'

import fs from 'fs'

const defaultTheme = require('tailwindcss/defaultTheme')

export default async function () {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error('please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`')
  }

  nuxt.options.colorMode = {
    ...{ classSuffix: '' },
    ...nuxt.options.colorMode
  }
  await this.addModule('@nuxtjs/color-mode')

  nuxt.options.fontawesome = {
    ...{ component: 'fa', icons: { solid: [] } },
    ...nuxt.options.fontawesome
  }
  await this.addModule('@nuxtjs/fontawesome')

  nuxt.options.tailwindcss = {
    cssPath: fs.existsSync("assets/css/tnt.css") ? "~/assets/css/tnt.css" : join(__dirname, "assets/tnt.css"),
    config: {
      theme: {
        extend: {
          colors: {
            primary: defaultTheme.colors.blue
          }
        }
      }
    }
  }
  await this.addModule('@nuxtjs/tailwindcss')
  this.nuxt.hook('tailwindcss:config', function (tailwindConfig) {
    tailwindConfig.purge.content.push('content/**/*.md')
    tailwindConfig.darkMode = 'class'
    tailwindConfig.plugins.push(require('@tailwindcss/forms'))
  })

  this.nuxt.hook('modules:before', () => {
    //
  })

  this.nuxt.hook('build:before', () => {
    //
  })

  this.extendBuild(config => {
    //
  })

  this.nuxt.hook("components:dirs", (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, "components"),
      prefix: "tnt",
      level: 1
    })
  })

  // Currently broken - cannot load components.
  if (!fs.existsSync("layouts/default.vue")) { // If exists, overwrites...
    this.addLayout({
      name: 'default',
      src: join(__dirname, "layouts/default.vue")
    })
  }

  if (!fs.existsSync("layouts/error.vue")) { // If exists, overwrites...
    this.addLayout({
      name: 'error',
      src: join(__dirname, "layouts/error.vue")
    })
  }
}
