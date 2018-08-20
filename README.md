# React + API Gist
We're transporting you back to the early 2000's – we're building a quick blog. We're asking you to build an application with two pages, one to list blog posts and a short excerpt, one to display a full blog post. The backend for this blog are Github Gists. The idea is that you can configure a username to look up on Github and the index page will display excerpts of the Gists. The post detail page will then display the full content of the gist. Possible enhancements are a searchable list of posts, only show certain Gists as blog posts, formatted Markdown as HTML etc.

# Requeriments
Requirements
* As a reader, I want to be able to see a list of blog posts that a writer has posted on Github in the form of Gists, so that I can make a decision on which post to read.
As a reader, I want to be able to select a post on the index page and see the post details, so that I can read the post.
* As a reader, I want to be able to navigate from a post to the next post so that I can read the next post.
* As a reader, I want to be able to navigate to the index page from a post so that I can select a different post to read.
* As a writer, I want to be able to post a Gist to Github and have that post show up on my blog so that a reader can read the new post.
As a writer, I want to able to make updates to a post by updating the Gist so that I can correct typos and make content updates.

## Tools used in this project
* [React](https://facebook.github.io/react/)
* [Redux](https://redux.js.org/)
* [ESLint](https://github.com/eslint/eslint)
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as plugin for helping us to follow the airbnb code style guide.
* [Prettier](https://github.com/prettier/prettier)
* [Styled-components](https://github.com/styled-components/styled-components)
* [Rselect](https://github.com/reduxjs/reselect)

# Getting started
1. Clone Project
```bash
 $ git clone https://github.com/mafesernaarboleda/react-gists-blog.git
 $ cd react-gists-blog
```    
2. Go to project folder and install dependencies:
 ```bash
 $ yarn install  / npm install
 ```
## Available Scripts

In the project directory, you can run:

### `yarn start / npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test / npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn run build / npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Author

* **Maria Fernanda Serna Arboleda** - *FullStack JavaScript Developer* - [Github](https://github.com/mafesernaarboleda)

See also the list of [contributors](https://github.com/mafesernaarboleda/react-gists-blog.git/contributors) who participated in this project.

## License

This project is licensed under MIT - see the [LICENSE](LICENSE) file for details
