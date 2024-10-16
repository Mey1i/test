import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./pages/users/Index";
import NewUser from "./pages/new-user/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/newuser" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
