# Project Overview

## Project Links

- [github repo link](https://github.com/mpowell773/react-api-project)
- [DOES NOT EXIST YET: deployment link]()

## Project Description

I am using XKCD's api to pull a random comic on the main page. There will be a subsequent tab where you can search by number for a comic. Post MVP, After the fetch to XKCD, my plan is to fetch from GIPHY a random GIF tied to the title of the XKCD comic.

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
| Search | useEffect to pull data from api, useState for form to access data and adjust api url, addiontal useState to create a toggle for when the form is submitted so fetches and rerenders Comic, Form Component nested within, Comic component nested within | 
| Comic| Many properties to fill in the title, image, etc | 
| Form | Basic form that will take in properties from Search component so that it's actually functional | 


### MVP
| Component | Priority | Estimated Time | Actual Time | 
| --- | :---: |  :---: | :---: | 
| Create Skeletal Structure and Functioning React Router| H | 3hrs| 3hrs | 
| Fill Out About Component| H | 1hr | .5hr | 
| API Communication| H | 1hr | 4hrs | 
| Implement Integration of Fetch with Comic Component| H | 3hr |  | 
| Add Random Button for Fetch Request| H | 1.5hrs |  | 
| Add Random Logic to Update Url| H | 1.5hr|  | 
| Add Form functionality to Search Component| H | 3hrs |  | 
| Styling | H | 5hrs |  | 
| Responsiveness| H | 3hrs |  | 
| Total | H | 22hrs|  | 

### Post-MVP
| Component | Priority | Estimated Time | Actual Time | 
| --- | :---: |  :---: | :---: | 
| Add Giphy API and Fetch Image | H | 2hrs | | 
| Add Logic so Giphy Waits and Then Fetches Random Image Based on Title| H | 4hrs |  | 
| Dynamic CSS| M | 3hrs |  | 

| Total | H | 9hrs|  | 


## Additional Libraries
- React Router
- Maybe Bootstrap for responsive functionality
- Google Font Library

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```