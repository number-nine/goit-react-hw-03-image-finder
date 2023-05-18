import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import css from './App.module.css';

class App extends Component {
  state = {
    query: '',
  };

  handleQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleQuery} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;
