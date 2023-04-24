import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Wall() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/posts/public", {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          throw new Error("Failed to fetch posts.");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const publicPosts = posts?.filter((post) => post.is_public);

  return (
    <>
    
      {publicPosts && (
        <ul>
        
          {publicPosts.map((post) => (
            <div className="flex flex-col justify-center border ">
            <li key={post._id}>
              <Link to={`/posts/${post._id}/comment`}>
                <h2>Title: {post.title}</h2>
                <p>Description: {post.body}</p>
                <p>{new Date(post.date).toLocaleDateString()}</p>
              </Link>
            </li>
            </div>
          ))}
          
        </ul>
      )}

    </>
  );
}
