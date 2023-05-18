import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import css from './App.module.css';

class App extends Component {
  state = {
    query: '',
    isLoading: false,
  };

  handleQuery = query => {
    this.setState({
      query,
      // isLoading: true,
    });
  };

  handleLoadingComplete = () => {
    this.setState({ isLoading: false, });
  }

  render() {
    const { query, isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleQuery} isLoading={isLoading} />
        <ImageGallery
          query={query}
          isLoading={isLoading}
          onLoadingComplete={this.handleLoadingComplete}
        />
      </div>
    );
  }
}

export default App;
