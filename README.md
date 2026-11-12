# Vidya Sudevan Academic Portfolio

The repository contains a buildless GitHub Pages site. Open `index.html` to preview it locally. The pages, publication filters, and bundled CV work without a build command.

## Publish with GitHub Desktop

1. Extract the ZIP. If you already have a `<username>.github.io` repository, clone it in GitHub Desktop and copy the extracted site's **contents** to that repository root. Review any replacements before committing.
2. For a new site, use **File → New repository** in GitHub Desktop and name it `<username>.github.io`, replacing `<username>` with your account username. The linked research code uses `vidya-rejul`; use `vidya-rejul.github.io` if that is the account you want to host from.
3. Copy the extracted files into the new local repository. Put `index.html`, `.nojekyll`, and `assets/` at its root. Include the hidden `.nojekyll` file.
4. In GitHub Desktop, commit the files to `main`. For a new repository, select **Publish repository**. Use public visibility if publishing with GitHub Free. If the remote already exists, select **Push origin**.
5. On GitHub.com, open the repository's **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. GitHub Pages will show the site URL once deployment completes.
6. To update the site, edit files locally, open `index.html` to review them, then commit and push in GitHub Desktop.

[GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart) · [GitHub Desktop guide](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-an-existing-project-to-github-using-github-desktop)

## Included assets

- `assets/vidya-sudevan.webp` is the supplied portrait optimized for the web. The original PNG is unnecessary for deployment.
- `assets/dehazing-*.webp` contains Figures 3, 5, and 6 cropped from Sudevan et al., *Spiking transformer with learnable threshold mechanism for underwater image dehazing to aid vision-based navigation*, Neuromorphic Computing and Engineering 6 (2026), 014010, [DOI](https://doi.org/10.1088/2634-4386/ae41e1), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution appears on the relevant pages.
- `assets/vidya-sudevan-academic-cv.pdf` is a condensed public-facing CV based on the supplied November 2026 CV. Replace it with your preferred public PDF using the same filename if needed.
- `assets/neurovio-architecture.webp` and `assets/uie-snn-architecture.webp` are Figure 1 from the supplied [NeuroVIO article](https://doi.org/10.1109/JOE.2026.3708049) and Figure 2 from the supplied [UIE-SNN preprint](https://arxiv.org/abs/2503.20485v1). Figure credits appear on their Research detail pages. Check the applicable reuse terms before publishing the crops publicly. The supplied NeuroVIO PDF includes an IEEE redistribution notice.
- Full paper PDFs, the working CV DOCX, and seminar source files are unnecessary. The site uses DOI or arXiv links where supplied. For any additional figures, use images you can publicly redistribute and include their source credits.

## Maintain the content

- Add papers in `publications.html` by duplicating a publication article and setting its `data-type` to `journal`, `conference`, `preprint`, or `review`. Add its title, author list, venue, status, authorship role, and DOI or other links. Include a short source-based paragraph with class `publication-summary` for records outside Under Review. Update the initial count in the page so it remains correct before any filtering.
- Add research cards to `research.html` and create a detail page by copying a `research-*.html` file. Add figures under `assets/` and retain their attribution. Keep the project and paper status current.
- If updating from version 1, remove the old `projects.html` and five `project-*.html` files from your GitHub repository. The Research pages now cover that content.
- Update profiles in `contact.html`. The existing GitHub link comes from research repositories cited in the supplied articles, and the institutional email comes from the published snnTrans-DHZ paper.
- The Demonstrations page contains article figures for this phase. For video later, set the YouTube upload visibility to **Unlisted**, allow embedding, then use **Share → Embed**. Give the iframe a descriptive title and use its YouTube embed URL, for example `https://www.youtube-nocookie.com/embed/VIDEO_ID`. The example has no live video ID.

## Publication items to reconcile

The NeuroVIO title and author order follow the supplied IEEE article. UIE-SNN's arXiv preprint is listed as its own record. Confirm the author order for the separate Robotics and Autonomous Systems submission, the target year and status of the two ICRA submissions, and the book chapter's publication status before adding those records. Confirm final MetroSea status and pagination when available. The LinkedIn URL and selected design screenshot were unavailable when this version was prepared.
