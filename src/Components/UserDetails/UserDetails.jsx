import { useLoaderData, useNavigate } from "react-router-dom";
const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const { id, title, body } = user;
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">User: {id}</h2>
      <h3 className="text-2xl font-bold text-blue-800">Title: {title}</h3>
      <p className="text-lg font-medium text-green-800">{body}</p>
      <button
        onClick={handleGoBack}
        className="bg-lime-600 rounded-lg p-2 text-lg font-semibold"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
