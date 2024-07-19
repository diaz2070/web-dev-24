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
