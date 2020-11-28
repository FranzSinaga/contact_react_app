import Axios from "axios";
import React, { Component } from "react";
import { Button, Table, Modal, Form, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { addContact } from "../redux/contactSlice";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPlus,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].id === nameKey) {
      return myArray[i];
    }
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      list: [],
      show: false,
      modalForm: null,
      isFormValid: false,
      contact: {
        firstName: null,
        lastName: null,
        age: null,
        photo: "",
      },
      editId: null,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  handleClose() {
    this.setState((prevState) => ({
      contact: {
        ...prevState.contact,
        age: null,
        firstName: null,
        lastName: null,
        photo: "",
      },
      editId: null,
      show: false,
      modalForm: null,
    }));
  }

  handleOpen(action, id) {
    id = id || null;
    this.setState({ show: true });
    if (action === "create") {
      this.setState({ modalForm: "create" });
    } else if (action === "edit") {
      this.setState({ modalForm: "edit" });
      let dataById = search(id, this.state.list);
      let photoUrl = dataById.photo;
      if (dataById.photo === "N/A") {
        photoUrl = "";
      }
      this.setState((prevState) => ({
        contact: {
          ...prevState.contact,
          age: dataById.age,
          firstName: dataById.firstName,
          lastName: dataById.lastName,
          photo: photoUrl,
        },
        editId: id,
      }));
    } else {
      console.log("Something Wrong");
    }
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState((prevState) => ({
      contact: { ...prevState.contact, [name]: value },
    }));
  }

  validateForm() {
    let contact = this.state.contact;
    if (
      contact.firstName == null ||
      contact.firstName.length <= 3 ||
      contact.lastName == null ||
      contact.lastName.length <= 3 ||
      contact.age == null ||
      contact.age < 0
    ) {
      this.setState({ isFormValid: false });
      return false;
    } else {
      this.setState({ isFormValid: true });
      return true;
    }
  }

  addContact(e) {
    let contact = this.state.contact;
    if (this.state.contact.photo === "") {
      contact = {
        firstName: this.state.contact.firstName,
        lastName: this.state.contact.lastName,
        age: this.state.contact.age,
      };
    }
    console.log(this.validateForm());
    if (this.validateForm()) {
      Axios.post("https://simple-contact-crud.herokuapp.com/contact", contact)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          e.preventDefault();
          console.log(err);
        });
    } else {
      e.preventDefault();
      console.log("Something Wrong");
    }
  }

  editContact(e) {
    let contact = this.state.contact;
    if (this.state.contact.photo === "") {
      contact = {
        firstName: this.state.contact.firstName,
        lastName: this.state.contact.lastName,
        age: this.state.contact.age,
      };
    }
    if (this.validateForm()) {
      Axios.put(
        `https://simple-contact-crud.herokuapp.com/contact/${this.state.editId}`,
        contact
      )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          e.preventDefault();
        });
    } else {
      e.preventDefault();
      console.log("Something Wrong");
    }
  }

  deleteContact(id) {
    Axios.delete(
      `https://simple-contact-crud.herokuapp.com/contact/${id}`
    ).then((res) => {
      window.location.reload();
    });
  }

  componentDidMount() {
    console.log(this.state.isLoading);
    Axios.get("https://simple-contact-crud.herokuapp.com/contact").then(
      (res) => {
        this.setState({
          isLoading: false,
          list: res.data.data,
          show: false,
        });
        this.props.addContact(res.data.data);
      }
    );
  }
  render() {
    return (
      <div className="mt-5">
        <h4>Contact List</h4>
        <p>Save your contact for free</p>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.modalForm === "create" ? "Add new " : "Update"}{" "}
              contact
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={
                this.state.modalForm === "create"
                  ? this.addContact
                  : this.editContact
              }
            >
              <Form.Row>
                <Form.Group as={Col} md="5">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    value={this.state.contact.firstName}
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    onChange={this.handleChange}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Minimum 3 character
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} md="5">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    value={this.state.contact.lastName}
                    onChange={this.handleChange}
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Minimum 3 character
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} md="2">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    value={this.state.contact.age}
                    onChange={this.handleChange}
                    name="age"
                    type="number"
                    placeholder="Age"
                    min={1}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Photo url (Optional)</Form.Label>
                <Form.Control
                  value={this.state.contact.photo}
                  onChange={this.handleChange}
                  name="photo"
                  type="text"
                  placeholder="Enter photo url"
                />
              </Form.Group>
              <Button
                variant="light"
                type="submit"
                className="float-right save-color"
                disabled={this.state.isFormValid ? "true" : "false"}
              >
                {this.state.modalForm === "create" ? "Save " : "Edit"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Button
          variant="outline-primary"
          className="btn-add-contact"
          onClick={() => this.handleOpen("create")}
        >
          <FontAwesomeIcon icon={faPlus} /> Add Contact
        </Button>

        <Table borderless hover>
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.isLoading ? (
              <tr>
                <td colSpan={4}>
                  <center>
                    <FontAwesomeIcon icon={faSpinner} spin size="3x" />
                  </center>
                </td>
              </tr>
            ) : (
              this.state.list.map((e) => {
                return (
                  <tr key={e.id}>
                    <td className="photo-td">
                      <Avatar
                        size="35"
                        name={e.firstName}
                        src={e.photo}
                        round={true}
                      />
                    </td>
                    <td>
                      {e.firstName} {e.lastName}
                    </td>
                    <td>{e.age}</td>
                    <td>
                      <Button
                        variant="light"
                        className="btn-add-contact"
                        onClick={() => this.handleOpen("edit", e.id)}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </Button>
                      <Button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deleteContact(e.id)}
                        variant="light"
                        className="btn-add-contact"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contactList: state.contactList,
});

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
