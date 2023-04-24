import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DeletePost from "../components/Dreams/DeletePost"

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchPost() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`/api/posts/${id}`, {
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
    <div>
      <h2>Title: {post.title}</h2>
      <p>Description: {post.body}</p>
      <p>Type: {post.type}</p>
      <p>Sleep Quality: {post.quality}</p>
      <p>Created on: {new Date(post.date).toLocaleDateString()}</p>
    </div>
    <Link to={`/posts/${post._id}/edit`}>
    <button className="rounded-md bg-orange px-11 mb-1">Edit</button></Link>
    <br/>
    <DeletePost id={post._id} delPost={setPost}/>
    
  
  </>
  );
}
