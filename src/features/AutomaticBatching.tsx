import * as React from 'react';

export const AutomaticBatching: React.FC = () => {
    return (
        <article>
            <a href="https://reactjs.org/blog/2022/03/29/react-v18.html#new-feature-automatic-batching" target="_blank">
                <h2>Automatic Batching</h2>
            </a>
            <ul>
                <li>Create a console log above this component's return statement that logs "render"</li>
                <li>Create two state variables in this component</li>
                <li>Create a <code>button</code> that changes both state-values after 1 sec</li>
                <li>Implement the same or similar code in <a href="https://stackblitz.com/edit/react-ts-ph8nxu?file=App.tsx" target="_blank">React 16</a></li>
            </ul>
            <p>...and note the number of console.logs you see in both versions.</p>
            <p><a href="https://github.com/reactwg/react-18/discussions/21">Read more about it</a></p>
            <article>
                <h3>Code zone</h3>
            </article>
        </article>
    )
}