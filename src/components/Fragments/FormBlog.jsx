import { useEffect, useState } from "react";

export default function FormBlog({ handleSend, modeUpdate, cancelUpdate, id, posts }) {
  const initialState = {
    title: "",
    body: "",
  };
  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = handleSend(e, data);
    if (res) {
      setData(initialState);
    }
  };

  useEffect(()=>{
    if(id){
      const getDataId = posts.find((post) => post.id === id);
      setData({
        title: getDataId.title,
        body: getDataId.body
      })
    }
  }, [id])

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col p-3">
      <h1 className="text-2xl text-center font-bold mb-3">
        {modeUpdate ? "Update" : "Add"} Post
      </h1>
      <label htmlFor="title" className="mb-2 font-bold text-lg text-gray-400">
        Title
      </label>
      <input
        type="text"
        onChange={(e) => setData({ ...data, title: e.target.value })}
        value={data.title}
        id="title"
        name="title"
        className="border rounded-md py-2 px-3 border-gray-600 text-grey-400"
        placeholder="add title"
      />
      <label
        htmlFor="blog"
        className="mb-2 font-bold text-lg text-gray-400 mt-5"
      >
        Blog Content
      </label>
      <textarea
        value={data.body}
        id="blog"
        onChange={(e) => setData({ ...data, body: e.target.value })}
        name="blog"
        className="border h-40 rounded-md py-2 px-3 border-gray-600 text-grey-400"
        placeholder="add blog content"
      />
      <div className="mt-5 flex gap-3 justify-end">
        {modeUpdate && (
          <button
            onClick={() => {
              cancelUpdate();
              setData(initialState);
            }}
            type="button"
            className="border border-red-400 text-red-400 rounded py-2 px-4 mt-5"
          >
            Batal
          </button>
        )}
        <button className="border border-blue-400 text-blue-400 rounded py-2 px-4 mt-5">
          Simpan
        </button>
      </div>
    </form>
  );
}
