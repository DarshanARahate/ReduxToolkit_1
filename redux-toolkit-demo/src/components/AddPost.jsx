import { useState } from "react";
import { useAddPostMutation } from "../services/jsonApi";

function AddPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [addPost, { isLoading }] = useAddPostMutation();

    const savePost = async () => {
        const response = await addPost({
            title, body, userId: 1,
        });
        console.log(response);
        alert("Post Added");
        setTitle("");
        setBody("");
    };

    return (
        <div>
            <h2>Add Post</h2>
            <input placeholder="Title" value={title} 
                   onChange={(e) => setTitle(e.target.value)}></input>

            <br /> <br />

            <textarea placeholder="Body" value={body}
              onChange={(e) => setBody(e.target.value)} />

            <br /> <br />

            <button onClick={savePost} >
                {isLoading ? "Saving.." : "Add Post"}
            </button>
        </div>
    );
}

export default AddPost;
