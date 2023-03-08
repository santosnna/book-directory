<p>
  <a href="./LICENSE" target="_blank">
    <img alt="License: Apache license" src="https://img.shields.io/badge/License-Apache license-yellow.svg" title="Apache Licesense"/>
  </a>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/santosnna/book-directory" title="GitHub top language">
</p>

<h1 align="center">
  Book Directory
</h1>

<p>
 A book directory for managing books. This project was developed mainly for studying purposes, with the goal of implementing multiple Web Development concepts. It was built on Node.js and Express.js and implementing <strong>RESTful routes</strong>. The app renders <strong>dinamically generated templates</strong> pages using EJS. It stores data with MongoDB. <strong>Styling, responsivity and Client-side validation</strong> made with Bootstrap. <strong>Server-side validation</strong> with joi.

 It can be used as a directory or integrated in larger programs (e.g: sales or a Academic Paper Reference-maker).
</p>

<h3>Stack summary:</h3>
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" title="Node.js"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" title="Express.js"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" title="MongoDB"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" title=""Bootstrap/> </a>

## Install
<p> Make sure <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a> is installed and includes <a href="https://nodejs.org/en/download/" target="_blank">npm</a>. Also make sure <a href="https://www.mongodb.com/try/download/community" target="_blank">MongoDB</a> is installed and running. You can do so by typing the commands on your terminal:</p>

```sh
node -v
mongosh
```

<p>Install packages and dependencies by navigating to the project's root directory, where you will find the <a href="./package.json" target="_blank">package.json</a> file and run:</p>

```node
npm install
```

<p>You can build your directory from the ground up or seed the database with the Mock data included. Run the <a href="./seed/seed.js" target="_blank">seed.js</a> file to populate your Mongo Collection:</p>

```node
node '.\seed\seed.js'
```

## Usage
<p>You can start the server by running the <a href="./app.js" target="_blank">app.js</a> file or by executing the 'start' script declared on the <a href="./package.json" target="_blank">package.json</a> file.</p>

```sh
node '.\app.js'
or
npm start
```

<p>Now you can access one of the following routes on your browser to get started:</p>

<ul>
  <li>
    Main route: 
    <a href="localhost:3000/" target="_blank">localhost:3000/</a>
  </li>
  <li>
    Books route: 
    <a href="localhost:3000/books/" target="_blank">localhost:3000/books</a>
  </li>
  <li>
    New Book route: 
    <a href="localhost:3000/books/new" target="_blank">localhost:3000/books/new</a>
  </li>
</ul>

---

## Author

👤 **Nathan Santos**

- Github: [@santosnna](https://github.com/santosnna)
- LinkedIn: [Nathan Santos](https://linkedin.com/in/nathan-santos-a512a053)

## Contributions
<p>This project was made possible with the help of:</p>

> **Colt Steel Web Development Bootcamp Course** <br/>
> Learn more: https://www.udemy.com/course/the-web-developer-bootcamp/

> **Node.JS** <br/>
> Learn more: https://nodejs.org/en/

> **Express.JS** <br/>
> Learn more: https://expressjs.com/
 
> **MongoDB** <br/>
> Learn more: https://www.mongodb.com/

> **Bootstrap** <br/>
> Learn more: https://getbootstrap.com/

> **joi** <br/>
> Learn more: https://www.npmjs.com/package/joi

> _This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Nathan Santos](https://github.com/santosnna).<br />
This project is [Apache license](./LICENSE) licensed.




<!--

- Main route: [localhost:3000/](localhost:3000/)
- Books route: [localhost:3000/books/](localhost:3000/books/)
- New Book route: [localhost:3000/books/new](localhost:3000/books/new)

## Run tests

```sh
npm run test
```
-->
