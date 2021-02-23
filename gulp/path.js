module.exports = {
  fonts: {
    src: "src/fonts/*.{woff,woff2,eot,ttf,svg}",
    build: "build/fonts",
  },
  js: {
    src: "src/js/main.js",
    build: "build/js",
    watch: "src/js/**/*.js",
  },
  svg: {
    src: "src/images/svg/*.svg",
    build: "build/images/",
    watch: "src/images/svg/**/*.svg",
  },
  styles: {
    src: "src/styles/style.scss",
    build: "build/css",
    watch: "src/styles/**/*.scss",
  },
  images: {
    src: "src/images/*.{gif,png,jpg,svg,webp}",
    build: "build/images",
  },
  pug: {
    watch: "src/templates/**/*.pug",
    src: "src/templates/*.pug",
    build: "build",
  },
};
