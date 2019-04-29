# Scroll Carousel
> pre-alpha not entirely working yet not released :)

## Documentation (WIP!!)
Please visit [the wiki](https://github.com/webermn15/scrollcarousel/wiki) for information on getting up and running. 

[Click here for API Documentation](https://github.com/webermn15/scrollcarousel/wiki/API-Documentation)

Ongoing issues to fix & features to add
-------
#### Bugs
* ~~Padding on child elements breaks center & right alignment with & without box-sizing: border-box~~ 
**use jquery outerwidth to fix**
* ~~Margins break alignments~~ 
**account for margins on left & right align by getting value & computing it for the scroll adjustment**
* ~~Indicator buttons are hardcoded to only work for left align atm~~ 
**fixed improper child left bounds calculations in the viewportChangeHandler function, implemented align checking for indicators**
* Borders create minor offset issues, current working fix is a little hacky (add additional width of a couple pixels on some checks)
* ~~Prev arrow button broken atm~~ **fixed, was broken only for centered alignment due to incorrect arithmatic symbol**
* Create workaround for the `overflow: scroll` [right padding problem](https://blog.alexandergottlieb.com/overflow-scroll-and-the-right-padding-problem-a-css-only-solution-6d442915b3f4) 
**<-- this fix works; however, for snapAlignment: right, since its using this pseudoelement fix instead of margin there needs to be a way to calculate the offset it creates when aligning the snap**

#### Features todo
* Extract API for passing custom button classes
* Dynamically add theme classes on instantiation
* Keep it as customizable as possible!
* Write API documentation
* Change everything from Weber Carousel to Scroll Carousel