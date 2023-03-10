# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

**Home page**
![home](/public/screenshots/home-pc.png)

**Loading user information**
![loading](/public/screenshots/loading-pc.png)

**User profile**
![user](/public/screenshots/github-user-pc.png)

### Links

- Solution URL: [Github Repository](https://github.com/datproto/datproto-chal_github-user-search.git)
- Live Site URL: [Vercel Live Site](https://datproto-chal-github-user-search.vercel.app)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Redux](https://redux.js.org/) - For managing state and fetching data
- [TailwindCSS](https://tailwindcss.com/) - For static style
- [Next Themes](https://www.npmjs.com/package/next-themes/) - For theme switcher
- [Framer Motion](https://www.framer.com/motion/) - For animation
- [Moment JS](https://momentjs.com/) - For time format
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

The greatest thing in this project is I have learned how to create animation with **Framer Motion**.

For example, below is my animated loading indicator:
```typescript jsx
  <motion.span
    key={key}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 0.5, ease: "easeInOut", delay: (key / 2) + 0.5, repeat: Infinity, repeatDelay: 1 }}
  >
    {dots[key]}
  </motion.span>
```

## Author

- Website - [Dat Proto](https://datproto.com)
- Frontend Mentor - [@datproto](https://www.frontendmentor.io/profile/datproto)
- Twitter - [@datproto1997](https://www.twitter.com/datproto1997)
- LinkedIn - [Dat Proto](https://www.linkedin.com/in/datproto/)