# CSS Cheatsheet

## Selectors

``` css
* {} ===> Universal Selector

#id {} ===> ID selector

h1, h2 {} ===> Type selector

h1+p {} ===> Adjacent sibling selector

ul > li {} ===> Child selector

h1 ~ p {} ===> General sibling selector

p a{} ===> Descendant selector

div[att="val"]{} ===> Attribute selector
===>
```

## Units

```css
% ===> Percentage
cm ===> Centimeter
in ===> Inch
mm ===> Milimiter
pc ===> Pica (1 pica = 12 points)
pt ===> Point (1 point = 1/72 inch)
px ===> Pixel (1 pixel = 1/96 inch)
ch ===> Width of the "0" glyph in the font size
em ===> 1em = Current font size
ex ===> X-height of the element's font
gd ===> Grid defined by 'layout-grid'
rem ===> Font size of the root element
vh ===> Viewport's height
vw ===> Viewport's widht
vm ===> Smaller of viewport's height or width
```

## Pseudo-elements

```css
::before: ===> Inserts content before an element's content.
::after: ===> Inserts content after an element's content.
::first-letter: ===> Applies styles to the first letter of an element.
::first-line: ===> Applies styles to the first line of an element.
```

## Pseudo-class

```css
:active ===> an activated element
:focus ===> an element while the element has focus
:hover ===> an element when you mouse over it
:link ===> an unvisited link
:disabled ===> an element while the element is disabled
:enabled ===> an element while the element is enabled
:checked ===> an element that is checked
:selection ===> an element that is currently selected or highlighted by the user
:lang ===> allows the author to specify a language to use in a specified element
:nth-child(n) ===> an element that is the n-th sibling
:nth-last-child(n) ===> an element that is the n-th sibling counting from the last sibling
:first-child ===> an element that is the first sibling
:last-child ===> an element that is the last sibling
:only-child ===> an element that is the only child
:nth-of-type(n) ===> an element that is the n-th sibling of its type
:nth-last-of-type(n) ===> an element that is the n-th sibling of its type counting from the last sibling
:last-of-type ===> an element that is the last sibling of its type
:first-of-type ===> an element that is the first sibling of its type
:only-of-type ===> an element that is the only child of its type
:empty ===> an element that has no children
:root ===> root element within the document
:not(x) ===> an element not represented by the argument ‘x’
:target ===> a target element as specified by a target in a UR 
```

## List styling

```css
/* Style */
list-style-type: disc | circle | square | none;

/* Position */
list-style-typle: inside | outside;

/* Image */
list-style-img: url()
```

## Postion

```css
/* Position */
position: static | relative | absolute | fixed | sticky;

/* Position element */
top right bottom left

// /* Float element */
float: | left | right | none;

/* Z-index */
z-index: 3 | auto | none;

/* Clear floating */
clear: none | left | right | both;
```

## Font properties

/**/

```css
font-style: normal | italic | oblique;

font-variant: normal | small-caps

font-size: 13px | 0.8 rem | 80%

font-weight: normal | bold | bolder | lighter | 100-900

letter-spacing: normal | 4px

line-height: normal | 3rem | 34%

font-family: 'Open sans', sans-serif
```

## Text properties

```css
text-align: start | end | left | right | center | justify
text-align-last: start | end | left | right | center | justify
text-decoration: none | underline | overline | line-thorugh | blink
text-shadow: h-shadow v-shador | blur-radius color | none| initital | inherit
text-justify: auto | inter-word | interideograph | inter-cluster | distribute |
kashida | tibetan
text-transform: none | capitalize | uppercase | lowercase
text-wrap: normal | unresrricted | none | suppress
```

## Trantisitions

```CSS
transitions: transitions-property transitions-duration transitions-timing-function transitions-delay;
transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubicBezier(number, number, number, number);
transitions-property: none | all;
transitions-delay: time;
transitions-duration: time;
```

## Flexbox

``` CSS
display: flex: Defines a flex container.
flex-direction: Sets the direction of flex items (row, column).
justify-content: Aligns flex items along the main axis (flex-start, flex-end, center, space-between, space-around).
align-items: Aligns flex items along the cross axis (flex-start, flex-end, center, baseline, stretch).
flex-wrap: Sets whether flex items should wrap or not (nowrap, wrap, wrap-reverse).
align-content: Aligns a flex containerâ€™s lines within the flex container (flex-start, flex-end, center, space-between, space-around, stretch).
order: Sets the order of a flex item.
flex-grow: Sets how much a flex item will grow relative to the rest of the flex items.
flex-shrink: Sets how much a flex item will shrink relative to the rest of the flex items.
flex-basis: Sets the initial size of a flex item.

```

## Grid properties

``` CSS
display: grid: Defines a grid container.
grid-template-columns: Defines the columns of the grid.
grid-template-rows: Defines the rows of the grid.
grid-column-gap: Sets the gap between columns.
grid-row-gap: Sets the gap between rows.
grid-gap: A shorthand for setting both grid-row-gap and grid-column-gap.
grid-column-start: Sets the starting column of a grid item.
grid-column-end: Sets the ending column of a grid item.
grid-row-start: Sets the starting row of a grid item.
grid-row-end: Sets the ending row of a grid item.
justify-items: Aligns grid items along the inline (row) axis.
align-items: Aligns grid items along the block (column) axis.
justify-content: Aligns the grid containerâ€™s items along the inline (row) axis.
align-content: Aligns the grid containerâ€™s items along the block (column) axis.
```
