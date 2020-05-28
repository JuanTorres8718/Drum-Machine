import React from 'react';
import Box from './Box';
import '../styles/Content.css';

const Content = () => {
    
    const drums = [
        {
            key: 'Q',
            sound: 'https://masterbits.de/sc_docu/sounds1/1DL60050.MP3',
        },
        {
            key: 'W',
            sound: 'https://masterbits.de/sc_docu/sounds2/CDL60013.mp3'
        },
        {
            key: 'E',
            sound: 'https://masterbits.de/sc_docu/sounds2/DT_K4.mp3',
        },
        {
            key: 'A',
            sound: 'https://masterbits.de/sc_docu/sounds2/DCH9G034.mp3',
        },
        {
            key: 'S',
            sound: 'https://masterbits.de/sc_docu/sounds2/CD360404.mp3',
        },
        {
            key: 'D',
            sound: 'https://masterbits.de/sc_docu/sounds2/CDL70088.mp3',
        },
        {
            key: 'Z',
            sound: 'https://masterbits.de/sc_docu/sounds2/BD150203.mp3',
        },
        {
            key: 'X',
            sound: 'https://masterbits.de/sc_docu/sounds2/CD360101.mp3',
        },
        {
            key: 'C',
            sound: 'https://masterbits.de/sc_docu/sounds2/BVL5A315.mp3',
        },
    ]

    return (
        <div id="drum-machine" className="container">
            <div id="display" className="contBox">
                <h6 className="title">Play a sound</h6>
                {drums.map((drum, index)=>(
                    <Box 
                        letters={drum.key} 
                        key={index} 
                        audio={drum.sound} 
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Content;