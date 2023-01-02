import {HashRouter, Routes, Route} from "react-router-dom";
import {Menu} from "./menu/Menu";
import {Home} from "./home/Home";
import {Blog} from "./blog/Blog";
import {Profile} from "./profile/Profile";
import {BlogPost} from "./blog/blogpost/BlogPost";
import {LoginPage} from "./loginPage/LoginPage";
import {Logout} from "./logout/Logout";
import {AuthProvider} from "./auth/auth";

function App() {
  return (
    <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
                <Route path="/" element={<Home />} />

                {/*Nested routes*/}
                <Route path="/blog" element={<Blog />} >
                    <Route path=":slug" element={<BlogPost />} />
                </Route>

                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </AuthProvider>
    </HashRouter>
  );
}

export default App;
