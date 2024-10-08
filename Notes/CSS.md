# CSS

CSS stands for Cascading Style Sheets. CSS allows for styling to be separte from html content, like an add-on.

## Ways of adding CSS to a website

- Inline
- Internal
- External

## Internal CSS

``` html
<html>
  <style>
    html {
      background: blue;
    }
  <style/>
<html/>
```

## External CSS

``` html
<html>
  <head>
    <link rel="stylesheet" href="./styles.css"/>
  </head>
<html/>
```

``` css
p {
  background: blue;
}
```

## Selectors

Selector is the element that specifies the target element or class that the style will be applied on.

``` css
h1 {
  color: red;
}

h3 {
  color: blue;
}

h2 {
  color: green;
}
```

Each heading element is going to have different color based on their heading level from 1 to 3.

### Type of selectors

- Class selector (can be applied to many elements)
- Id selector (unique to a single element)
- Attribute selector (select all elements that have that attribute)
  
  Ex:

  ``` css
  p[draggable] {
    color: red;
  }
  ```

- Universal selector (selects everything in the html file)

## Color properties

There are named colors, named colors establish a name to a specific color. But this doesn't limit using other types of color formats like hex or rgb.

``` css
h1 {
  color: red;
}
```

``` css
h1 {
  color: #C58940;
}
```

## Font properties

Font size can be change with font-size property. It can be modified through pixels (px) or points (pt).

Other ways of modifying font size is:

- 1em (100% of parent)
- 1rem (100% of root) <- way more consistent

### Font Weight

- Keyword: normal, bold
- Relative to parent: lighter(-100), bolder(+100)
- Number (how bold or light the text will be in a scale): 100 -  900

### Font family

Font family determines how the text will look like, for example: helvetica, sans-serif, times new roman, etc.

``` css
h1 {
  font-family: "Times New Roman", serif;
}
```

### Text align

Property to set the horizontal alignment of text. Either left, center, right, etc.

## CSS Box Model

Boxes in css can be adjusted and styled with margin, padding and border. When styling this properties it can hava a maximum of 4 values, it goes in a clockwise direction, first top, then left, bottom and finally right.

div tags works as invisible containers to hold different content together.

## CSS priority levels

This is where the cascading concept comes in play to styling websites.

1. Position
  
    - Whether a css rule has a higher or lower position in the css file. The lower rule will be applied at last.

2. Specificity

    - It has to do of how specific a css selector is. The order goes (where number one is the higher priority level):
        1. Id selector
        2. Attribute selector
        3. Class selector
        4. All tag elements

3. Type
    - Then it goes the type of css that is applied. The order goes from most important to least: inline, internal, external.

4. Importance

    - The !important keyword can be added to a css rule and it overrides every other rules.

## Combining css selectors

CSS selectors can be combined through different classes and elements. For example:

```css
.inner-box p {
  color: white;
}
```

This would target all p elements inside of the div(s) with class inner-box.

### Multiple selectors

```css
h1, h2 {
  color: blueviolet;
}
```

### Child selectors

Works with the right angle bracket > to select a child of another selector. Only one level of child.

```CSS
.box > p {
  color: firebrick;
}
```

### Descendant selectors

This type of selector is similar to child but happens in any level of descendants.

```CSS
.box li {
  color: blue;
}
```

In this css rule, every li a level below .box elements will have a text color of blue.

### Chaining

This is where selectors are chained together to apply rules to a single element.

``` css
li.done {
  color: seagreen;
}
```

## CSS Positioning

Static positioning: html default flow

Relative positioning: position relative to default position

Absolute positioning: position relative to nearest positioned ancestor or top left corner of webpage

Fixed positioning: position relative to top corner of browser window.

## CSS Display

Common types of display are: inline, block, inline-block and none.

## CSS Float

In order for a element to wrap around other elements then the float property comes in.

It is useful to use the property clear when a element doesn't need to be wrapped around another one.

``` css
img {
  float: left;
}

footer {
  clear: left;
}
```

## Responsive Websites

Resposiveness is a key factor of today's websites. It states adaptability of software independent of the user's device.

### Media queries

Media queries are a way to define different css rules based on the device's size.

## Flexbox

Flexbox is a way to achieve structure within a website. It helps by giving a more flexible (no pun intended) method to divide or bring together elements.

[CSS flexbox cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Flex direction

When the flex-direction of a container is set to row then the main axis is horizontal. Instead, if it is set to column, the main axis is vertical.

### Flex wrap

The property flex-wrap can be set in the parent element for it's child elements to wrap around the page when there is not enought space.

### Justify content

Justify-content property sets the children in the main axis.

### Align items

Align items is used to align flex items along the cross axis. Children elements can have a separate property called align-self.

### Align content

This property only works when flex-wrap is set to wrap.

## CSS Grid

Grid is a tool to laying out content in a two dimensional layout.

In css grid, the column's ratio and row's ratio have to be established.

```CSS
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}
```

### Grid Sizing

- Auto sizing

``` CSS
.grid-container {
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 200px auto;
}
```

- Fixed sizing

``` CSS
.grid-container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 400px 800px;
}
```

- Fractional sizing

``` CSS
.grid-container {
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr 2fr;
}
```

- Min-max sizing

``` CSS
.grid-container {
  display: grid;
  grid-template-rows: 200px minmax(400px, 5fr);
  grid-template-columns: 200px minmax(400px, 5fr);
}
```

- Repeat sizing

``` CSS
.grid-container {
  display: grid;
  grid-template-rows: repeat(2, 200px);
  grid-template-columns: repeat(2, 200px);
  grid-auto-rows: 300px;
}
```

! A tip for adding more rows or columns that initially expected is to use grid auto row and set a size.

## Bootstrap

Is a CSS framework, pre-made CSS files easy to include into website projects.

Remember to state my own stylesheet after bootstrap if any style has to be overwritten.
