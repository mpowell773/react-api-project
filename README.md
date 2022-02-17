# Project Overview

## Project Links

- [github repo link](https://github.com/mpowell773/react-api-project)
- [ deployment link](https://mpowell773.github.io/react-api-project/)

## Project Description

I am using xkcd's API to pull a random comic on the main page. There will be a subsequent tab where you can search by number for a comic. Post MVP, after the fetch to xkcd, my plan is to fetch from GIPHY a random GIF tied to the title of the xkcd comic.

*Edit*
While working on this project, I realized that xkcd's normal website is not at all mobile-friendly, so I really pressed down on making a mobile-friendly variation of the site. While my post-MVP of fetching an image from GIPHY is still on the table for the future, I decided to not pursue it for the time being.

## API

```
{
"month": "2",
"num": 223,
"link": "",
"year": "2007",
"news": "",
"safe_title": "Valentine's Day",
"transcript": "{{Valentine's Day}}\n[[There is a large, shaded, red heart.]]\n{{Because love isn't quite complicated enough as it is.}}\n{{alt: One of these days me and Joey Comeau will get around to subverting hetero-normative paradigm and fixing all this.}}",
"alt": "One of these days me and Joey Comeau will get around to subverting the hetero-normative paradigm and fixing all this.",
"img": "https://imgs.xkcd.com/comics/valentines_day.jpg",
"title": "Valentine's Day",
"day": "14"
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframe 1](/project-worksheet-pictures/wire-frame-1.jpg)
- [Wireframe 2](/project-worksheet-pictures/wire-frame-2.jpg)
- [React Architecture](/project-worksheet-pictures/react-architecture.jpg)


#### MVP 
- Implement communication between app and xkcd api 
- Set up routing between app pages
- Build nav and footer 
- Create basic about/intro page
- Display xkcd comic and info on random component
- Display xkcd comic after a form input on search component
- Implement and test responsiveness

#### PostMVP

- Implement communication between app and giphy api 
- Utilize logic to check if xkcd fetch request has occured and then fetches from giphy api
- Adjust responsiveness for new image
- Add basic animation effects with css (glow on nav hover, etc.)

## Components


Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | React Routing and rendering of the nav, main, footer| 
| Intro | Stateless, Has introduction/about text for app | 
| Random | useEffect to pull data from api, useState button toggle for useEffect, Comic component to be nested within | 
| Search | useEffect to pull data from api, useState for form to access data and adjust api url, additional useState to create a toggle for when the form is submitted so fetches and rerenders Comic, Form Component nested within, Comic component nested within | 
| Comic| Many properties to fill in the title, image, etc | 
| Form | Basic form that will take in properties from Search component so that it's actually functional | 


### MVP
| Component | Priority | Estimated Time | Actual Time | 
| --- | :---: |  :---: | :---: | 
| Create Skeletal Structure and Functioning React Router| H | 3hrs| 3hrs | 
| Fill Out About Component| H | 1hr | .5hr | 
| API Communication| H | 1hr | 4hrs | 
| Implement Integration of Fetch with Comic Component| H | 3hr | .5hr | 
| Add Random Button for Fetch Request| H | 1.5hrs | .5hr | 
| Add Random Logic to Update Url| H | 1.5hr| .5hr | 
| Add Form functionality to Search Component| H | 3hrs | 1hr | 
| Styling | H | 5hrs | 6h | 
| Responsiveness| H | 3hrs | 4.5hrs | 
| Total | H | 22hrs| 20.5hrs | 


### Original Post-MVP
| Component | Priority | Estimated Time | Actual Time | 
| --- | :---: |  :---: | :---: | 
| Add Giphy API and Fetch Image | L | 2hrs | 0hrs | 
| Add Logic so Giphy Waits and Then Fetches Random Image Based on Title| L | 4hrs | 0hrs  | 
| Dynamic CSS| M | 3hrs | 2hrs | 
| Total | H | 9hrs| 2hrs  | 

### Updated Post-MVP

| Component | Priority | Estimated Time | Actual Time | 
| --- | :---: |  :---: | :---: | 
| Have Hover Text Pop Out on Touch Devices| H | 2hrs| 2.5hrs | 
| Create BioPage| H | 1hr | 1hr | 
| Add Button Navigation to Search Page | H | 3hr | 2hrs | 
| Write Logic to Form to  Limit Searches| M | 2hr | 2hr | 
| Total | H | 8hrs| 7.5hrs | 


## Additional Libraries
- React Router
- [XKCD font from github](https://github.com/ipython/xkcd-font)
- [react-alert](https://www.npmjs.com/package/react-alert)

## Code Snippet

I utilized a prop that I passed down from App.js all the way to my Form component. This prop, latestComicNumber, is the most recent comic number that has been posted. I then utilized some relatively simple conditional logic so that the user can't send a fetch request that will be instantly denied. They are alerted if they are out of bounds. Instead of normal alerts, I used a package called react-alerts.

```js
  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (form > latestComicNumber) {
      alert.show(
        <div className="alert">{`Hey! The lastest comic is currently #${latestComicNumber}. Don't go past that number. >:(`}</div>
      );
    } else if (form < 0) {
      alert.show(
        <div className="alert">{`You realize that we can't go back in time right?`}</div>
      );
    } else {
      setFormSubmit(form);
    }
  };
```

## Additional Resources/References

#### Footer Positioning

Useful tut on footer positioning: https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/ 

#### Image Responsiveness

W3 Schools came to save me with max-width for images... which I now finally understand!

#### Local Fonts
 
As shown above, I cloned down a repo that had created a font with Randall Munroe's handwriting. Here's the tutorial I followed to make it all work in my project: https://dev.to/annequinkenstein/adding-fonts-to-create-react-app-3ed7
 