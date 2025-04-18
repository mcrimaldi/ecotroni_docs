---
title: Home
layout: home
nav_order: 1
---

<button class="btn js-toggle-dark-mode">Passa a modalità scura</button>

<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
    toggleDarkMode.textContent = 'Passa a modalità scura';
  } else {
    jtd.setTheme('dark');
    toggleDarkMode.textContent = 'Ritorna a modalità chiara';
  }
});
</script>

# Regolamento d'utilizzo per la strumentazione della piattaforma ECOTRONI/MICROCOSMO del Dipartimento di Eccellenza di Agraria

## Università degli Studi di Napoli Federico II

---

Scopo del presente regolamento è di permettere un efficiente, sicuro e razionale utilizzo della strumentazione della piattaforma ECOTRONI/MICROCOSMO da parte del personale del Dipartimento di Agraria e di quello degli utilizzatori accessori quali altri Dipartimenti dello stesso Ateneo e utilizzatori esterni (terzi).

L’accesso agli strumenti è regolamentato secondo i regolamenti e la documentazione presente in questo sito, raggiungibile tramite barra di navigazione a lato:

<!-- <details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details> -->

<!-- This is a _bare-minimum_ template to create a Jekyll site that uses the [Just the Docs] theme. You can easily set the created site to be published on [GitHub Pages] – the [README] file explains how to do that, along with other details.

If [Jekyll] is installed on your computer, you can also build and preview the created site _locally_. This lets you test changes before committing them, and avoids waiting for GitHub Pages.[^1] And you will be able to deploy your local build to a different platform than GitHub Pages.

More specifically, the created site:

- uses a gem-based approach, i.e. uses a `Gemfile` and loads the `just-the-docs` gem
- uses the [GitHub Pages / Actions workflow] to build and publish the site on GitHub Pages

Other than that, you're free to customize sites that you create with this template, however you like. You can easily change the versions of `just-the-docs` and Jekyll it uses, as well as adding further plugins.

[Browse our documentation][Just the Docs] to learn more about how to use this theme.

To get started with creating a site, simply:

1. click "[use this template]" to create a GitHub repository
2. go to Settings > Pages > Build and deployment > Source, and select GitHub Actions

If you want to maintain your docs in the `docs` directory of an existing project repo, see [Hosting your docs from an existing project repo](https://github.com/just-the-docs/just-the-docs-template/blob/main/README.md#hosting-your-docs-from-an-existing-project-repo) in the template README.

---

[^1]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[GitHub Pages]: https://docs.github.com/en/pages
[README]: https://github.com/just-the-docs/just-the-docs-template/blob/main/README.md
[Jekyll]: https://jekyllrb.com
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
[use this template]: https://github.com/just-the-docs/just-the-docs-template/generate -->
