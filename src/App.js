import React, { Component, Fragment } from 'react';
import './App';
import NavbarItem from './components/navbar-item/navbar-item';
import CreateContactItem from './components/create-contact-item/create-contact-item';
import ContactList from './components/contact-list/contact-list';
import Home from './components/home/home';
import NoteList from './components/note-list/note-list';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from './components/page404/page404';
import Test from './components/test/test';
import Fav from './components/FavoriteContactList/favoriteContactList';
import BounceLoader from "react-spinners/BounceLoader"


class App extends Component {

  state = {
    statusDelete: false,
    editContact: {},
    contacts: [],
    notes: [
      {
        title: "First note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "Second note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "Third note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "Fourth note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        title: "Fifth note",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ],
    loading: false
  }

  Title = "";
  constructor(){
    super();
    this.Title = "Component App";
  }

  componentDidMount() {
    console.log("Finish render!");
  }

  componentWillUnmount() {
    console.log("Remove ", this.state.name)
    console.log("Send request for remove contact with id: ", this.state.id)
  } 

  URL_Contacts = "https://contactbook999-6d1d2-default-rtdb.firebaseio.com/contacts.json";

  getContacts() {
    fetch(this.URL_Contacts, { method: "GET" })
      .then(data => {
        return data.json();
      })
      .then(response => {
        console.log("Contact from firebase: ", response["-MW_Pz5qGeEtJeh334Mx"]);
        this.setState({
          contacts: response["-MW_Pz5qGeEtJeh334Mx"]
        })
      })
      .catch(error => {
        console.log("Error: ", error);
      })
  }

  saveChanges(Collection, URL) {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify(Collection)
    })
      .then(data => {
        console.log("Collection: ", data);
      })
      .catch(error => {
        console.log("Error: ", error);
      })
  }

  addContact = (newContact) => {
    var tempContacts = [];
    
    if (this.state.contacts != null) {
      tempContacts = this.state.contacts.slice();
    }

    newContact.id = tempContacts.length;
    tempContacts.push(newContact);
    
    this.saveChanges(tempContacts, this.URL_Contacts);
    this.setState({
      contacts: tempContacts
    })
  }

  updateContact = (contact) => {
    var tempContacts = [];
    if (this.state.contacts != null) {
      tempContacts = this.state.contacts.slice();
      var foundIndex = tempContacts.findIndex(x => x.id == contact.id);
      tempContacts[foundIndex] = contact;
    }

    this.setState({
      contacts: tempContacts,
      isEditMode: false,
      editContact: {
        id: 0,
        name: '',
        number: '',
        image: 0,
        gender: '',
        isFavorite: true
      }
    })
  }

  removeContact = (contact) => {
    if (this.state.contacts != null) {
      var foundIndex = this.state.contacts.findIndex(x => x.id == contact.id);
      this.state.contacts.splice(foundIndex, 1);
      this.setState({
        statusDelete: true
      });
    }
  }

  editContact = (contact) => {
    this.setState({
      isEditMode: true,
      editContact: contact
    })
  }

  componentDidMount() {
    this.getContacts();
  }

  showOrHideLoader = () => {
    this.setState({loading: !this.state.loading})
  }
  
  render() {
    return (
      <Fragment>
        <button onClick={this.showOrHideLoader} className="btn btn-info">Start loader</button>
        {/* <h2>{this.Title}</h2> */}
        <Router>
          <NavbarItem></NavbarItem>
          <div className="container-fluid">
            <Switch>

              <Route
                path="/"
                exact
                render={() => <Home></Home>}
              ></Route>

              <Route
                path="/contact-list"
                exact
                render={() => <ContactList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts.slice()}></ContactList>}
              ></Route>

              <Route
                path="/add-contact"
                exact
                render={() => <CreateContactItem editContact={this.state.editContact} isEditMode={this.state.isEditMode} addContact={this.addContact}></CreateContactItem>}
              ></Route>

              <Route
                path="/test/:id"
                exact
                component={Test}
              ></Route>

              <Route
                path="/favorite"
                exact
                component={() => <Fav contacts={this.state.contacts} filter={u => u.isFavorite}></Fav>}
              ></Route>

              <Route
                path="*"
                render={() => <Error404></Error404>}
              ></Route>

              {/* <NoteList notes={this.state.notes}></NoteList> */}

            </Switch>
          </div>
        </Router>
        <div className="loader">
          <BounceLoader color="red" loading={this.state.loading} size={25}></BounceLoader>
        </div>
      </Fragment>
    )
  }
}

export default App;