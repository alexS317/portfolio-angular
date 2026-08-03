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

I built myself an online portfolio to showcase projects I created for university courses or in my free time, in order to show potential employers what I am capable of doing and also to track my own progress. Additionally, I used the project itself as an opportunity to practice my Angular skills.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Angular][Angular.dev]][Angular-url]
- [![Tailwind CSS][TailwindCSS.com]][TailwindCSS-url]

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

The text content data is loaded from a json file (which is loaded through the  ngx-translate service), and can be easily modified there without touching any of the component files themselves. For example, new work experiences, skills or even entire projects can be added in a quick and simple way. Projects can have a variety of properties, such as tools used, year, links to the live view and/or GitHub repo, multiple images or videos, etc.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add home page
  - [x] Add work experience/education card items
  - [x] Add skill and software lists
  - [x] Add project preview cards
- [x] Add project page
  - [x] Add image carousel with custom scrolling

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
