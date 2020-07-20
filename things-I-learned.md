## Things I learned 🙏🚀

### Ways to prevent the flash of invisible text issue **(FOIT)**.

1- Use `font-display: swap;` on `@font-face{}`.

2- **preload** the fonts, by adding ```<link rel="preload">

3- Add the `&display=swap` parameter to the end of your Google Fonts URL:

```HTML
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
```
