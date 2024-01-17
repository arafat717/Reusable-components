import Button from "./components/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <>
      <Container>
        <div className="h-screen w-full flex justify-center items-center">
          <Button
            children={"click here"}
            className={"bg-red-600"}
            outline={true}
          ></Button>
        </div>
      </Container>
    </>
  );
}

export default App;
