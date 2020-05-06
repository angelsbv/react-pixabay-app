import React, { Component } from 'react'

export default class Image extends Component {
    
    state = {
        displayChildren: false
    }

    componentDidMount(){
        console.log(this.props.image)
    }

    handleImgHover = () => {
        this.setState({
            displayChildren: !this.state.displayChildren
        })
    }

    render() {
        const { image } = this.props;
        return (
            <React.Fragment>
                <div className="grid-elem" onMouseOver={this.handleImgHover} onMouseOut={this.handleImgHover}>
                    <img
                        className="responsive-img" 
                        src={image.webformatURL} 
                        alt={image.tags}
                    />
                    <div 
                        className="grid-elem-children" 
                        style={{opacity: (this.state.displayChildren ? 1 : 0)}}
                    >
                        <span>
                            <i className="material-icons">thumb_up_alt</i> {image.likes} 
                        </span>
                        <span>
                            <i className="material-icons">comment</i> {image.comments} 
                        </span>
                        <span>
                            <i className="material-icons">visibility</i> {image.views}
                        </span>
                        <a 
                            href={image.webformatURL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-view-img"
                        >
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
