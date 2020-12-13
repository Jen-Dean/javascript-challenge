# Javascript Challenge
> UFOS!!!

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

## Screenshots
![Example screenshot](https://github.com/Jen-Dean/javascript-challenge/blob/main/Images/Screen%20Shot%202020-12-13%20at%2012.51.37%20PM.png)
![Example 2](https://github.com/Jen-Dean/javascript-challenge/blob/main/Images/Screen%20Shot%202020-12-13%20at%2012.51.46%20PM.png)

## Technologies
* HTML
* Boostrap
* Javascript
* D3
* CSS
* Google API

## Setup
For the filter to work properly, I had to use many `if` statements as well as other conidionals to show the correct data.

## Code Examples
Example of the data dictionary set up:
`var data = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },`
  
  Example of the filter conditional statements:
  `if (inputDateValue) {
        var filteredData = tableData.filter(ufo => ufo.datetime === inputDateValue);
        console.log(filteredData);
    } else {
        var filteredData = tableData;`

## Features
Filter the Table Data easiy by:
* Date
* City
* Country
* State
* Shape

## Status
Project is: _finished_

## Inspiration
Inspired by Rutgers Data Science Bootcamp & finding the truth... it's out there. 

## Contact
Created by [@Jen-Dean](https://github.com/Jen-Dean)
