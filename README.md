# Scroll Carousel
> pre-alpha not entirely working yet not released :)

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
**<-- this fix works; need to pare back css to base necessary styles**

#### Features todo
* Extract API for passing custom button classes
* Dynamically add theme classes on instantiation
* Keep it as customizable as possible!
* Write API documentation