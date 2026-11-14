# SCSS Setup

This project uses SCSS (Sass) for stylesheets with organized color variables.

## Color Palette

All colors are defined as variables in `style.scss`:

- **$dark-olive**: #625B30 (30% - Primary accent)
- **$berry**: #AD2D5B (20% - Main headings/buttons)
- **$deep-rose**: #340D1B (20% - Dark text/backgrounds)
- **$pale-yellow**: #ECE9D8 (15% - Light backgrounds)
- **$olive**: #BAAF71 (15% - Subtle accents)

## Building

To compile SCSS to CSS:

```bash
npm run sass
```

To watch for changes and auto-compile:

```bash
npm run sass:watch
```

## File Structure

- `style.scss` - Source SCSS file with variables and styles
- `style.css` - Compiled CSS (auto-generated)
- `index.html` - HTML file (links to style.css)

## Modifying Colors

All colors are defined at the top of `style.scss`. Simply change the variable values and recompile:

```scss
$dark-olive: #625B30;
$berry: #AD2D5B;
$deep-rose: #340D1B;
$pale-yellow: #ECE9D8;
$olive: #BAAF71;
```

Then run `npm run sass` to generate the new compiled CSS.
