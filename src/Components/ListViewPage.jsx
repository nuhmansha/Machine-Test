import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "./Loading";

const ListViewPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Posts List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link
            to={`/detail/${post.id}`}
            key={post.id}
            className="block p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListViewPage;
