## Features

TNT is a Nuxt component library that comes with:

- Nuxt Image
- Pug
- Tailwind CSS + Tailwind CSS Forms
- PostCSS
- Nuxt Color Mode
- Font Awesome
- Simple Icons

These are used to create a base set of components and plugins for my Nuxt projects.

> **What does TNT stand for?**
> When I conceived of the name, it was just "Thom's Nuxt Template".
> As the project has evolved, I've moved away from calling it that.
> It's just TNT to me.

## Installation

Add TNT to your project:

```sh
yarn add --dev https://github.com/thombruce/tnt
```

Add TNT to buildModules in `nuxt.config.js`:

```js
buildModules: [
  '@thombruce/tnt'
]
```

## Overwrite Default Styles

Create a CSS file at `assets/css/tnt.css` and import `@thombruce/tnt`:

```css
@import "@thombruce/tnt";

/* Declare your styles or local imports here. */
```

TNT comes with Tailwind CSS and PostCSS; you can count on both of them working for this file and its imports. And of course, you can just write plain old CSS.

You can also configure `tailwind.config.js` following their docs. Apart from the `tnt.css` file, it's just like any other Tailwind installation.