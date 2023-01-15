# i-macle.com

iMACLE static website using Ruby Bundler and the Jekyll framework.

## Prerequisites

Before you can begin using Ruby Bundler and Jekyll, you will need to install a few prerequisites.

* **Ruby:** This project requires Ruby version 2.4 or higher.
* **Bundler:** Bundler is a Ruby gem used to manage Ruby applications.
* **Jekyll:** The Jekyll static website framework.

## Installation

Once the prerequisites have been installed, you can begin the installation process.

1. Clone the repository to your local machine. 
    ```
    git clone https://github.com/kirualex/i-macle.com.git
    ```

2. Install the required gems using Bundler.
    ```
    bundle install
    ```

3. Run Jekyll to build the static website. 
    ```
    bundle exec jekyll serve
    ```

## Usage

Once the static website is built, you can begin modifying the files to customize the website.
Generated files are automatically put in the `docs` directory.

* **_config.yml:** This file contains the configuration information for the website.
* **index.html:** This file is the main page of the website.
* **_layouts:** This directory contains the HTML layout templates for the website.
* **_posts:** This directory contains the blog posts for the website.
* **_includes:** This directory contains reusable HTML snippets for the website.

### Localization

For localization we use [jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin).
All localized content is located in the `_i18n` folder.

## Deployment

GitHub Pages will automatically build and deploy the site when changes are pushed to the `main` branch.
