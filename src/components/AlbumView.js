//will make seperate API calls from the app
//the componets to serve specific data about a given album
import { useState,useEffect} from "react";

function AlbumView(){
    const[ albumData, setAlbumData] = useState([])

    return(
        <div>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView;