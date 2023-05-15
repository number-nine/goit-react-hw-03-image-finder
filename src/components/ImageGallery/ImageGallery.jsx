import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {};

  render() {
    <ul class="gallery">{this.props.children}</ul>;
  }
}

export default ImageGallery;


ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};