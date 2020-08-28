import React from 'react';
import 'react-chatbox-component/dist/style.css';
import { ChatBox } from 'react-chatbox-component';
import { Button , Modal, ModalHeader, ModalBody } from 'reactstrap';
import img from '../images/feedbacks/acm.jpg';
import "../App.css";
import { Link } from 'react-router-dom';

const messages = [
    {
      "text": "Hello there",
      "id": "1",
      "sender": {
        "name": "Ironman",
        "uid": "user1",
        "avatar": img,
      },
      "style": {
          "backgroundColor": "red"
      }
    },
];

const user = {
    "uid" : "user1"
  }
   
 
class Userchat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChatOpen: true,
            isLoading: false
        }

        this.toggleChat = this.toggleChat.bind(this);
    }

    toggleChat() {
        this.setState({
            isChatOpen: !this.state.isChatOpen
        })
    }

    loadingmsgs() {
        this.setState({
            isLoading: !this.state.isLoading
        })
    }

    renderMessage() {
        return "Someone is typing"
    }


    

   render() {
        return (
           <div className="chatbox">
               <Modal isOpen={this.state.isChatOpen}   size="lg" centered={true} fade={false}>
                   <ModalHeader style={{ display: 'flex'}}>
                        Start Chatting
                        <Button className="nav-btn" size="sm" style={{ marginLeft: '20px',}}><i className="fa fa-plus-circle fa-lg" style={{ marginRight: '5px'}}></i>Create Room</Button>
                        <Link to='/home'  >
                            <Button className="end-chat" color="danger" size="sm" style={{ float: 'right'}}><i className="fa fa-sign-out fa-lg"></i>End Chat</Button>
                        </Link>
                       
                    </ModalHeader>  
                    <ModalBody>
                        <ChatBox 
                            messages={messages} 
                            user={user} 
                            // isLoading={true} 
                            // renderMessage={this.renderMessage}
                            
                        />
                    </ModalBody>

                </Modal>
               
           </div>
        );
    }
}

export default Userchat;
