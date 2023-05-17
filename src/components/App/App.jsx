import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

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

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleQuery} />
        <ImageGallery query={this.state.query} />
      </>
    );
  }
}

export default App;
