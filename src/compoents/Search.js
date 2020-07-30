import React, {Component } from 'react';

class Search extends Component {
    render(){
        return(
            <div>
                <form>
                <input
                    type="text"
                    title="title"
                    placeholder="Search movie name..."
                />
                <input
                    type="submit"
                    Value="Search"
                />

                </form>
                
            </div>

        )
    }
}

export default Search;