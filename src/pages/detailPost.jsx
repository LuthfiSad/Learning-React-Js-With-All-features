import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogDetail } from "../services/blog.service";
import { deleteBlog } from "../services/blog.service";


export default function DetailPostPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});

  const handleRemove = (id) => {
    deleteBlog(id).then((res) => {
      alert(res);
      navigate("/posts");
    });
  }

  useEffect(() => {
    getBlogDetail(id).then((res) => {
      if (!res) {
        alert("Post Tidak ditemukan");
        navigate("/posts");
      }
      setPost(res);
    });
  }, [id]);

  return (
    <div className="w-full flex justify-center">
      <div className="flex mt-5 flex-1 flex-col max-w-sm shadow-md p-2 rounded bg-slate-100">
      <div className="flex justify-center items-center min-w-[200px]">
        <img
          className="w-full"
          src="https://source.unsplash.com/200x140/?tech"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <h2 className="font-bold mt-2 text-xl">{post.title}</h2>
        <p className="h-full text-sm">{post.body}</p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => confirm("Are you sure?") && handleRemove(id)}
            className="text-xs py-2 px-3 rounded bg-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
