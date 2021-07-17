import React from 'react';
import SearchBar from './SearchBar';
import dog from '../apis/dog';

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
        I have {this.state.pics.length} pictures.
        </div>
        );
    }
}

export default App;