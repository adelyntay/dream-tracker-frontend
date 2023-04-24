import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DreamLog () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts () {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/posts", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
          console.log(data)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div key={post._id}>
        <Link to={`/posts/${post._id}`}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.type}</p>
          <p>{post.quality}</p>
          <p>{post.date}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
