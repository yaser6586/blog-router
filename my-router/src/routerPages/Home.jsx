import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

import { getImageUrl } from "../component/photofunc";

function Home() {
  const postList = useLoaderData();

  return (
    <div className="wrapper max-w-full">
      <div className="md:flex ">
        <div className="left basis-1/4 bg-slate-200 border-r-cyan-200 border-2  hidden md:block">
          left
        </div>
        <div className="middle  basis-1/2 px-20 bg-gray-200 border-2  ">
          <div className="posts">
            {postList &&
              postList.map((posts) => <Post key={posts.id} posts={posts} />)}
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
    <>
      <div
        className="card lg:card-side bg-gray-300 shadow-xl my-2"
        key={posts.id}
      >
        <figure>
          <img src={getImageUrl(posts)} alt="not found" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{posts.title}</h2>
          <p>{posts.title}</p>
          <div className="card-actions justify-end">
            <a href={`${posts.id}`}>
              <button className="btn btn-primary">detail</button>
            </a>
          </div>
        </div>
      </div>
    </>
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
