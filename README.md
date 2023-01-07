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

* **_config.yml:** This file contains the configuration information for the website.
* **index.html:** This file is the main page of the website.
* **_layouts:** This directory contains the HTML layout templates for the website.
* **_posts:** This directory contains the blog posts for the website.
* **_includes:** This directory contains reusable HTML snippets for the website.

## Deployment

Generated files are automatically put in the `docs` directory.
Once you are done customizing the website,you just have to push it to the `main` branch for it to be deployed through Github pages.
