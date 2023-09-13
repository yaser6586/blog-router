import { useState } from "react";
import { Navigate, useLoaderData, useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [isDelete, setIsDelete] = useState(false);
  const postList = useLoaderData();
  if (isDelete) {
    return <Navigate to="/home" />;
  }
  function handleClick(e) {
    e.preventDefault();
    if (id > 2) {
      fetch("http://localhost:5000/blog/" + id, {
        method: "DELETE",
      });
    }
    setIsDelete(true);
  }
  return (
    <>
      <div className="wrapper flex  text-center mt-20 w-auto">
        <div className="flex-col text-center m-auto ">
          <div>{id}</div>
          <div className="my-20 px-48 text-2xl">{postList.title}</div>
          <p className="my-20 px-48">{postList.body}</p>
          <button
            className="btn btn-outline btn-error my-20"
            onClick={handleClick}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}

export default PostDetail;

export async function detailLoader({ params }) {
  const { id } = params;
  const res = await fetch(" http://localhost:5000/blog/" + id);

  return res.json();
}
