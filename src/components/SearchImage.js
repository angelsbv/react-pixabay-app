import React, { Component } from 'react'
import '../styles/Materialize.min.module.css'

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
                <div styleName="nav-wrapper">
                    <form onSubmit={this.handleFormSubmit}>
                        <div styleName="input-field grey darken-1">
                            <input
                                id="search"
                                type="search"
                                name="search"
                                placeholder="Introduzca una palabra clave para b&uacute;scar imagenes"
                                onChange={this.handleSearch}
                                value={this.state.search}
                            />
                            <label 
                                styleName="label-icon" 
                                htmlFor="search"
                            >
                                <i 
                                    className="material-icons"
                                    styleName="material-icons"
                                >
                                search
                                </i>
                            </label>
                            <i 
                                className="material-icons"
                                styleName="material-icons"
                            >
                                close
                            </i>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
}
