import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p className='aboutPage'>This is a tool I made to learn ReactJs. I used the Open Movie Database API as my backend, and 
                designed this UI around it. Enjoy! </p>
                <a href= 'http://www.omdbapi.com/'>Link to OMDB</a>
                <a href= 'https://github.com/vjsargeni'> Link to my github</a> 
            
        </React.Fragment>
    )
}
