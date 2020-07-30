import React, {Component } from 'react';

class Search extends Component {
    render(){
        return(
            /*TODO pass prop up to App.js for search (see 42min)
                    add dropbox for SHow/movie
                    add year box
            */
            
            <div>
                <form>
                <input
                    type="text"
                    title="title"
                    placeholder="Search movie name..."
                />
                <input
                    type="submit"
                    value="Search"
                />

                </form>
                
            </div>

        )
    }
}

export default Search;