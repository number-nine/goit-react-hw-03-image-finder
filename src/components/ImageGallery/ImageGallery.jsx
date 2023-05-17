import { Component } from 'react';
// import PropTypes from 'prop-types';

// import getPictures from 'controllers/api-controller';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';

class ImageGallery extends Component {
  state = {
    currentData: 'hello',
    request: { query: '', page: 1 },
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('Gallery update');

    if (this.state.request.page !== prevState.request.page) {
      console.log('page changes');
      this.setState({ currentData: { data: this.state.request.page } });
    } else if (this.state.currentData !== prevState.currentData) {
      console.log('data changes');
    } else {
      console.log('somethig changes but not page and data - query, new or same but new');
    }

    // if (this.state.request.query)

    if (this.state.request.query !== this.props.query) {
      console.log('if prop comes set query to state and page to 1');

      this.setState(prevState => ({
        request: {
          ...prevState.request,
          query: this.props.query,
        },
      }));
    }
  }

  componentDidMount() {
    console.log('Gallery mount');
  }

  componentWillUnmount() {
    console.log('Gallery unmount');
  }

  handleLoadMore = () => {
    // this.setState({ currentData: 'request' });
    this.setState(prevState => ({
      request: {
        ...prevState.request,
        page: prevState.request.page + 1,
      },
    }));
    console.log('LoadMore handler');
  };

  // // getPictures(this.state.request);
  // didComponentMount(prevProps, prevState) {
  //   // if (prevState !== this.props.query) {

  //   // }

  //   console.log(`imageGallery did mount`);

  // }

  render() {
    return (
      <>
        <ul className="gallery">
          <ImageGalleryItem />
        </ul>
        <Button onLoadMore={this.handleLoadMore} />
      </>
    );
  }
}

export default ImageGallery;

// ImageGallery.propTypes = {
//   children: PropTypes.node.isRequired,
// };
