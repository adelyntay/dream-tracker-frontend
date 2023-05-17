import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DeletePost from "../components/Dreams/DeletePost"
import Navbar from "../components/Navbar/Navbar"

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();
  // const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const backendUrl = "/api";

  useEffect(() => {
    async function fetchPost() {
      try {
        const token = localStorage.getItem("token");
        // const response = await fetch(`/api/posts/${id}`, {
        const response = await fetch(`${backendUrl}/posts/${id}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
    <div className="flex justify-center mr-2 mt-10">
    
    <div className="card w-80 bg-pink px-4 text-black">
    <div className="card body pt-5 m-4">
      <p>Title: {post.title}</p>
      <p>Description: {post.body}</p>
      <p>Type: {post.type}</p>
      <p>Sleep Quality: {post.quality}</p>
      <p>Dream on: {new Date(post.date).toLocaleDateString()}</p>
    </div>
    </div>
  

    <div className="ml-20">
    <img src="https://media.giphy.com/media/Sbqkr1KpRfq1AeZPu8/giphy.gif" width="350" height="260"/>
    </div>
    <br />
    </div>

    <div className="flex justify-center px-2 mt-10">
    <div className="mr-2"><Link to={`/posts/${post._id}/edit`} className="btn border-none bg-orange text-black hover:text-white">Edit</Link></div>
    <div><DeletePost id={post._id} delPost={setPost}/></div>
    </div>

    </>
  );
}
