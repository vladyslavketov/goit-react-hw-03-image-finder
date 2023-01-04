import { Component } from "react";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { imglist } = this.props;

    return (
      <ul className="gallery">
        {imglist.map(({id, webformatURL}) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
          />))}
      </ul> 
    )
  };
};

export default ImageGallery;