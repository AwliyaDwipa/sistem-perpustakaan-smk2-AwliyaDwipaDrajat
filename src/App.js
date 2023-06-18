import { Routes, Route  } from "react-router-dom";
import Landing from "./landing-page/landing-page";


function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </>
  );
}

export default App;
