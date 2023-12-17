import { useEffect, useState } from "react";
import CardBlog from "../components/Fragments/CardBlog";
import { deleteBlog, getBlogs, updateBlog } from "../services/blog.service";
import FormBlog from "../components/Fragments/FormBlog";
import { addBlog } from "../services/blog.service";
import { useNavigate } from "react-router-dom";

export default function BlogPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [modeUpdate, setModeUpdate] = useState(false);
  const [id, setId] = useState(0);

  const handleGetBlogs = () => {
    getBlogs().then((res) => {
      setPosts(res);
    });
  };

  const getId = (id) => {
    setId(id);
    setModeUpdate(true)
  }

  const handleSend = (e, item) => {
    e.preventDefault();
    if (!item.title) {
      alert("Title Kosong");
      return;
    }
    if (!item.body) {
      alert("Blog Content Kosong");
      return;
    }
    const sameTitle = posts.find((post) => post.title === item.title);
    if (sameTitle && (sameTitle.id !== id)) {
      alert("Title sudah ada");
      return;
    }
    if (id) {
      const data = {
        userId: 1, id,
        ...item
      }
      updateBlog(data).then((res)=>{
        handleGetBlogs();
        cancelUpdate()
        alert(res);
      })
    } else {
      const data = {
        userId: 1,
        id: new Date().getTime(),
        ...item
      }
      addBlog(data).then((res) => {
        handleGetBlogs();
        alert(res);
      });    
    }
    return true;
  };

  const handleRemove = (id) => {
    deleteBlog(id).then((res) => {
      alert(res);
      handleGetBlogs();
    });
  };

  const cancelUpdate = () => {
    setModeUpdate(false);
    setId(0);
  }

  const goToDetail = (id) => {
    navigate(`/detail-post/${id}`);
  }

  useEffect(() => {
    handleGetBlogs();
  }, []);
  return (
    <>
      <h1 className="py-3 text-xl">Blog Page</h1>
      <hr className="py-2" />
      <h2 className="mb-2 mx-4 font-bold drop-shadow text-xl">Blog</h2>
      <div className="max-w-[600px] mb-14 border border-slate-500 shadow-md rounded mx-4">
        <FormBlog handleSend={handleSend} id={id} posts={posts} modeUpdate={modeUpdate} cancelUpdate={cancelUpdate} />
      </div>
      <div className="flex gap-4 flex-wrap justify-between p-4">
        {posts.length > 0 &&
          posts.map((post) => (
            <CardBlog
              key={post.id}
              id={post.id}
              getId={getId}
              handleRemove={handleRemove}
              title={post.title}
              body={post.body}
              goToDetail={goToDetail}
            />
          ))}
        {posts.length === 0 && (
          <div className="m-auto bg-red-600 px-2 rounded text-white">
            No posts found
          </div>
        )}
      </div>
    </>
  );
}
