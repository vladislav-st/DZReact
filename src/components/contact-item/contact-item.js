import React, { Component, Fragment } from 'react';
import './contact-item.css';

class ContactItem extends Component {

    state = {
        id: this.props.id,
        name: this.props.name,
        number: this.props.number,
        image: this.props.image,
        gender: this.props.gender,
        isFavorite: this.props.isFavorite
    }

    setRandomImage = () => {
        var randmomAvatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            image: randmomAvatar
        })
    }

    setIsFavorite = () => {

        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.props.gender,
            isFavorite: !this.state.isFavorite
        }
        this.props.updateContact(contact);

        this.setState({
            isFavorite: !this.state.isFavorite
        })
    }

    delete = () => {
        console.log(this.state.id + 'to delete')
        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.props.gender,
            isFavorite: !this.state.isFavorite
        }
        this.props.removeContact(contact);
    }

    edit = () => {
        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.props.gender,
            isFavorite: !this.state.isFavorite,
            isEdit: this.state.isEdit
        }
        this.props.editContact(contact);
    }

    render() {
        const { name, number, image, gender, isFavorite } = this.state
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`
        var star = `far fa-star star`
        if (isFavorite == true) {
            star = `fa fa-star star`
        }
        return (
            <Fragment>
                <div className="contcat-card-cont col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card contact-card">
                        <img className="card-img-top" src={image_URL} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{number}</li>
                        </ul>
                        <div className="card-body card-footer">
                            <button onClick={this.setRandomImage} className="btn btn-info">Random image</button>
                            <div>
                                <i className="fas fa-edit fa-2x" onClick={this.edit}></i>
                                <i className={star} onClick={this.setIsFavorite}></i> <i onClick={this.delete} className="trash fas fa-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactItem;