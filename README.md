# ghettovoice.github.io

Personal website of Vladimir Vershinin (ghettovoice), available at <https://ghettovoice.github.io>

## Tech Stack

- **Hexo** — static site generator (version 8.1.2)
- **Theme**: shik (custom theme in `themes/shik/`)
- **Styles**: Bulma CSS framework + SCSS/Stylus
- **Rendering**: EJS, Marked

## Installation

```bash
npm install
```

## Commands

| Command          | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `npm start`      | Start local development server (`hexo server --debug`) |
| `npm run build`  | Generate static files to `public/`                     |
| `npm run deploy` | Build and deploy to GitHub Pages                       |
| `npm run clean`  | Clean generated files                                  |

## Project Structure

```text
├── source/           # Source content (pages, posts)
├── themes/shik/      # Custom theme
├── scaffolds/        # Templates for new posts/pages
├── public/           # Generated site (ignored in git)
└── _config.yml       # Hexo configuration
```

## Deployment

Deployment is configured in `_config.yml`:

- **Type**: git
- **Repository**: `git@github.com:ghettovoice/ghettovoice.github.io.git`
- **Branch**: `dist` (generated site is deployed to this branch)

```bash
npm run deploy
```

After deployment, GitHub Pages automatically publishes the contents of the `dist` branch.

## License

This project is licensed under the [MIT License](LICENSE).
