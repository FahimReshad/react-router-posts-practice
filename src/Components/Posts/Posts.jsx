import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className="space-y-4">
            <h3 className="font-bold">Posts: {posts.length}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;