import React, { Fragment } from 'react';
import ContactItem from '../contact-item/contact-item';

const FavContactList = ({ contacts }) => {
    var ContactsTemplate = contacts.filter(c => c.isFavorite == true);

    if (contacts !== null) {

        ContactsTemplate.map(item => {
                return (<ContactItem 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    number={item.number}
                    gender={item.gender}
                    image={item.image}
                    isFavorite={item.isFavorite}
                ></ContactItem>)
        })
    }
    return (
        <Fragment>
            <div className="row">
                {ContactsTemplate} {/*contactItem collection */}
            </div>
        </Fragment>
    )
}

// class ContactList extends Comment{
//     state ={
//         contacts: this.props.contacts
//     }
// }

export default FavContactList