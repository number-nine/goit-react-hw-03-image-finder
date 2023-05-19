// import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({ onLoadMore, isLoading }) => {
  return (
    <button
      type="button"
      className={css.Button}
      onClick={onLoadMore}
      disabled={isLoading}
    >
      Load more
    </button>
  );
};

export default Button;
