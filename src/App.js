import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import {Menu} from "./menu/Menu";
import {Home} from "./home/Home";
import {Blog} from "./blog/Blog";
import {Profile} from "./profile/Profile";
import {BlogPost} from "./blog/blogpost/BlogPost";
import {LoginPage} from "./loginPage/LoginPage";
import {Logout} from "./logout/Logout";
import {AuthProtectedRoute, AuthProvider} from "./auth/auth";
import {usePosts} from "./hooks/usePosts";
import {PostError} from "./messaggeComponent/postError/PostError";
import {PostLoading} from "./messaggeComponent/postLoading/PostLoading";
import {PostEmpty} from "./messaggeComponent/postEmpty/PostEmpty";

function App() {

    const {
        error,
        loading,
        allPost
    } = usePosts();

    return (
        <HashRouter>
            <AuthProvider>
                <Menu/>

                <Routes>
                    <Route path="/" element={<Home/>}/>

                    {/*Nested routes*/}
                    <Route path="/blog" element={<Blog/>}>
                        <Route path=":slug" element={
                            <BlogPost
                                error={error}
                                loading={loading}
                                allPost={allPost}
                                onError={() => <PostError/>}
                                onLoading={() => <PostLoading/>}
                                onEmpty={() => <PostEmpty/>}
                            />
                        }
                        />
                    </Route>

                    <Route path="/loginPage" element={<LoginPage/>}/>

                    <Route
                        path="/logout"
                        element={
                            <AuthProtectedRoute>
                                <Logout/>
                            </AuthProtectedRoute>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <AuthProtectedRoute>
                                <Profile/>
                            </AuthProtectedRoute>
                        }
                    />

                    <Route path="*" element={<h1>Not found</h1>}/>
                </Routes>
            </AuthProvider>
        </HashRouter>
    );
}

export default App;
