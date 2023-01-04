import { Component } from "react";

class ImageGalleryItem extends Component {
  render() {
    const {id, webformatURL } = this.props;

    return (
      <li className="gallery-item" key={id}>
        <img src={webformatURL} alt={id} />
      </li>
    )
  };
};

export default ImageGalleryItem;