import React from 'react';
import SearchBar from './SearchBar';
import dog from '../apis/dog';

class App extends React.Component {
    onTermSubmit = (term) => {
        dog.get(`/breed/${term}/images`)
    }
       
    render() {
        return (
        <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
        );
    }
}

export default App;