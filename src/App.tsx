import { useState } from "react";
import Button from "./components/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <Container>
        <div className="h-screen w-full flex justify-center items-center">
          <Button onClick={() => setModal((prev) => !prev)}>open modal</Button>
          <Modal isOpen={modal} onClose={handleModalClose}>
            <Modal.Header>
              <h1>hello form header</h1>
              <Modal.CloseButton></Modal.CloseButton>
            </Modal.Header>
            <p>this is modal this is a modal this is a modal this is a modal</p>
          </Modal>
        </div>
      </Container>
    </>
  );
}

export default App;
