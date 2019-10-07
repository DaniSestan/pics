import React from 'react';
import ImageCard from "./ImageCard";
import './ImageList.css';

class ImageList extends React.Component {
    
    images(){
        return this.props.images.map((image) => {
            return <ImageCard image={image} key={image.id} />
        });
    }
    
    render() {
        return (
            <div className="image-list">
                {this.images()}
            </div>
        )
    }
}

export default ImageList;