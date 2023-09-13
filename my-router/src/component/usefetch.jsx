import { useEffect, useState } from "react";
// i assign custom hook to fetch the data from json file but in new way i can use userProviderData hook and
function useFetch(url) {
  const [blogPost, setBlogPost] = useState([{}]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let closeFetch = false;
    setTimeout(() => {
      fetch(url)
        .then((blog) => {
          if (!blog.ok) {
            throw Error("fetch have not been successful");
          }
          if (!closeFetch) {
            return blog.json();
          }
        })
        .then((postList) => {
          setBlogPost(postList);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
      return () => (closeFetch = true);
    }, 1000);
  }, [url]);
  // this custom hook returned this three state
  return { blogPost, error, loading };
}

export default useFetch;
