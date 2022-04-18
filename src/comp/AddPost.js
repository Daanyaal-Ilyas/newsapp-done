import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from '../fireconfige';
import { useNavigate } from "react-router-dom";

export default function AddPost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [posts, setPost] = useState("");

  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const addPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      posts,
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
// inputp stands for input post
  return (
    <div className="AddPost">
      <div className="container">
        <h1>Make a News Post</h1>
        <div className="inputtitle">
          <label> Title:</label>
          <input
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputp">
          <label > Description:</label>
          <textarea
            placeholder="Description"
            onChange={(event) => {
              setPost(event.target.value);
            }}
          />
        </div>
        <button onClick={addPost}> Post News</button>
      </div>
    </div>
  );
}