# Abrany

Static Astro website for Abrany.

## Local development

Use Node.js 24 and pnpm 9.10.0, as pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Cloudflare Pages

Connect this repository to a Cloudflare **Pages** project with these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | Repository root |
| Build command | `pnpm run build` |
| Build output directory | `dist` |
| `NODE_VERSION` | `24` |
| `PNPM_VERSION` | `9.10.0` |

The site defaults to `https://www.abrany.com`. Set the build environment variable
`SITE_URL` if deploying to a different canonical domain.

The updated lockfile supports Cloudflare's normal frozen dependency installation;
no custom install command or `SKIP_DEPENDENCY_INSTALL` variable is needed.

To build and preview locally:

```sh
pnpm run build
pnpm run preview
```

Alternatively, upload the contents of `dist` to a Pages Direct Upload project.
This is a static deployment and does not require the Astro Cloudflare adapter.

The Inter and Libre Baskerville files referenced by the exported styles are bundled
in `public/_pagesmith/fonts/`, with their licenses, so typography works outside
the original site builder. They come from the corresponding Fontsource 5.3.0 packages.

## Forms

The contact and newsletter forms still require the original
`/psapi-internal-v1/altcha/challenge` and `/psapi-internal-v1/forms/submit` APIs.
Those APIs are not part of this repository. Connect a form backend before relying
on submissions from a standalone deployment.
