import { useState } from "react";
import Button from "./components/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/modal";

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
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ut, doloremque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut, doloremque!
            </h1>
          </Modal>
        </div>
      </Container>
    </>
  );
}

export default App;
