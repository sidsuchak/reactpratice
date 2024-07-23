import React from 'react'
import SongList from './SongList'

const MusicPlayer = ()=>{
    return (
        <>
            <div style={{color: 'white', justifyContent: 'center', height: 100, width: 1800, alignContent: 'center', fontFamily: 'fantasy', fontSize: 40, position: 'fixed'}}>MY MUSIC PLAYER</div>
            <SongList/>
        </>
    )
}

export default MusicPlayer
