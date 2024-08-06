# Javascript

Javascript helps the user experience making a website interactive.

## DOM

It is a tree like structure of the html in a website.

document.firstElementChild would return the html tag of the document. As well as document.firstElementChild.firstElementChild returns the head tag.

The DOM allows for javascript to access and modify tags, text or styles easily. For example:

```Javascript
var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Goodbye";
heading.style.color = "red";
```

With the DOM, javascript can access properties or methods of an object.

To get an array of elements, it can be done by document.getElementsByTagName("tag"). This would return an array of every single element with that tag in the html.

Other way to get elements are:

- getElementsByClassName("")
- getElementById("")
- querySelector("")
- querySelectorAll("")

### Change CSS styles with javascript

Properties for css in javascript are camelCase instead of the regular CSS rules.

```Javascript
document.querySelector("h1").style.fontSize = "10rem";
```

Or for example:

```Javascript
document.querySelector("button").style.border = "10px solid black";
```

## Separation of concerns

It is important to separate the role of html, css and javascript and stick to that objective. In this case, a way to make this possible for interactive websites is using this method:

```Javascript
document.querySelector("button").classList.add("invisible");
```

or the method remove (or even toggle):

```Javascript
document.querySelector("button").classList.remove("invisible");
```

This way, each file holds on to its own responsibility.

## Access attributes of a html element

This can be done with the method:

```Javascript
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://bing.com/");
```
