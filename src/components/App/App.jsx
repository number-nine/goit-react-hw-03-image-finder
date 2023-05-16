import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
// import ImageGalleryItem from 'components/ImageGalleryItem';

class App extends Component {
  state = {
    query: '',
  };

  handleQuery = async query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleQuery} />
        <ImageGallery query={this.state.query} />
          {/* <ImageGalleryItem /> */}
        {/* </ImageGallery> */}
      </>
    );
  }
}

export default App;
