import React, { Component } from 'react'

export default class SearchImage extends Component {

    state = {
        search: ''
    }

    handleSearch = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.getSearchQuery(this.state.search);
    };

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="input-field blue">
                            <input 
                                id="search" 
                                type="search"
                                name="search"
                                placeholder="Enter a keyword to search images"
                                onChange={this.handleSearch}
                                value={this.state.search}
                            />
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
}
