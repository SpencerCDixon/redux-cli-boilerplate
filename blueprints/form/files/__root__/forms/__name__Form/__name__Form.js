import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from 'components/Input';
import css from './<%= pascalEntityName %>Form.css';

const propTypes = {
};

class <%= pascalEntityName %>Form extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Client Name</label>
          <Field name="firstName" component={Input} type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

<%= pascalEntityName %>Form.propTypes = propTypes;
<%= pascalEntityName%>Form = reduxForm({
  form: '<%= pascalEntityName %>Form'
})(<%= pascalEntityName%>Form);

export default <%= pascalEntityName %>Form;
