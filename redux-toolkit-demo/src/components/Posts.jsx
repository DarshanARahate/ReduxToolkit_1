import { useGetPostsQuery } from "../services/jsonApi";

function Posts() {
    const { data, error, isLoading } = useGetPostsQuery();

    if (isLoading) return <h2>Loading Posts...</h2>
    if (error) return <h2>Error Loading Posts</h2>

    return (
        <div>
            <h2>Posts </h2>
            {
                data.slice(0, 10).map((post) => ( 
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <hr />    
                    </div>
                ))
            }
        </div>
    );
}

export default Posts;