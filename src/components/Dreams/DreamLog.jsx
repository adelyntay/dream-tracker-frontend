import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate"

export default function DreamLog () {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const dreamsPerPage = 5;

  useEffect(() => {
    async function fetchPosts() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`/api/posts`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchPosts();
  }, []);

  const pageCount = Math.ceil(posts.length / dreamsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayDreams = posts
    .slice(pageNumber * dreamsPerPage, (pageNumber + 1) * dreamsPerPage)
    .map((post) => (
      <div className="w-[25rem]">
        <div key={post._id} className="border-2 border-purple rounded-md p-2 mb-2">
        <Link to={`/posts/${post._id}`}>
            <h2 className="card-title pb-4 text-pink">Title: {post.title}</h2>
            <p>Type: {post.type}</p>
            <p>Sleep Quality: {post.quality}</p>
            <p className="text-right text-sm">{new Date(post.date).toLocaleDateString()}</p>
          </Link>
        </div>
      </div>
    ));

  return (
    <>
      {displayDreams && (
        <div>
          <ul className="grid col-start-2">{displayDreams}</ul>
          <ReactPaginate 
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"btn-group"}
            previousLinkClassName={"previous_page bg-purple-500 "}
            nextLinkClassName={"next_page"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      )}
    </>
  );
}







