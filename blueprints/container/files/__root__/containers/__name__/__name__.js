import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
};

class <%= pascalEntityName %> extends Component {
  render() {
    return (
    );
  }
}

<%= pascalEntityName %>.propTypes = propTypes;

const mapStateToProps = (state) => ({
});

const actions = {
};

export default connect(
  mapStateToProps,
  actions,
)(<%= pascalEntityName %>);
