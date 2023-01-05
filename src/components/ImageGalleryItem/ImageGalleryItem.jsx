import { Component } from "react";

class ImageGalleryItem extends Component {
  render() {
    const {id, webformatURL, largeImageURL, onImgClick } = this.props;

    return (
      <li className="gallery-item" key={id}>
        <img src={webformatURL} alt={id} onClick={() => {onImgClick(largeImageURL, id)}}/>
      </li>
    )
  };
};

export default ImageGalleryItem;