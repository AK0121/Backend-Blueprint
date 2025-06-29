"use client";

import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex py-20 flex-wrap gap-11 justify-center">
      {posts.map((post) => (
        <div key={post.id} className="bg-[#a3e9e955] w-64 h-64 p-4 rounded-2xl flex flex-col items-center gap-4 hover:scale-95 hover:shadow-xl hover:shadow-gray-700 transition-all duration-150 ease-out">
        <h1 className="text-xl">{post.title}</h1>
        <p className="text-sm">{post.content}</p>
        <div className="post-btns-container flex gap-6 justify-center">
          <button className="button h-12 w-12 rounded-full bg-white">❣️</button>
          <button className="button h-12 w-12 rounded-full bg-white">💬</button>
          <button className="button h-12 w-12 rounded-full bg-white">👎</button>
        </div>
      </div>
      ))}

    </div>
  );
};

export default Posts;
