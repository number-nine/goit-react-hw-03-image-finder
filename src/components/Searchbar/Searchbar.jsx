import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        if (this.isQueryValid()) {
            this.props.onSubmit(this.state.query.trim());
            this.clearQuery();
            return;
        }
        Notify.failure('Enter valid query');
    }

    isQueryValid = () => {
        return this.state.query.trim() !== '' ? true : false 
    }

    clearQuery = () => {
        this.setState({ query: ''});
    }

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
