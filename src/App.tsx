import React, {useState} from 'react';
import './App.scss';
import Header from "./components/header/header";
import Modal from "./components/modal/modal";
import Login from "./components/login/login";

function App() {
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => setShowModal(!showModal)
    return (
    <div className="App">
     <Header toggle={toggleModal} />
        <Modal show={showModal} closeCallback={setShowModal} customClass="custom_modal_class">
            <React.Fragment>
                <Login />
            </React.Fragment>
        </Modal>
    </div>
  );
}

export default App;
