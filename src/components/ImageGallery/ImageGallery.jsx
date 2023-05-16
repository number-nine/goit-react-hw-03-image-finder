import { Component } from 'react';
// import PropTypes from 'prop-types';

import getPictures from 'controllers/api-controller';
import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    something: 'hello',
    request: { query: '', page: 1 },
  };

  // getPictures(this.state.request);
  didComponentMount(prevState, nextState) {
    if (prevState !== this.props.query) {

    }

  }

  render() {
    return (
      <ul class="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;

// ImageGallery.propTypes = {
//   children: PropTypes.node.isRequired,
// };
