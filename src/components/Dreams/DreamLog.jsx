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
        <div key={post._id} className="flex flex-col border">
        <Link to={`/posts/${post._id}`}>
          <h2>Title: {post.title}</h2>
          <p>Sleep Quality: {post.quality}</p>
          <p>{new Date(post.date).toLocaleDateString()}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
