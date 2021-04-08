import React, { Component, Fragment } from 'react';
import './create-contact-item.css';

class CreateContactItem extends Component {

  state = {
    id: 0,
    name: '',
    number: '',
    image: 0,
    gender: 'women',
    ErrorMessage: ''
  }

  handlerChangeInput = (e) => {
    var target = e.target;
    this.setState({
      [target.name]: target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log("Form submit")
    if (this.isValid()) {
      this.setState({
        ErrorMessage: ""
      })
      var newContact = {
        id:0,
        name: this.state.name,
        number: this.state.number,
        image: this.state.image,
        gender: this.state.gender
      };

      this.props.addContact(newContact);
    }
    else {
      this.setState({
        ErrorMessage: "Please, Enter all fields!"
      })
    }
  }

  isValid = () => {
    if (this.state.name === '' || this.state.number === '') {
      return false;
    }
    else {
      return true;
    }
  }

  render() {
    console.log(this.state)
    const { isEdit, ErrorMessage, name, number, image, gender } = this.state
    return (
      <Fragment>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label>Contact name*</label>
            <input  type="text" className="form-control" name="name" onChange={this.handlerChangeInput} placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label>Contact number*</label>
            <input type="text" className="form-control" name="number" onChange={this.handlerChangeInput} placeholder="Enter number" />
          </div>
          <div className="form-group">
            <label>Contact number image</label>
            <input type="number" max="99" min="0" name="image" onChange={this.handlerChangeInput} className="form-control" placeholder="Enter image number" />
          </div>
          <div className="form-group">
            <label>Contact gender</label>
            <select name="gender" onChange={this.handlerChangeInput} className="form-control">
              <option value="women">Women</option>
              <option value="men">Men</option>
            </select>
          </div>
          <p className="text-danger">{ErrorMessage}</p>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Fragment>
    )
  }
}

export default CreateContactItem;