import {useEffect} from 'react'
import moleImg from './mole.png'

function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // Math.ceil rounds a number up to the next largest interger
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole