<a id="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h1 align="center">Portfolio Website</h1>

  <p align="center">
    My portfolio website for showcasing projects.
    <br />
    <a href="https://alexandrafontner.at/"><strong>View it here</strong></a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Portfolio Website][product-screenshot-1]

I built myself an online portfolio to showcase projects I created for university courses or in my free time, in order to show potential employers what I am capable of doing and also to track my own progress. Additionally, I used the project itself as an opportunity to practice my Angular skills, and even set up a small CMS.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Angular][Angular.dev]][Angular-url]
- [![Tailwind CSS][TailwindCSS.com]][TailwindCSS-url]
- [![Decap CMS][decapcms.org]][decapcms-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Here you find the instructions on how to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- [node.js](https://nodejs.org/en/download) (v20 or later, LTS is recommended)

### Installation

1. Clone the repo (or download the project as a zip file)
   ```sh
   git clone https://github.com/alexS317/portfolio-angular.git
   cd portfolio-angular
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run start
   ```
4. Open your browser at [http://localhost:4200/](http://localhost:4200/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

The projects shown on the site are managed through Decap CMS, which makes it possible to handle them in a quick and user-friendly way via the CMS interface in the browser. Project properties and media files can therefore be added and edited without having to touch any of the code. Other website contents that may not be edited as frequently are stored directly in a JSON file, which is loaded through ngx-translate and can be adapted easily to include multiple language variants later on.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add home page
  - [x] Add work experience/education card items
  - [x] Add skill and software lists
  - [x] Add project preview cards
- [x] Add project page
  - [x] Add image carousel with custom scrolling
- [x] Integrate Decap CMS for easier project content management
- [x] Switch to Static Site Generation
- [ ] Add German translation (optional)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- Based on [Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot-1]: readme-screenshots/portfolio-angular-1.webp

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->

[Angular.dev]: https://img.shields.io/badge/Angular-0F0F11?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.dev/
[TailwindCSS.com]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[decapcms.org]: https://img.shields.io/badge/Decap%20CMS-FF0082?style=for-the-badge&logo=decapcms&logoColor=white
[decapcms-url]: https://decapcms.org/
