import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate"

export default function Wall() {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 5;
  const ref = useRef(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(`${backendUrl}/posts/public`, {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          if(isMounted) {
          setPosts(data);
          }
        } else {
          throw new Error("Failed to fetch posts.");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    }
  }, []);

  const publicPosts = posts?.filter((post) => post.is_public);
  const pageCount = Math.ceil(publicPosts.length / postsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
    ref.current.scrollTo(0, 0);
  };

  const displayPosts = publicPosts
    .slice(pageNumber * postsPerPage, (pageNumber + 1) * postsPerPage)
    .map((post) => (
      <div className="w-[25rem]">
        <div key={post._id} className="border-2 border-pink rounded-md p-2 mb-2">
          <Link to={ `/posts/${post._id}/comment`}>
            <h2 className="card-title text-orange pb-4">{post.title}</h2>
            <p className="text-center">{post.body}</p>
            <p className="text-right text-sm">{new Date(post.date).toLocaleDateString()}</p>
          </Link>
        </div>
      </div>
    ));

  return (
    <>
      {displayPosts && (
        <div>
          <ul className="grid col-start-2" ref={ref}>{displayPosts}</ul>
          <ReactPaginate 
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"btn-group"}
            previousLinkClassName={"previous_page bg-blue-500 "}
            nextLinkClassName={"next_page"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      )}
    </>
  );
}







