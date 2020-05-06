import React, { Component } from 'react'
import axios from 'axios';
import SearchImage from './components/SearchImage';
import Image from './components/Image';
import './App.css';

export default class App extends Component {

  state = {
    query: '',
    images: []
  }

  getSearchQuery = async (q) => {
    this.setState({
      query: q
    }, () => this.getImages())
  }

  getImages = async () => {
    const { query } = this.state;
    const url = `https://pixabay.com/api/?key=16400944-70b96e265948292189e2196fb&q=${query}`;
    const res = await axios.get(url);
    this.setState({images: res.data.hits});
  }

  render() {
    return (
      <div className="container">
        <SearchImage getSearchQuery={this.getSearchQuery} />
        <div className="grid-container">
          {
            this.state.images.map(image => (
              <Image key={image.id} image={image} />
            ))
          }
        </div>
      </div>
    )
  }
}
