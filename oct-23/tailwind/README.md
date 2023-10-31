# Styling with Tailwind

## Getting started
1. run `npm install`
2. run `npm run build-css`, and open `/src/index.html` in your browser (f.ex. right click and copy file path and paste in browser address bar) to start a [local dev environment](#dev-environment). 

Alternatively, use [the Tailwind Playground](https://play.tailwindcss.com/).

## Assignments

Make changes in `src/` directory when doing the assignements

1. Create a "tribute site" to someone or something that you admire (person, pet, car, sports figure etc.) using Tailwind. You can write content if you want, or use "Lorem ipsum" generators. Use [Tailwind Core Concepts](https://tailwindcss.com/docs/utility-first) and docs to guide you.

## Dev environment

Environment is preset using the following steps from [Getting startet with Tailwind](https://tailwindcss.com/docs/installation):

1. run `npm install` to install Tailwind CLI 
2. `npx tailwind init` to create a Tailwind configuration file
3. Tailwind config file `content` property points to `src/index.html`
4. `src/input.css` adds Tailwind directivees to "load" predefined class rulesets
5. Tailwind CLI is added as `npm run build-css` script, which creates `/src/output.css`, and is a "translated" version of Tailwind that `src/index.html` can work with. Some example classes are added to a heading on the HTML-page. This command will watch for changes in the `src/input.css`-file and rebuild.

## Resources
- [Tailwind Docs](https://tailwindcss.com/docs/installation)