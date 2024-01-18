import Button from "./components/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <>
      <Container>
        <div className="h-screen w-full flex justify-center items-center">
          <Button
          // children={"click here"}
          // className={"w-96"}
          // variant={"outline"}
          >
            Button
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;
