# Designing premium looking website and rendering data into  React components ♡
🔗 Live Demo: [https://wasimapinjari.github.io/react-artist-catalogue](https://wasimapinjari.github.io/react-artist-catalogue)

🔗 Source: [https://github.com/wasimapinjari/react-artist-catalogue](https://github.com/wasimapinjari/react-artist-catalogue)

## 📸 Screenshot

![Preview screenshot](public/screenshots/default.png)

Below is the process I went through to create this project. I hope you get value out of it. Enjoy!

## Generating Ideas

First I come up with an idea of what I wanted to create. I knew I wanted to render a list in React. But what do I render? I don't have any data. I was scratching my head in confusion trying to come up with something.

## ChatGPT

I was frustrated so I proceed to ask ChatGPT for dummy data. It gave me a dummy data set but I wasn't satisfied. It was too random for anyone to care including myself. I roll my eyes with a deep sigh after staring at my laptop for some time.

I ask him to give me celebrity artists' data. It gave me 3 different celebrity profiles and I complained and asked to give me at least 10. This looks quite promising because I didn't know that information about those celebrities myself and I was curious to know that. So I went with this data set.

## Data Conversion

I started typing out that data in a JavaScript array containing information about each celebrity profile in an individual object then I realize I am too dumb to know that ChatGPT can do that work for me.

So I ask ChatGPT to convert that data into a JavaScript array. And voila! I have my data.

## Image Search

The next step was to search celebrity images. My Google search query looked like this: Rihanna portrait white background.

## Cropping Images

I downloaded all the celebrity images that I like the best. The only thing I hate was I thought this project was easier and less time-consuming than it turned out. It felt as if I was hit with reality like a brick.

The images I downloaded were of different dimensions (height and width) so I crop each one of them in a perfect square and made sure the celebrity face is in the center of the square.

Cropping images fix half of the problem. By that I mean it fixed the problem of aspect ratio. The images that were of dimensions of desktop landscape wallpaper (1080 px x 1920 px) are now a perfect square (1080 px x 1080 px). Here px stands for pixels.

What cropping doesn't fix is the dimensions themselves. So the image size (disk space an image takes to store itself) depends on the dimensions (height and width) of the image.

The bigger the dimension, the more space it takes, thus the bigger the size of an image.

## Resizing Images

Currently, the images are of different sizes some of them were around 400 KB, and others 3 MB to 4 MB. The different sizes are due to me downloading images from different sources with that comes images with varying dimensions. I might download a celebrity full body image of dimension 1080 px x 1920 px (size: 2 MB) and crop only the face creating a 560 px x 560 px (size: 400 KB) image.

This is bad because we want our website to load fast and for that, we must reduce the size of images. Because whenever a person visits our website they essentially download our website and we don't want them to download a gigantic 10 MB website. Here is why:

- People are visiting our website from different locations with varying internet speeds.

- So let's assume the worst-case scenario: If someone has terrible internet speed they won't be able to download our website fast. Their patience will run out trying to download our website and they will leave before we even get a chance to present our website.

- Ideally, you want your website page size to be as small as possible, the smaller the page size the faster your website will be downloaded. Try to keep it around 1.5 MB. This is a general guideline feel free to have a website of 300 KB or even 3 MB.

- You can check the size of a web page by entering the URL in this tool: https://tools.pingdom.com currently if you enter the Github URL: https://github.com then you will find that the current web page size is 2.1 MB. This will change in the future as they redesign the web page but you get the idea.

- Most of the time images are the leading cause of gigantic web page size that significantly slows down the website load speed.

---

We're going to resize and compress all of our images in the end as a finishing touch to our website because we currently don't know how much screen space (in height and width) we will allow these images to take on our website.

So let's move on...

## Setting up a local React development environment

**Prerequisites**: I don't know why I keep typing these words whose spelling I don't know. Anyways before getting started let's make sure you have node installed and after that make sure you have npx installed in node.

1. Go to https://nodejs.org and install the LTS version (recommended for most users) of the node.
2. Install npx by typing the below command in the terminal.

```bash
npm i npx
```

Here i stands for install and npx stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

Now let's finally create our project with the name: `react-artist-catalogue` using the `create-react-app` tool. This tool helps us set up React project quickly and run it in a local development environment.

```bash
npx i create-react-app react-artist-catalogue
```

## Deleting files & code

The first thing I did is deleting unnecessary files from the src folder. I only kept 2 files: `index.js` and `index.css`

I then went ahead and deleted everything that was written inside both files so that I end with empty files.

## Injecting React In HTML Page

In the `index.js` file I wrote the basic boilerplate code to inject React in the pre-written (by the create-react-app tool) HTML page which is located in the public folder. To be specific we inject React in the div element with id: `root` written in the html page.

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

I also imported our `index.css` file which is located in the same folder. I wrap the App component with React.StrictMode component because by doing that React will run the code twice and a second time just to make sure there are no errors and bugs in our application and if there are then it will give us warnings.

## Adding the data

I added the data and added the field of photoSrc to each profile data to reference the location of images I stored in the public folder of our React app in a folder named: `artists`.

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
## Adding global CSS properties
```css
/* index.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  color: #444;
  background-color: #F8F8FF;
  min-height: 100vh;
  padding: 3.2rem;
  padding-bottom: 6rem;
}
```
Here by using the * selector, I am setting the same CSS property to all elements present in the HTML. Some of the properties here I set much later in the project. I am the kind of person who obsesses over small details and has a hard time letting things go unperfect.

## Creating the root `App` component

So the game plan was to create 2 components within our main root App component: `Header` and `Main`.

1. The `Header` component will contain the main primary heading of our website.
2. The `Main` component will contain the rest of the website by that I mean the secondary heading and our list of data components containing the individual profile of our celebrity artists.

We want to make sure we're writing semantic HTML here. Semantic HTML allows us to assign meaning to the information we're writing in the HTML tags. Rather than HTML tags telling browsers what information enclosed in the particular HTML tag should look like, semantic tags tell browsers what the information enclose in those tags means to us. It is used to assign meaning to the information enclosed in those tags. Let's take making a text bold for example.

```html
<b>text</b>
<strong>text</strong>
```

Both tags do the same thing: which is to make the text bold. But the first b tag tells the browser what the text should look like whereas the second strong tag tells the browser that the information enclosed in the strong tag is important to us and thus it should assign it more weight while evaluating our web page. 

It also helps search engine bots that crawl the internet looking for web pages to index them in the search results to understand what is written on those web pages and the meaning of information contained in those tags.

Thus writing semantic HTML is a good practice from SEO (Search Engine Optimization) standpoint. I can get away with not using header and main semantic tags for this small project but I do consider it a bad habit that I should not get into because how you do small things is usually a good indicator of how you will do big things. 

If you cut corners in a small project (low-pressure environment) then you will be going to cut corners in big projects (high-pressure environment). I understand why you may disagree with a statement like that but I do find those clues quite revealing about what I should expect from someone.

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

I wrap both components with a div with a class name: `container`

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

## Creating the `Header` component

I created the `Header` component and wrote the primary heading that I wanted to display and enclose it in the `h1` tag. I will explain how I choose fonts later because initially, I was working with default fonts.

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

Here I set font-weight to unset because browsers have a default stylesheet called user agent stylesheet that gets applied to HTML elements if you don't set any styles yourself. So here by default headings are bold and I don't want that. This default stylesheet was the reason why I apply the global styles to all elements with the * selector before even beginning the project.

## Creating the `Main` component.

I created the `Main` component and wrote the secondary heading and enclose it in the `h2` tag. I created an unordered list to render the artist profile list dynamically. I decided to create a new `Artist` component to render individual artist profile data by performing the map method on the celebrityArtists data array.

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

## Creating the `Artist` component.

I created the `Artist` component and destructure the object I was receiving as props to avoid writing props words everywhere in the component. I decided that the artist's name is going to be a tertiary heading and enclose it in the `h3` tag.

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
  display: inline-block;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  clip-path: polygon(0 10%, 10% 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
}

h3 {
  font-family: 'Playfair Display', sans-serif;
  font-size: 2.4rem;
  font-weight: 500;
  color: #008080;
}

p {
  font-size: 1.6rem;
  margin-bottom: auto;
}

.artist-container {
  display: flex;
  gap: 3.2rem;
}

.image-container {
  margin-top: 1rem;
  align-self: center;
  width: 120px;
  height: 120px;
  overflow: hidden;
  background-color: #008080;
  position: relative;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
}

.artist-container div {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
```

I add `draggable="false"` to avoid letting the user drag images. Normally whenever you click and hold an image and drag it, it creates a draggable ghost image that looks ugly. I don't like it so I went out of my way to disable it in HTML as well as in CSS.

I wanted to create a frame around images with a border so I use the `clip-path` property to draw a polygon shape in X and Y axis. Every coordinate point (X, Y) of the polygon is separated by a comma. I figure out I can't create a border around the shape because I just cut (clipped) the original shape and the border property does not get adapted to the shape. 

I just went with creating the illusion of a border by adding the same `clip-path` property to the image container and adding background color and having the image on the top of the container. I slightly resize the image to 2 px smaller than the container and centered it inside it to create the illusion of a border. So yeah it is not a real border.

## Selecting Fonts

I was working with default fonts initially which I didn't like. Since the main work is done now it's time to hunt for cool fonts. 

For the primary heading, I wanted a cursive font that is readable at a single glance. I don't want someone to exert effort trying to understand what's written.

For secondary and tertiary headings I wanted a serif font (letters with feet) to get that fashion magazine cover look.

for the paragraph, I want to have sans-serif font (letters with no feet) to give a royal professional feel to my website.

The font choice was based on the industry which in this case is the glamour industry.

I went to Google Fonts and selected the fonts that I like the best and import them on the top of my CSS file like this:

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Playfair+Display:wght@500&family=Style+Script&display=swap');
```
And that's it. I will highly recommend typing the text that you want to display in the preview text of the Google font search bar to see what different fonts look like.

## Selecting Colors

Since we're in the glamour industry I ask chatGPT to suggest a color palette based on it. It gave me 10 different color names and I ask it (complained) to give me hex codes of those colors. I try each one of them to find something I end up liking. Alternatively, you can go to https://colorhunt.co to find colors.

## Revisiting the images

As you know we moved on from working on images after cropping them because we didn't know how much screen space (in height and width) we will allow these images to take on our website. And you probably realized by now after reading the CSS code that I end up giving images 120 px in height and width. So now we know the dimensions we can finally resize our images to further lower the image size without destroying the quality completely.

Ideally, you want to have images that are double or even triple the size of the dimension the image is currently rendered on the website.
Why is that? Because on big screens each pixel of the image gets rendered on two pixels of the big screen. That's how big screens compensate for their size.

Considering that 120 px multiplied by 3 we get 360 px. I will try to resize images to that dimension. 3 images out of 8 has gigantic dimension so I Google search free online image resize tool. I upload the images to the website and resize the dimension down to 360 px x 360 px and downloaded them. Other images that I crop were around 300 px to 330 px so I didn't have to do anything.

Yeh! We're done with resizing images.

## Compressing Images

After the resize I bring all image sizes down to around 60 KB to 100 KB. So the final thing we can do to optimize images is to compress them. I went to this site: https://tinypng.com and upload all 8 images and compress them without losing too much of the image quality.

After compression, all image sizes got down to around 45 KB to 65 KB. Which might not look much but it's a huge improvement. 

## Advance Optimizations
If you want to go crazier on optimization you can even have different sizes of the same images with different dimensions that get displayed depending on where it's getting rendered.

For example, if your website is getting rendered on a small phone then those extra dimensions are useless and you're better off sending an image of the exact dimensions, which in turn allows you to lower the size even further and thus your website will load even faster on a mobile device. And for computer users, you send the image which is larger than the required size for catering to big screen needs.

This is great because the internet problem exists mostly for mobile users who are roaming in areas that have bad internet. People who are using computers probably going to have a high likelihood of having good internet set up to download those extra large image files quickly.

Also, I like to quickly mention that how quickly a website load depends on other things as well besides images. Like for example we add Google fonts to our website using their API. So if Google servers are slow in processing our request then there is nothing we can do about it. So to get rid of our dependency we might want to download the fonts and serve it ourselves. 

This can happen with our server as well and in that case, we might want to migrate to hosting our content elsewhere.

Other optimization techniques may involve caching our website content locally on the client machine so that they don't have to download it again and again. Minifying our JavaScript, CSS, JSON, etc. files and outright deleting unnecessary code and files that are no longer.

Some websites implement a bad algorithm to perform a task that takes way more time than is required and in this case, writing a better algorithm to perform the same task will greatly improve the performance of the website.

## Readjusting the website

Now I was quite happy with the fonts, colors, and the actual content. I wanted to make some adjustments: I play around with spacing the content and making sure it looks good, not too cramped together, and not too spaced apart.

I played around with CSS and add some final touches by changing the look of the scroll bar and the color of doing text selection with the cursor.

```css
::-moz-selection {
  color: #008080;
  background: #333;
}

::selection {
  color: #008080;
  background: #333;
}

::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

::-webkit-scrollbar-track-piece {
  background-color: #F8F8FF;
}

::-webkit-scrollbar-thumb:vertical {
  height: 30px;
  background-color: #008080;
}
```

## Making the website responsive

Lastly, I realize that my website is not responsive. So I made it responsive using media queries. I like to select media query points based on where my design breaks. 

I also like to have some reference websites that I compare my design to at different media queries point. In this case, I compare it to the Cloudflare website homepage.

```css

@media (max-width: 50rem) {
  .artist-catalogue {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 25rem) {
  h1 {
    font-size: 5.6rem;
  }
  h2 {
    font-size: 2.2rem;
  }
  .artist-container {
    flex-direction: column;
  }
  .artist-container div {
    justify-content: center;
    align-items: center;
  }
}
```
## Revealing the size of our website

You might be curious about the size of our website. So I check it on https://tools.pingdom.com and it is 562.5 KB.

That's it. Love you guys, see you next time. Bye!