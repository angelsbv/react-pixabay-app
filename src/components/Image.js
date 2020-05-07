import React, { Component } from 'react'
// eslint-disable-next-line
import imageCSS from '../styles/Image.module.css';
// eslint-disable-next-line
import materialize from '../styles/Materialize.min.module.css';

export default class Image extends Component {
    
    state = {
        displayChildren: false
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
                <div 
                    styleName='imageCSS.grid-elem' 
                    onMouseOver={this.handleImgHover} 
                    onMouseOut={this.handleImgHover}
                >
                    <img
                        styleName="materialize.responsive-img" 
                        src={image.webformatURL} 
                        alt={image.tags}
                    />
                    <div 
                        styleName='imageCSS.grid-elem-children'
                        style={{opacity: (this.state.displayChildren ? 1 : 0)}}
                    >
                        <span>
                            <i 
                                className="material-icons"
                                styleName="materialize.material-icons"
                            >
                                thumb_up_alt
                            </i> {image.likes} 
                        </span>
                        <span>
                            <i 
                                className="material-icons"
                                styleName="materialize.material-icons"
                            >
                                comment
                            </i> {image.comments} 
                        </span>
                        <span>
                            <i 
                                className="material-icons"
                                styleName="materialize.material-icons"
                            >
                                visibility
                            </i> {image.views}
                        </span>
                        <a 
                            href={image.webformatURL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            styleName='imageCSS.btn-view-img'
                        >
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
