import { Component } from "react";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { imglist, onImgItemClick } = this.props;

    return (
      <ul className="gallery">
        {imglist.map(({id, webformatURL, largeImageURL}) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onImgClick={onImgItemClick}
          />))}
      </ul> 
    )
  };
};

export default ImageGallery;