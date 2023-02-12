import "../styles/global.css"


function Wheel(props) {
    return (

        <div className="wheelContainer"> 
            <img class="wheel wheel--aries" src= "wheel.png"/>
            <div className="displaySign"> {props.sign}
            </div>
        </div>

    )

}

export default Wheel