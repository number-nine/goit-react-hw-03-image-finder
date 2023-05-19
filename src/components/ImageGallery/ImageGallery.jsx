import { Component } from 'react';
import PropTypes from 'prop-types';

import getPictures from 'controllers/api-controller';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import css from './ImageGallery.module.css';

// const INITIAL_STATE = {
//   currentData: null,
//   query: '',
//   page: 1,
//   total: 0,
//   perPage: 12,
//   canLoadMore: false,
// };

class ImageGallery extends Component {
  state = {
    currentData: null,
    query: '',
    page: 1,
    total: 0,
    perPage: 12,
    canLoadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    // console.log(`--------start didUpdate:`);
    // console.log(`prevProps request: ${prevProps.query}`);
    // console.log(`prevProps isLoading: ${prevProps.isLoading}`);
    // console.log(`currentProps: request: ${this.props.query}`);
    // console.log(`currentProps: isLoading: ${this.props.isLoading}`);
    // console.log(`--------`);
    // console.log(`prevState request: ${prevState.query}`);
    // console.log(`prevState page: ${prevState.page}`);
    // console.log(`currentState request: ${this.state.query}`);
    // console.log(`currentState page: ${this.state.page}`);

    if (
      prevState.page === this.state.page &&
      prevState.currentData === this.state.currentData
    ) {
      const { hits, total } = await getPictures({
        page: 1,
        query: this.props.query,
        perPage: this.state.perPage,
      });

      this.setState({
        currentData: hits,
        query: this.props.query,
        page: 1,
        total,
        canLoadMore: total > this.state.perPage,
      });

      this.props.onLoadingComplete();

      return;
    }

    if (this.state.page > prevState.page) {
      const { hits } = await getPictures({
        page: this.state.page,
        query: this.state.query,
        perPage: this.state.perPage,
      });
      this.setState({
        currentData: [...this.state.currentData, ...hits],
        canLoadMore:
          this.state.total - this.state.perPage * this.state.page > 0,
      });

      this.props.onLoadingComplete();

      return;
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.props.onLoadingStart();
  };

  render() {
    return (
      <>
        <ul className={css.ImageGallery}>
          {this.state.currentData &&
            this.state.currentData.map(picture => (
              <ImageGalleryItem
                key={picture.id}
                src={picture.webformatURL}
                alt={picture.tags}
                image={picture.largeImageURL}
              />
            ))}
        </ul>
        {this.state.canLoadMore && (
          <Button
            onLoadMore={this.handleLoadMore}
            isLoading={this.props.isLoading}
          />
        )}
        {this.props.isLoading && <Loader />}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
