import React, { Component, useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Button,
    Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from '.././logo.png'; 
import { NavLink } from 'react-router-dom';
import WelcomeToChatberg from './WelcomeToChatberg';
import Userchat from './ChatboxComponent';
import { Link } from 'react-scroll';

const InterestDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
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
          isModalOpen: false,
          isChatOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleChat = this.toggleChat.bind(this);
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

      toggleChat() {
        this.setState({
            isChatOpen: !this.state.isChatOpen,
            isModalOpen: !this.state.isModalOpen
        })
      }

    render() {

        return(
            <div className="">
                <div >
                   
                    <Navbar dark expand="md">
                        <div className="container sticky">
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand className="mr-auto navbar-brand" href="/"><img src={logo} height="30" width="45" alt='Chatberg' />CHATBERG</NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar >
                                <Nav navbar >
                                <NavItem> 
                                    <NavLink className="nav-link" to='home' ><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='ourmission' smooth={true} duration={1000}><span className="fa fa-briefcase fa-lg"></span> Our Mission</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link"  to='features' smooth={true} duration={1000}><span className="fa fa-th-list fa-lg"></span> Features</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="downloads" smooth={true} duration={1000}><span className="fa fa-download fa-lg"></span> Downloads</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='usersfeedback' smooth={true} duration={1000}><span className="fa fa-comments fa-lg"></span> Users Feedback</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='contactus' smooth={true} duration={1000}><span className="fa fa-address-card fa-lg"></span> Contact Us</Link>
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
                </div>



                {/* Jumbotron Header */}
                
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-8">
                                <WelcomeToChatberg className="navbar-brand"/>
                                
                            </div>
                        </div>

                        <div className="row row-header">
                                <Button onClick={this.toggleModal} className="jumbotron-btn" size="lg">
                                    <span className="fa fa-comments fa-lg"></span>Start Chat
                                </Button>

                                <Button className="jumbotron-btn" size="lg">
                                    <span className="fa fa-search fa-lg"></span>Explore Us
                                </Button>

                        </div>
                    </div>
                </Jumbotron>

                {/* This is the modal for registration  */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal} className="modal-header">
                        Register Yourself 
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
                                <NavLink to='/mychatbox'  >
                                    <Button className="jumbotron-btn" size="sm" onClick={this.toggleChat}>
                                        <span className="fa fa-user-plus fa-sm"></span>
                                        Register
                                    </Button>
                                </NavLink>
                        </Form>
                    </ModalBody>
                </Modal>
                

            </div>
        );
        
        
    }
}

export default Header;