import {HashRouter, Routes, Route} from "react-router-dom";
import {Menu} from "./menu/Menu";
import {Home} from "./home/Home";
import {Blog} from "./blog/Blog";
import {Profile} from "./profile/Profile";

function App() {
  return (
    <HashRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
