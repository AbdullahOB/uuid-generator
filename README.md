<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  
  <h3 align="center">UUID Generator</h3>

  <p align="center">
    A Universally Unique Identifier generator with Nodejs
    <br />
    <a href="https://github.com/AbdullahOB/uuid-generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/AbdullahOB/uuid-generator/issues">Request Feature</a>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### What is a UUID?

A UUID, or Universally Unique Identifier, is a standardized 128-bit identifier that is guaranteed to be unique across all devices and time, making it suitable for various purposes in software development. UUIDs are often used to uniquely identify resources, records, or entities in distributed systems, databases, and other applications.

### About UUID Generator

UUID Generator is a Node.js module designed to simplify the generation of UUIDs in JavaScript projects. It provides an easy-to-use API for creating UUIDs, making it a valuable tool for developers working on web applications, backend services, or command-line tools.

UUID Generator supports different UUID versions, such as UUIDv4 and UUIDv5, and offers customizable options for UUID generation, ensuring flexibility for various use cases. It aims to provide a reliable and efficient solution for generating UUIDs, simplifying the development process for JavaScript projects.

For more information on how to use UUID Generator and integrate UUID generation into your project, please refer to the sections below.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![typescript][typescript]][typescript-url]
- [![node.js][node.js]][node.js-url]
- [![js][js]][js-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Install the package with npm

   ```sh
   npm install @abdullahob12/uuid-generator
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To use this package all you need to do is import the version of uuid that you want to use into your project as the following

```
import v1 from '@abdullahob12/uuid-generator'

const myUniqueId = v1()

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add Contributing
- [x] Add back to top links
- [x] Add v1 algorithm to uuid generator
  - [ ] Add parameters for v1
- [ ] Add v2 algorithm to uuid generator
- [ ] Add v3 algorithm to uuid generator
- [x] Add v4 algorithm to uuid generator
- [x] Add v5 algorithm to uuid generator

See the [open issues](https://github.com/AbdullahOB/uuid-generator/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

To be able to contribute to this project please read the following
[guidence](https://github.com/AbdullahOB/uuid-generator/blob/main/CONTRIBUTING.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/AbdullahOB/uuid-generator](https://github.com/AbdullahOB/uuid-generator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

I used these tools to write the documentation:

- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Header Links -->

[contributors-shield]: https://img.shields.io/github/contributors/abdullahob/uuid-generator?style=for-the-badge
[contributors-url]: https://github.com/AbdullahOB/uuid-generator/graphs/contributors

<!--  -->

[forks-shield]: https://img.shields.io/github/forks/abdullahob/uuid-generator?style=for-the-badge
[forks-url]: https://github.com/AbdullahOB/uuid-generator/network/members

<!--  -->

[stars-shield]: https://img.shields.io/github/stars/abdullahob/uuid-generator?style=for-the-badge
[stars-url]: https://github.com/AbdullahOB/uuid-generator/stargazers

<!--  -->

[issues-shield]: https://img.shields.io/github/issues/abdullahob/uuid-generator?style=for-the-badge
[issues-url]: https://github.com/AbdullahOB/uuid-generator/issues

<!--  -->

[license-shield]: https://img.shields.io/github/license/abdullahob/uuid-generator?style=for-the-badge
[license-url]: https://github.com/AbdullahOB/uuid-generator/blob/main/LICENSE

<!--  -->

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/abdullahob/

<!--  -->

[product-screenshot]: images/screenshot.png

<!-- Technologies Used Badges -->

[typescript]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
[typescript-url]: https://www.typescriptlang.org/

<!--  -->

[node.js]: https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=FFF&style=flat-square
[node.js-url]: https://nodejs.org

<!--  -->

[js]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square
[js-url]: https://www.javascript.com
