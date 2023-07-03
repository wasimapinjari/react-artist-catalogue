# Learn how do I build this project?

Below is the process I went through to create this project. I hope you get value out of it. Enjoy!

# Idea

First I come with an idea of what I wanted to create. I knew I want to render a list in React. But what do I render? I don't have any data. I was scratching my head in confusion trying to come up with something.

# ChatGPT

I went out of my way to ask chatGPT for dummy data. It gave me a dummy data set but I wasn't satisfied. It was too random for anyone to care including myself. I roll my eyes with a deep sigh and after staring at my laptop for sometime.

I ask him to give me celebrity artists data. It gave me 3 different celebrity profiles and I complained and ask to give me atleast 10. Which look quite promising because I didn't know that information about those celebrity myself and I was curious to know that. So I went with this data set.

# Data Conversion

I started typing out that data in JavaScript array containing information of each celebrity profile in an individual object then I realize I am too dumb to know that ChatGPT can do that work for me.

So I ask ChatGPT to convert that data into JavaScript array. And voila! I have my data.

# Image Search

Next step was to search celebrity images. My Google search query look like this: Rihanna portrait white background.

# Cropping Images

I downloaded all celebrity images that I like the best. The only thing I hate was I thought this project was easier and less time-consuming than it turned out. It felt as if I was hit with reality like a brick.

The images I downloaded was of different dimensions (height and width) so I crop each one of them in a perfect square and making sure the celebrity face is in the center of the square.

Cropping images fix half of the problem. By that I mean it fixed the problem of aspect ratio. The images that was of dimensions of desktop landscape wallpaper (1080px x 1920px) is now a perfect square (1080px x 1080px). Here px stands for pixels.

What cropping doesn't fix is dimensions itself. So the image size (disk space a image take to store itself) depends on dimensions (height and width) of the image.

The bigger the dimension, the more space it takes, thus bigger the size of an image.

# Resizing Images

Currently the images are of different sizes some of them were around 400KB, other 3MB to 4MB. The different sizes are due to me downloading images from different sources with that comes images with varying dimensions. I might download a celebrity full body image of dimension 1080px x 1920px (size: 2MB) and crop only the face creating 560px x 560px (size: 400KB) image.

This is bad because we want our website to load fast and for that we must reduce the size of images. Because whenever a person visit our website they essentially download our website and we don't want them to download a gigantic 10MB website. Here is why:

- People are visiting our website from different location with varying internet speed.

- So let's assume the worst case scenario: If someone has terrible internet speed they won't be able to download our website fast. There patience will run out trying to download our website and they will leave before we even get a chance to present our website.

- Ideally you want your website page size to be as small as possible, the smaller the page size the faster your website will be downloaded. Try to keep it around 1.5MB. This is general guideline feel free to have a website of 300KB or even 3MB.

- You can check the size of web page by entering the URL in this tool: https://tools.pingdom.com and currently if you enter github URL: https://github.com then you will find that the current web page size is 2.1MB. It will change in future as they redesign the web page but you get the idea.

- Most of the times images are the leading cause of gigantic web page size that significantly slows down the website load speed.

---

We're going to resize and compress all of our images in the end as finishing touch to our website because we currently don't know how much space (real-estate) we will allow this images to take in our website.

So let's move on...

# Setting up local development environment

**Prerequisites**: I don't know why I keep typing this words whose spelling I don't know. Anyways before getting started let make sure you have node installed and after that make sure you have npx install in node.

1. Go to https://nodejs.org and install the LTS version (recommended for most users) of node.
2. Install npx by typing the below command in the terminal.

```bash
npm i npx
```

Here i stands for install and npx stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

Now let's finally create our project with the name: `react-artist-catalogue` using `create-react-app` tool. This tool help us set up React project quickly and run it in local development environment.

```bash
npx i create-react-app react-artist-catalogue
```

# Deleting files & code

First thing I did is deleting unnecessary files from src folder. I only kept 2 files: `index.js` and `index.css`

I then went ahead and deleted everything that was written inside both files so that I end with empty files.

# Injecting React In HTML Page

In `index.js` file I wrote the basic boilerplate code to inject React in the pre-written (by create-react-app tool) html page which is located in the public folder. To be specific we inject React in the div element with id: `root` written in the html page.

```js
// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

I also imported our `index.css` file which is located in the same folder. I wrap App component with React.StrictMode component because by doing that React will run the code twice and second time just to make sure there are no errors and bugs in our application and if there is then it will give us warnings.

# Adding the data

I added the data and added a additional field of photoSrc to each profile data to reference the location of images I stored in public folder of our React app in a folder named: artists.

```js
// index.js

const celebrityArtists = [
  {
    artistName: "Beyoncé",
    dateOfBirth: "September 4, 1981",
    nationality: "American",
    genre: "R&B, Pop",
    yearsActive: "1997-present",
    photoSrc: "artists/Beyoncé.jpg",
  },
  {
    artistName: "Ed Sheeran",
    dateOfBirth: "February 17, 1991",
    nationality: "British",
    genre: "Pop, Folk, R&B",
    yearsActive: "2004-present",
    photoSrc: "artists/Ed Sheeran.png",
  },
  {
    artistName: "Taylor Swift",
    dateOfBirth: "December 13, 1989",
    nationality: "American",
    genre: "Pop, Country, Folk",
    yearsActive: "2004-present",
    photoSrc: "artists/Taylor Swift.png",
  },
  {
    artistName: "Drake",
    dateOfBirth: "October 24, 1986",
    nationality: "Canadian",
    genre: "Hip-Hop, R&B",
    yearsActive: "2001-present",
    photoSrc: "artists/Drake.png",
  },
  {
    artistName: "Justin Bieber",
    dateOfBirth: "March 1, 1994",
    nationality: "Canadian",
    genre: "Pop, R&B",
    yearsActive: "2008-present",
    photoSrc: "artists/Justin Bieber.png",
  },
  {
    artistName: "Ariana Grande",
    dateOfBirth: "June 26, 1993",
    nationality: "American",
    genre: "Pop, R&B",
    yearsActive: "2008-present",
    photoSrc: "artists/Ariana Grande.png",
  },
  {
    artistName: "Adele",
    dateOfBirth: "May 5, 1988",
    nationality: "British",
    genre: "Pop, Soul",
    yearsActive: "2006-present",
    photoSrc: "artists/Adele.png",
  },
  {
    artistName: "Rihanna",
    dateOfBirth: "February 20, 1988",
    nationality: "Barbadian",
    genre: "R&B, Pop, Dancehall",
    yearsActive: "2003-present",
    photoSrc: "artists/Rihanna.png",
  },
];
```

# Creating the root `App` component

So the game plan was to create 2 components within our main root App component: `Header` and `Main`.

1. The `Header` component will contain main primary heading of our website.
2. The `Main` component will contain the rest of the website by that I mean secondary heading and our list of data components containing individual profile of our celebrity artists.

We want to make sure we're writing semantic HTML here. Semantic HTML allows us to assign meaning to the information we're writing in the HTML tags. Rather than HTML tags telling browsers how information enclose in the particular HTML tag should look like, semantic tags tells browsers what the information enclose in those tags means to us. It is used to assign meaning to the information enclose in those tags. Let's take making a text bold for example.

```html
<b
  >text<b> <strong>text</strong></b></b
>
```

Both tags does the same thing: which is making the text bold. But the first b tag tells the browser what the text should look like whereas the second strong tag tells the browser that the information enclose in strong tag is important to us and thus it should assign it more weight while evaluating our web page. It also helps search engine bots that crawls the internet looking for web pages to index them in the search results to understand what is written in those web pages and the meaning of information contain in those tags.

Thus writing semantic HTML is a good practice from SEO (Search Engine Optimization) standpoint. I can get away with not using header and main semantic tags for this small project but I do consider it a bad habit that I should not get into because how you to do small things is usually a good indicator of how you will do big things. If you cut corners in a small project (low-pressure environment) then you will definitely going cut corners in big projects (high-pressure environment).

```js
//  index.js

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}
```

I wrap both component with a div with a class name: `container`

```css
/* index.css */

.container {
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
}
```

# Creating the `Header` component.

I created the `Header` component and wrote the primary heading that I wanted to display and enclose it in `h1` tag. I will explain how I choose fonts later because initially I was working with default fonts.

```js
// index.js

function Header() {
  return (
    <header className="header">
      <h1>Artist Catalogue</h1>
    </header>
  );
}
```

```css
/* index.css */

h1 {
  margin-top: 4.8rem;
  color: #008080;
  font-family: "Style Script", sans-serif;
  text-align: center;
  font-size: 6.2rem;
  position: relative;
  width: 100%;
  display: block;
  font-weight: unset;
  border-bottom: 1px solid black;
}

.header {
  align-self: stretch;
}
```

Here I set font-weight to unset because browsers have a default stylesheet called user agent stylesheet that gets applied to HTML elements if you don't set any styles yourself. So here by default headings are bold and I don't want that.

# Creating the `Main` component.

I created the `Main` component and wrote the secondary heading and enclose it in `h2` tag. I created unordered list to render artist profile list dynamically. I decided to create a new `Artist` component to render individual artist profile data by performing map method on the celebrityArtists data array.

```js
// index.js

function Main() {
  return (
    <main className="main-container">
      <h2>
        Unveiling the Stars: Meet the Spectacular Celebrities Shaping the
        Entertainment World!
      </h2>
      <ul className="artist-catalogue">
        {celebrityArtists.map((artist) => (
          <Artist artistData={artist} key={artist.artistName} />
        ))}
      </ul>
    </main>
  );
}
```

```css
/* index.css */

h2 {
  font-family: "Playfair Display", sans-serif;
  font-weight: 500;
  font-size: 2.4rem;
  text-align: center;
  line-height: 1.6;
  width: 80%;
  font-weight: 500;
  margin-bottom: 4.8rem;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.artist-catalogue {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9.6rem;
  margin-bottom: 6.4rem;
  list-style: none;
}
```

# Creating the `Artist` component.

I created the `Artist` component and destructure the object I was receiving as a props to avoid writing props word everywhere in the component.

```js
// index.js

function Artist({ artistData }) {
  return (
    <div className="artist-container">
      <figure className="image-container">
        <img
          src={artistData.photoSrc}
          alt={artistData.artistName}
          draggable="false"
        />
      </figure>
      <div>
        <h3>{artistData.artistName}</h3>
        <p>{artistData.dateOfBirth}</p>
        <p>{artistData.nationality}</p>
        <p>{artistData.genre}</p>
        <p>{artistData.yearsActive}</p>
      </div>
    </div>
  );
}
```

```css
/*  index.css */

img {
  background-color: #f8f8ff;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 118px;
  height: 118px;
  clip-path: polygon(0 10%, 10% 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
  display: inline-block;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.artist-container {
  display: flex;
  gap: 3.2rem;
}

.image-container {
  margin-top: 1rem;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
  align-self: center;
  width: 120px;
  height: 120px;
  overflow: hidden;
  background-color: #008080;
  position: relative;
  text-align: center;
}

.artist-container div {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
```

I add `draggable="false"` to avoid letting user drag images. Normally whenever you click and hold a image and drag it, it creates a draggable ghost image which looks ugly. I don't like it so I went out of my way to disable it in HTML as well as in css.

I didn't like the font. I wanted cursive text font that is readable at a single glance. I don't want someone to exert efforts to understand what it is written in curvise font. I went to Google fonts and find that one I like and import it in css.
