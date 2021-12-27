import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const HelloWorld = () => {

    const [data , setData] = useState("Hello Patrick");

    const sayHelloWorld = () => {
        setData("Hello World");
    }

    const sayHelloToDorothee = () => {
        setData("Hello Dorothée");
    }

    return (
        <div>
            <Navigation/>
            <Logo />
            <h1>{data}</h1>
            <button onClick={sayHelloWorld}>Dire bonjour au monde entier</button>
            <button onClick={sayHelloToDorothee}>Dire bonjour à Dorothée</button>
        </div>
    );
};

export default HelloWorld;
