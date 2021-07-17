import React from 'react';
import SearchBar from './SearchBar';
import dog from '../apis/dog';
import BreedList from './BreedList'

class App extends React.Component {
    state = { pics: [] };


    onTermSubmit = async term => {
     const response = await dog.get(`/breed/${term}/images`)

     this.setState({ pics: response.data.message });
 
    }
       
    render() {
        return (
        <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <BreedList pics={this.state.pics}/>
        </div>
        );
    }
}

export default App;