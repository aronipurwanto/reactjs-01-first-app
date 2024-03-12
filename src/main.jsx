import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import Posts, {loader as postsLoader } from "./routers/Posts.jsx";
import NewPost, {action as postAction } from "./routers/NewPost.jsx";
import RootLayout from "./routers/RootLayout.jsx";
import PostDetails, {loader as PostDetailsLoader } from "./components/PostDetails.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <Posts />,
                loader: postsLoader,
                children: [
                    { path: '/create-post', element: <NewPost />, action: postAction },
                    { path: '/:id', element: <PostDetails/>, loader: PostDetailsLoader}
                ],

            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
