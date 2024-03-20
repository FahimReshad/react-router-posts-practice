/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleShowMore = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="border border-red-300 rounded-xl text-center space-y-3 p-4 flex flex-col">
      <h1 className="text-lg font-bold">User: {id}</h1>
      <h2 className="flex-grow text-lime-600 font-bold">Title: {title}</h2>
      <h4 className="text-teal-600 font-medium">{body}</h4>
      <Link to={`/user/${id}`}>
        <button className="font-bold">Show Details</button>
      </Link>
      <button
        onClick={handleShowMore}
        className="bg-green-800 rounded-xl p-2 hover:bg-green-950 text-white font-bold"
      >
        Show More
      </button>
    </div>
  );
};

export default Post;
