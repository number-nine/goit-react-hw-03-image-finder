import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, image }) => {
  return (
    <li className="gallery-item">
      <img src={src} alt={alt} data-image={image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
