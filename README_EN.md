<p align="right">
  🌐 <a href="README.md">Magyar verzió</a>
</p>

# Natural Essential Oils Webshop Layout

**Language:** EN English | [HU Magyar](README.md)

![Homepage screenshot](public/images/webshop-layout.png)
*Responsive homepage layout*
![Homepage screenshot mobile view](public/images/webshop-layout-mobile-view.png)
*Responsive homepage layout Mobile View*
![Login screenshot](public/images/webshop-layout-login.png)
*Login layout*

This is a simple webshop layout project using HTML, CSS, JavaScript, and Express.js. The project demonstrates a responsive user interface, mobile menu, search, login, registration, and cart functionality.

## Features

- Responsive header and navigation (desktop + mobile menu)
- Search input field
- Login / Registration pages
- Cart icon animation (`addCart` buttons)
- Video and products displayed in a grid layout
- Dynamic CSS loaded via EJS templates
- Express.js backend for route handling

## Folder Structure

webshop-layout/
├─ public/
│  ├─ styles/
│  │  ├─ styles.css
│  │  ├─ login.css
│  ├─ images/
│  └─ script/
├─ views/
│  ├─ partials/
│  │  ├─ header.ejs
│  │  └─ footer.ejs
│  ├─ index.ejs
│  ├─ login.ejs
│  └─ register.ejs
├─ index.js
├─ package.json
└─ README.md

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Media Queries)
- JavaScript (ES6)
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/)
- Node.js + Express.js
- EJS template engine

## Installation

1. Clone the repository:

```bash
git clone https://github.com/felhasznalonev/webshop-layout.git
cd webshop-layout
```

2. Install dependencies:

```bash
npm install
```

3. Start the server with nodemon or node:

```bash
nodemon index.js
# or
node index.js
```

4. Open your browser at: http://localhost:3000

## Usage

- GET / – Homepage
- GET /login – Login page
- GET /register – Registration page
- The mobile menu appears by clicking the hamburger icon on small screens.

## Created by

Name: Zita Lukács

