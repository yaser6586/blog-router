import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Blog() {
  const [title, setTilt] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body };
    if (title && body) {
      fetch("http://localhost:5000/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(blog),
      });
    } else {
      return alert("you should fill the boxes");
    }
    setSubmitted(!submitted);
  }
  if (submitted && title && body) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="wrapper max-w-full">
      <div className="flex justify-content-center align-item-center mt-20">
        <div className="mx-auto w-96 ">
          <h1 className="text-center">add new post </h1>
          <form className="flex-col  align-content-between justify-content-between ">
            <div className="text-center m-5">
              <input
                type="text"
                placeholder="title"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setTilt(e.target.value)}
              />
            </div>
            <div className="text-center m-5">
              <textarea
                className="textarea textarea-primary w-80"
                placeholder="body"
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center m-5">
              <button
                className="btn btn-outline btn-primary"
                onClick={handleSubmit}
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
