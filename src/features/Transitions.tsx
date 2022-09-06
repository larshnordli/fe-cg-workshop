import React from "react";
import { bigText } from "./bigtext";

export const Transitions = () => {

    return (
        <section>
            <a href="https://reactjs.org/blog/2022/03/29/react-v18.html#new-feature-transitions"><h2>Transitions</h2></a>
            <ol>
                <li>Create an <code>input type="text"</code> field, and set it up to be controlled by a state variable</li>
                <li>Create a state variable to hold a filtered list</li>
                <li>Create a function that filters <code>src/features/bigText.ts</code> on the value of the the input field</li>
                <li>Create a button that clears the input field</li>
                <li>Create a <code>console.log('rendering')</code> above return statement</li>
                <li>Type something in the input field and try to click "clear"-button before the filtered words are shown. Notice the renders after the UI changes from clearing the filter.</li>
            </ol>
            <article>
                <h3>Code zone</h3>
            </article>
        </section>
    )
}