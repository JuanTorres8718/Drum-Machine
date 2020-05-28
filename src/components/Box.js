import React,{useRef, useEffect} from 'react';
import '../styles/Box.css';

const Box = ({letters, audio}) => {

    const sound = useRef(null);

    useEffect(() => {
        document.addEventListener('keydown', (e)=>{
            const id= e.key.toUpperCase();
            const audio = document.getElementById(id);
            if(audio){
                const parent = audio.parentNode;
                parent.classList.add('active');
                audio.play()
                document.querySelector('.title').innerText = `${id} is playing`;
                audio.addEventListener('ended',()=>{
                    parent.classList.remove('active');
                    document.querySelector('.title').innerText = `Play a sound`;
                })
            }
        });

    }, [])

    const playSound = (e)=>{
        let word = e.target.id
        let letter = word.charAt(word.length -1)
        const box = document.getElementById(letter);
        const parent = box.parentNode;
        parent.classList.add('active');
        sound.current.play();
        document.querySelector('.title').innerText = `${letter} is playing`;
        box.addEventListener('ended',()=>{
            parent.classList.remove('active');
            document.querySelector('.title').innerText = `Play a sound`;
        })
    }
    

    return ( 
        <div className="drum-pad" id={`drum-${letters}`} onClick={playSound}>
            {letters}
            <audio ref={sound} src={audio} className="clip" id={letters} />
        </div>
     );
}
 
export default Box;