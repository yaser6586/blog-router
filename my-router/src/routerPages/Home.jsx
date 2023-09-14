import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

import { getImageUrl } from "../component/photofunc";
import { useEffect, useState } from "react";
import Pagination from "../component/Pagination";

function Home() {
  const postList = useLoaderData();
  const [posts, setPosts] = useState(postList);
  const [isLoading, setIsLoading] = useState(false);
  const postPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    setPosts(postList);
    setIsLoading(false);
  }, []);

  //pagination essential variable

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost + 1);
  // paginate function to add click event when click to page number in pagination menu
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="wrapper max-w-full">
      <div className="md:flex ">
        <div className="left basis-1/4 bg-slate-200 border-r-cyan-200 border-2  hidden md:block">
          left
        </div>
        <div className="middle  basis-1/2 px-20 bg-gray-200 border-2  ">
          <div className="posts">
            {isLoading && <div>loading...</div>}
            {posts && <Post key={posts} posts={currentPosts} />}
          </div>
          <div>
            <Pagination
              totalPosts={posts.length}
              postPerPage={postPerPage}
              paginate={paginate}
            />
          </div>
        </div>
        <div className="right  basis-1/4  bg-slate-200  border-l-cyan-200 border-2 hidden md:block">
          right
        </div>
      </div>
    </div>
  );
}

export default Home;
export function Post({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div
          className="card lg:card-side bg-gray-300 shadow-xl my-2"
          key={post.id}
        >
          <figure>
            <img src={getImageUrl(post)} alt="not found" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.title}</p>
            <div className="card-actions justify-end">
              <a href={`${post.id}`}>
                <button className="btn btn-primary">detail</button>
              </a>
            </div>
          </div>{" "}
        </div>
      ))}
    </div>
  );
}
      
// we cant solve the error of prop type buy import proptype from
// top and use this for component and define the type of prop the Post.propType shouldn't the fist p  capital
Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export async function userLoader() {
  const userData = await fetch("http://localhost:5000/blog/");
  const user = await userData.json();
  return user;
}
