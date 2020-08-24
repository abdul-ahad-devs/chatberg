import React, { Component, useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Button,
        Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '.././logo.png'; 

const InterestDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle caret className="jumbotron-btn">
          -select-
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Cars</DropdownItem>
          <DropdownItem>Dating</DropdownItem>
          <DropdownItem>Hiking</DropdownItem>
          <DropdownItem>Movies</DropdownItem>
          <DropdownItem>Books</DropdownItem>
          <DropdownItem></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
          this.setState({
              isModalOpen: !this.state.isModalOpen
          })
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto navbar-brand" href="/"><img src={logo} height="31" width="40" alt='Chatberg' />Chatberg</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav navbar >
                            <NavItem> 
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/ourmission'><span className="fa fa-briefcase fa-lg"></span> Our Mission</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/features'><span className="fa fa-th-list fa-lg"></span> Features</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/usersfeedback'><span className="fa fa-comments fa-lg"></span> Users Feedback</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/downloads'><span className="fa fa-download fa-lg"></span> Downloads</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button onClick={this.toggleModal} className="nav-btn">
                                        <span className="fa fa-user-plus fa-lg"></span>Register
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-8">
                                <h1>Welcome to Chatberg</h1>
                                <p>Chatberg is an Omeagle based platform to entertain yourselves talking with strangers</p>
                            </div>
                        </div>

                        <div className="row row-header">
                                <Button onClick={this.toggleModal} className="jumbotron-btn">
                                    <span className="fa fa-comments fa-lg"></span>Start Chat
                                </Button>

                                <Button onClick={this.toggleModal} className="jumbotron-btn">
                                    <span className="fa fa-search fa-lg"></span>Explore Us
                                </Button>

                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal} className="modal-header">
                        Register
                    </ModalHeader>
                    <ModalBody className="nav-btn">
                        <Form>
                            <FormGroup>
                                <Label htmlFor="email">Enter your email address for verification:</Label>
                                <Input type="email" id="email" name="email" innerRef={input => this.email = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Tell us about your interests:</Label>
                                <InterestDropdown />
                            </FormGroup>
                            <FormGroup check>
                                <Label htmlFor="trustus">
                                <Input type="checkbox" id="trustus" name="trustus" innerRef={input => this.trustus = input}></Input>
                                Do you trust Chatberg?</Label>
                            </FormGroup>
                                <Button type="submit" value="submit" className="jumbotron-btn">Register</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;