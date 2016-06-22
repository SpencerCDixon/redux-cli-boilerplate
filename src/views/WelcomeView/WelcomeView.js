import React, { PropTypes } from 'react';
import css from './WelcomeView.css';

function WelcomeView() {
  return (
    <div className={css.container}>
      <div className={css.introText}>
        <h1 className={css.welcome}>
          Welcome To Redux CLI Boilerplate!
        </h1>
        <h3 className={css.subTitle}>
          Happy coding
        </h3>
      </div>
    </div>
  );
}

export default WelcomeView;
