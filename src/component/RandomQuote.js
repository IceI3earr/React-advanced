import React from 'react'
import { useEffect, useState } from 'react'
import './RandomQuote.css'

export default function RandomQuote() {

    var colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];
    const [color, setColor] = useState([])
    const getColors = () => {
        let random = Math.floor(Math.random() * colors.length)
        let randomColor = colors[random]
        setColor(randomColor)
    }
    const [data, setData] = useState([])
    useEffect(() => {
        getQuote()
        getColors()
    }, [])
    const getQuote = () =>
        {
            const postAPI = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json' ;
            fetch(postAPI)
                .then((respone) => respone.json())
                .then((data) => {
                    let listData = data.quotes ;
                    let randomIndex = Math.floor(Math.random() * listData.length);
                    let randomQuote = listData[randomIndex]
                    setData(randomQuote)
                })
        }
        console.log('data : ',data);
        console.log('colors : ',color);
    const handleClick = () =>{
        getQuote()
        getColors()
    }    
    return (
        <>
        <div className="quote-bg" style={{backgroundColor: color}}>
            <div className="quote-box">
                <div className="quote-text" style={{color: color}}>
                    <div className="quote">
                        <h1>" {data.quote}</h1>
                    </div>
                    <div className="quote-author">
                        <h1>- {data.author}</h1>
                    </div>
                </div>
                <div className="quote-button">
                    <button onClick={handleClick} style={{backgroundColor: color}}> New Quote</button>
                </div>
            </div>
        </div>
        
        </>
    ) 
}
