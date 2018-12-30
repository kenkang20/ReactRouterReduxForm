import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
    renderField(field) {
        // ...field.input
        // onChange={field.input.onChange}
        // onFocus={field.input.onFocus}
        // onBlur={field.input.onBlur}
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    label="Title"
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

function validate(values) {
    const errors = {};

    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title!"
    }

    if (!values.categories) {
        errors.categories = "Enter a categories!"
    }

    if (!values.content) {
        errors.content = "Enter a content!"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostNew);