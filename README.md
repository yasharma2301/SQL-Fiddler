# SQL Fiddler
### - An SQL Code editor built for Data Teams
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

Hosted project: https://sql-fiddler.netlify.app/ 

SQL Fiddler is an online SQL editor view where your users can query easily on a table using SQL, and see the results.

## Features
- Execute SQL queries directly from browser.
- Get IntelliSense and other code-aware editing features with editor.
- Export the results fetched in a csv file.
- History and saved SQL queries' section for faster work environment.

## Data used
The has been taken from graphql-compose [example dataset](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv) and is strored in json format.

## Load time 
##### (**0.5s - 0.8s**)
Load time and other optimisation calucluations are done through Google Lighthouse. On laptop's browser the load time ranges between 0.5s - 0.8s. This can be verified from the below screenshots from lighthouse.

## Steps taken to improve load time & general performance
1. Stating from react documentation:
    > Most React apps will have their files “bundled” using tools like Webpack, Rollup or Browserify. 
    > Bundling is the process of following imported files and merging them into a single file: 
    > a “bundle”. This bundle can then be included on a webpage to load an entire app at once
    > which would increase the load time.

    In order to fix this, the concept of Code-Splitting and lazy-loading is used. This makes sure of the fact that only required chunks are downloaded on load.
2. Minimal dependency libraries are used.
3. Divide the code in components and reuse them weherever necessary.
4. Use react fragments instead of adding an extra node.
5. **(.Webp)** etensions are used for static images. .WebP extension offers 26% smaller file sizes than PNG, while still providing transparency and the same quality. 
6. Create custom hook in combination with Context API to imporve code readability and reusability.
7. Use proper key values for html nodes so react can catch exact mutations and no inefficiency is created during comparison of node trees on traversal.


## Screenshots
![UI-main](https://user-images.githubusercontent.com/58696571/166260589-180eaec0-766e-4a03-ac8a-7446b9c92661.png)
![UI-editor](https://user-images.githubusercontent.com/58696571/166260499-37530365-158d-452b-b8cb-884bca9d7817.png)

![main-page](https://user-images.githubusercontent.com/58696571/166260651-b9b8d11c-031e-48dc-bf8d-a011af4e49b7.png)
![editor-page](https://user-images.githubusercontent.com/58696571/166260622-0d1c792a-9925-46c1-8faa-ed79ef9d344b.png)

## Installation

Note that before using the command 'npm install' remove the 'package-lock.json' file.
```sh
git clone https://github.com/yasharma2301/SQL-Fiddler
npm install
npm start
```
Open http://localhost:3000 to view it in the browser.