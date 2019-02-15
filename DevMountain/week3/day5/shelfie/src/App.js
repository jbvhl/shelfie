import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('/api/products').then(res => {
        console.log(res.data)
        this.setState({
            products: res.data
        });
    });
}



  render() {
    return (
      <div className="App">
        <Dashboard products={this.state.products}/>
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
