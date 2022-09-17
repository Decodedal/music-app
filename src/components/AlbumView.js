// These components will be making separate API calls from the app
// component to serve specific data about a given album
import React, {useContext} from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import {DataContext} from '../context/DataContext'


function AlbumView() {
    const{id} = useParams()
    const [ albumData, setAlbumData ] = useState([])

    const Data = useContext(DataContext)
   
    console.log(Data)

    // const justSongs = Data.filter(entry => entry.wrapperType === 'track')

    // const renderSongs = justSongs.map((song, i) => {
    //     return (
    //         <div key={i}>
    //             <p>{song.trackName}</p>
    //         </div>
    //     )
    // })

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
            
        </div>
    )
}

export default AlbumView
