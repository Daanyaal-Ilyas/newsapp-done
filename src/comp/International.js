import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import {  db } from '../fireconfige';
export default function Home() {
  const [posts, setPost] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  })
  return (
    <div className="feed">
      {posts.map((post) => {
        return (
          <div className="post">
            <div className="Headerp">
              <div className="titlep">
                <h1> {post.title}</h1>
              </div>
            </div>
            <div className="containerp"> {post.posts} </div>
          </div>
        );
      })}
    </div>
  );
}