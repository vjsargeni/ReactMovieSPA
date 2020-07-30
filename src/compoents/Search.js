import React, {Component } from 'react';

class Search extends Component {
    state = {
        title: '',
        type: ''
    }

    onChange = (e) => this.setState({title: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchTitle(this.state.title, this.state.type)
    }
    onSelect = (e) => this.setState({type:e.target.value})

    render(){ 
        
        return(
            /*TODO pass prop up to App.js for search (see 42min)
                    add dropbox for SHow/movie
                    add year box
            */
            
            <div>
                <form onSubmit={this.onSubmit}>
                <input
                    value={this.props.title}
                    type="text"
                    title="title"
                    placeholder="Search movie name..."
                    onChange={this.onChange}
                />
                <select onChange={this.onSelect}>
                    <option value='movie'>Movies</option>
                    <option value='series'>Shows</option>
                    {/* <option value='episode'>Episodes</option>  implement later, need futher testing*/}


                </select>
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