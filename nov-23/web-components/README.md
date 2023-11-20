# Web Components

## Getting started
1. Open the [HTML-file](/nov-23/web-components/index.html) in your browser (right-click and open in browser from File Explorer, or enter file location in the browsers address bar). Tip: use MDN's documentation and guides for web components to do the assignments.

## Assignments
1. Create a "MyComponent.js"-file and create a JavaScript class. This component can be whatever you want - some examples are a button, heading, info/warning box or similar.
2. Register your new component (class) and link your created js-file to the index.html file (placeholder code already exists)
3. Render your custom component in the index.html file and refresh the browser to see the result. You've rendered your first custom component!
2. Attach a Shadow DOM to your component. 
    2.1. You can wrap a paragraph or heading around the component's content.
    2.2. Apply styling to your component's shadow DOM. Note: the page already has styling applied to `p` and `h1` tags. 
3. Render a template-tag in the index.html with some content. Refresh the web page to see the result.
    3.1. Target, clone and attach the template tag to the Shadow DOM of your component.
    3.2. Add some styling within the template tag and refresh to see the result
    3.3. Create a slot within your template tag, and add some text and/or HTML markup inside it. Edit your component in assignment 2 to use this slot.

## Resources
- [MDN: Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [Component Odyssey: Writing component that work in any framework](https://component-odyssey.com/articles/01-writing-components-that-work-in-any-framework)
- [Webcomponents.org](https://www.webcomponents.org/introduction)
- [Javascript.info: Web Components](https://javascript.info/web-components)
- Jim Nielsen
    1. [Web Components](https://blog.jim-nielsen.com/2023/html-web-components/)
    2. [Web Components: An Example](https://blog.jim-nielsen.com/2023/html-web-components-an-example/)
    3. [As good as HTML](https://blog.jim-nielsen.com/2023/as-good-as-html/)
- [Jeremy Keith: HTML Web Components](https://adactio.com/journal/20618)
- [JavaScript.info: Shadow DOM slots](https://javascript.info/slots-composition)