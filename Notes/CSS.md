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
