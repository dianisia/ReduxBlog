import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form=group">
        <label>{field.label}</label>
        <input className="form-control"
            type="text"
            {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          label="Post title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

//will be called automatically
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }
//if errors is empty, the form is fine to submit
//if errors has *any* properties, redux forms assumes that form is invalid
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate
})(PostsNew);
