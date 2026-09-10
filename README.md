# Eleventy blog experiment

Temporary comparison prototype: Markdown posts, Nunjucks layouts, JSON metadata and plain CSS. All source and publishing configuration live here.

## Run
Requires Node.js 22 or newer.

```sh
npm install
npm run build
npm start
```

For a project-path build:
```sh
SITE_PATH_PREFIX=/tmp-blog-eleventy/ npm run build
```

Edit posts in `src/posts`, site settings and authors in `src/_data`, layouts in `src/_includes`, and styling in `src/assets/style.css`.

Pages uses GitHub Actions. Select **Settings → Pages → Source → GitHub Actions**. The workflow derives the deployment path from GitHub Pages, so changing repository names does not require editing templates.

The second entry is a formatting fixture. Branding and persona are placeholders.
