import React from 'react';
import SearchBox from './SearchBox';

class App extends React.Component {
  state = {
    doggos: [],
    doggoSearchText: ''
  };

  
  componentDidMount() {
    console.log('component mounted!');
    this.fetchDoggos();
  }

  componentDidUpdate() {
    if (this.state.doggoSearchText === "") {
      alert('please enter a search term!');
      console.log(this.state.doggoSearchText);
    }
  }

  onSearchInputChange = event => {
    this.setState({ doggoSearchText: event.target.value });
  };

  fetchDoggos = event => {
    if (event) {
      event.preventDefault();
    }

    fetch(`https://dog.ceo/api/breed/${this.state.doggoSearchText || 'husky'}/images`)
      .then(res => res.json())
      .then(dogs =>
        this.setState({
          doggos: dogs.message
        })
      )
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Doggos!</h1>
        <SearchBox 
          doggoSearchText={this.state.doggoSearchText}
          onSearchInputChange={this.onSearchInputChange}
          fetchDoggos={this.fetchDoggos}
        />
        <div className="doggos">
          {
            this.state.doggos.map(doggo => (
              <img className="doggo" src={doggo} key={doggo} alt={doggo} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
