export const StrictMode = () => {
    return (
        <>
            <a href="https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors"><h2>Strict Mode</h2></a>
            <p>(This whole app is wrapped in <code>React.StrictMode</code> in App-component)</p>
            <ol>
                <li>create a useEffect with an empty dependency list. Run <code>console.log('mount')</code></li>
                <li>create a return statement for an anonymous function within useEffect function and run <code>console.log('unmount')</code></li>
                <li>Copy-paste the code into <a href="https://stackblitz.com/edit/react-ts-ph8nxu?file=App.tsx">React 16</a> and notice the console</li>
            </ol>
        </>
    )
}