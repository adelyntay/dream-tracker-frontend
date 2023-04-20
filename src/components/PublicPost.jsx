import { useState, useEffect } from "react";

export default function Wall() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/posts/public", {
          headers: {
            Authorization: `bearer ${token}`,
          },
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

  const publicPosts = posts?.filter(post => post.is_public);

  return (
    <>
      {publicPosts && (
      <ul>
        {publicPosts.map(post => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
      )}
    </>
  );
}