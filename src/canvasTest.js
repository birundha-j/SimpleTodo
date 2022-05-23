import React from "react";
import Canvas from './components/Canva/canvas'

class Canva extends React.Component{
    render(){
    let styles = {
        backgroundImage: "https://f1.media.brightcove.com/8/234507581/234507581_5106927173001_5106903722001-vs.jpg?pubId=234507581&videoId=5106903722001"
    }

        return(
            <div>
                <Canvas styles={styles} />
            </div>
        )
    }
}

export default Canva;