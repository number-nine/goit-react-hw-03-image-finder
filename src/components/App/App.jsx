import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import getPictures from 'controllers/api-controller';

import Searchbar from 'components/Searchbar/Searchbar';

class App extends Component {
  state = {
    request: {
      query: '',
      page: 1,
    },
  };

  handleQuery = async query => {
    await this.setState({ request: { query } });
    console.log(this.state.request);
    getPictures(this.state.request);
  };

  render() {
    return <Searchbar onSubmit={this.handleQuery} />;
  }
}

export default App;
