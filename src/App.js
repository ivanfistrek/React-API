import React, {Component} from 'react';
import Contacts from './components/contacts'

    class App extends Component {

      state = {
        contacts: []
      }

      componentDidMount(){
        fetch('https://api.nasa.gov/planetary/apod?api_key=zDAa3X6szgPZWXDOxWMmuMcEpzMVaftKilbO0Al7')
        .then(res => res.json())
        .then((data) => {
          this.setState({contacts: data })
        })
        .catch(console.log)
      }

      render () {
        return (
          <Contacts contacts={this.state.contacts} />
        );
      }
    }

export default App;
