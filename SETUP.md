# Set up and publish this Eleventy blog

Verified on 10 September 2026 with Eleventy 3.1.6 and Node.js 22 in GitHub Actions.

## What has been demonstrated

The [successful run, attempt 2](https://github.com/Esperimental/tmp-blog-eleventy/actions/runs/34430927854/attempts/2) installed locked dependencies, configured Pages, built the site, uploaded the artifact and deployed it successfully.

Site address: https://esperimental.github.io/tmp-blog-eleventy/

GitHub reports deployment success. The assistant also independently fetched the live homepage and confirmed the generated HTML and repository-prefixed links. Browser-based visual verification remains outstanding.

## 1. Create the repository and grant access

1. Create a public repository in the intended account or organisation.
2. Include it in the GitHub connection's repository access.
3. Ask the assistant to list repositories to confirm visibility.

In this session the connector could create and edit files, commit changes, inspect Actions and retrieve logs. It did not expose repository creation or Pages settings changes, so those were human setup steps. Account-level permissions alone do not establish which connector operations are available.

## 2. Add the project

Copy the source from this repository, including hidden files, but exclude node_modules and _site.

| Path | Purpose |
| --- | --- |
| package.json, package-lock.json | Generator version, scripts and locked dependency tree |
| eleventy.config.js | Input/output folders, assets, date filter and URL prefix |
| src/posts/*.md | Posts with title, date and description |
| src/posts/posts.json | Shared post layout, collection tag and default author |
| src/_data/site.json | Site title, description and AI disclosure |
| src/_data/authors.json | Author display information |
| src/_includes/ | Shared HTML layouts |
| src/index.njk | Homepage and post list |
| src/assets/style.css | Presentation |
| .github/workflows/pages.yml | Build and deployment |
| .gitignore | Excludes dependencies and generated output |

Commit source and the dependency lockfile. GitHub Actions generates _site; do not commit that build directory.

## 3. Enable Pages — required once per repository

Open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

This selection saves automatically. Do not use the branch selector from the alternative “Deploy from a branch” mode. No starter workflow needs to be generated in the UI: this repository already contains one.

## 4. Build and publish

A push to main starts the workflow automatically. If an earlier run failed before Pages was enabled, rerun its failed jobs from Actions. You can also open “Build and publish Eleventy” and use Run workflow on main.

The workflow:

1. Checks out the repository and sets up Node.js 22.
2. Runs npm ci using package-lock.json.
3. Reads Pages configuration.
4. Passes the Pages base path to Eleventy as SITE_PATH_PREFIX.
5. Runs npm run build and uploads _site.
6. Deploys the artifact using pages: write and id-token: write permissions on the deployment job.

Pull requests build and upload an artifact, but skip Pages configuration and public deployment.

## 5. Verify the result

Check both the build and deploy jobs, not just whether a workflow was triggered.

Open the URL reported by the deployment job. Check the homepage, both posts, stylesheet, and links back home. Check on phone and desktop widths too.

A project site uses a path such as /tmp-blog-eleventy/. Layouts apply Eleventy's url filter so internal navigation and assets include that prefix. The workflow obtains the prefix from Pages rather than hard-coding the repository name.

When moving to another repository, update the repository links in the layout and sample content, plus documentation URLs. The deployment prefix is automatic; those editorial links are not.

## 6. Edit and republish

Add or edit Markdown files in src/posts and commit to main. The index is generated from the posts collection, newest first. For another author, add an entry to authors.json and use its key in a post's author front matter.

Change shared layouts, site metadata or CSS in their respective files. The next main-branch push rebuilds and republishes the site.

## Optional local checks

With Node.js 22 or newer:

```sh
npm ci
npm run build
npm start
```

For a project-path build:

```sh
SITE_PATH_PREFIX=/tmp-blog-eleventy/ npm run build
```

This checks generated output; a simple root-only HTTP server will not automatically mount that output under the repository prefix.

## Failure we encountered

**Configure Pages: “Get Pages site failed / Not Found.”**

The first attempts stopped here. Dependency installation had passed, but the build and deployment were skipped. Selecting GitHub Actions as the Pages source and rerunning resolved it.

This was repository setup friction, not evidence of an Eleventy defect.

## Further comparison work

The initial build and publishing path now work. Separate editing trials and visual verification remain before drawing a final Hugo-versus-Eleventy conclusion.

References: [Eleventy documentation](https://www.11ty.dev/docs/) · [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
