import {HashRouter, Routes, Route} from "react-router-dom";
import {Menu} from "./menu/Menu";
import {Home} from "./home/Home";
import {Blog} from "./blog/Blog";
import {Profile} from "./profile/Profile";
import {BlogPost} from "./blog/blogpost/BlogPost";

function App() {
  return (
    <HashRouter>
      <Menu />

      <Routes>
            <Route path="/" element={<Home />} />

            {/*Nested routes*/}
            <Route path="/blog" element={<Blog />} >
                <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/profile" element={<Profile />} />

            <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
