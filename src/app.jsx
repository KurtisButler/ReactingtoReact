import React, {useEffect, useState} from 'react';
import Greeter from "./components/Greeter";

const App = () => {
const [username, setUsername] = useState("")
const [loaded, setLoaded] = useState(false);
console.log(username)

useEffect(() => {
    setTimeout(() => {
        setLoaded(true)
    }, 3000); 
}, [username]);

const handleUsernameChange = e => setUsername(e.target.value)


    if(loaded) {
    return (
        <>
            <h1>This is a sample of header text.</h1>
            <h2>This sample text is smaller</h2>
            <Greeter name="Kurt" phrase="Hello there"/>
            <Greeter name="Devito" phrase="Then I started blasting"/>

            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        
        <p>You're logging in as {username}</p>

        </>


    );
    } else {
        return (
            <>
                <h1>Website loading...</h1>
                <button onClick={() => setLoaded(true)}>Load Website!</button>
            </>
        )
    }
};

export default App