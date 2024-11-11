import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/hook";
import { addPost, deletePost, fetchPosts } from "../Reducers/DataReducer";
import "../App.css"; // Import the CSS file

function Post() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.data.posts);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAddPost = () => {
    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: title || "New Post",
      body: description || "This is a new post",
    };
    dispatch(addPost(newPost));
    setTitle("");
    setDescription("");
  };

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: "4%",
          padding: "10px",
          backgroundColor: "#242424",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          border: "1px solid #242424",
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px" }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px" }}
        />
        <button
          onClick={handleAddPost}
          style={{ padding: "10px", borderRadius: "5px", cursor: "pointer" }}
        >
          Add Post
        </button>
      </div>

      <div style={{ padding: "10px", margin: "0 auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "30px",
            borderStyle: "hidden",
            boxShadow: "0 0 0 1px #666",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr>
              <th className="table-header">Number</th>
              <th className="table-header">Title</th>
              <th className="table-header">Description</th>
              <th className="table-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="table-cell">{post.id}</td>
                <td className="table-cell">{post.title}</td>
                <td className="table-cell">{post.body}</td>
                <td className="table-cell">
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Post;
