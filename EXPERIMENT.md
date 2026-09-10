# Eleventy experiment — 2026-09-10

## Scope
Temporary blog only. Homepage, two Markdown entries, shared Nunjucks layouts, JSON author metadata and a stylesheet. No external theme or client-side framework. The second post is a sample fixture.

## Observations
- Eleventy 3.1.6; one direct development dependency.
- Initial local npm installation added 129 packages in 57 seconds. This includes this workspace's network conditions; do not treat it as a generator benchmark.
- Local Eleventy reported 0.09 seconds to write three HTML files and copy one stylesheet.
- Repository-prefix build reported 0.08 seconds. All ten internal link/asset references across the three pages resolved under /tmp-blog-eleventy/.
- Posts, author metadata and layouts built successfully. Separate before/after editing trials remain for the comparison.
- GitHub file and workflow writes succeeded through the connector.
- First Actions run installed the same 129 packages in five seconds, then failed at Configure Pages because Pages was not enabled. The remote build and public deployment therefore remain unverified.
- Dependency lockfile added after the first installation; subsequent runs use npm ci.
- Initial browser verification was blocked by a missing Chromium binary; visual QA is not yet confirmed.

## Human setup still needed
Select Settings → Pages → Source → GitHub Actions. Rerun the latest workflow afterwards.

## Comparison discipline
Use the same content and visual layout for Hugo. Judge editability, dependency burden and publishing reliability; timings here are observations from a tiny site, not statistically meaningful performance claims.
