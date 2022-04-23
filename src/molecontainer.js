import {useState} from 'react'
import Mole from './mole'
import EmptySlot from './emptyslot'

function MoleContainer(props){
    //Set state variables 
    let [moles, displayMoles] = useState(false)

    //handleClick is an instance method, which changes the local state
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        displayMoles(false)
    }

    let displayMole = moles ? <Mole setScore={props.setScore} toggle={displayMoles} handleClick={handleClick} /> : <EmptySlot toggle={displayMoles} />

    return (
        <div>
            <h2> Mole Container </h2>
            {displayMole}
        </div>
    )
}
export default MoleContainer