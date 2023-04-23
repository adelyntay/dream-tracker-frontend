import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeletePost";

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
            <li key={post._id}>
              <Link to={`/posts/${post._id}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>{new Date(post.date).toLocaleDateString()}</p>
              </Link>
          {/*<DeleteButton id={post._id} delPost={setPosts} /> */} 
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
