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

  handleQuery = query => {
    this.setState({ query });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('App update');
  }

  componentDidMount() {
    console.log('app mount');
  }

  componentWillUnmount() {
    console.log('app unmount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate app');
  //   return this.state.query !== nextState.query
  // }

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
