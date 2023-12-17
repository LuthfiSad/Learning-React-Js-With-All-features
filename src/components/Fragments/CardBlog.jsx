export default function CardBlog({
  title,
  body,
  handleRemove,
  id,
  getId,
  goToDetail,
}) {
  return (
    <div className="flex flex-1 flex-col sm:flex-row sm:max-w-[600px] sm:min-w-[600px] shadow-md p-2 rounded bg-slate-100">
      <div className="flex justify-center items-center min-w-[200px]">
        <img
          className="w-full"
          src="https://source.unsplash.com/200x140/?tech"
          alt=""
        />
      </div>
      <div className="sm:px-3 flex flex-col justify-between w-full">
        <h2
          className="font-bold mt-3 sm:mt-0 text-xl cursor-pointer hover:text-blue-500"
          onClick={() => goToDetail(id)}
        >
          {title.substring(0, 20)}
        </h2>
        <p className="h-full text-sm">{body.substring(0, 100)}</p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => getId(id)}
            className="text-xs py-2 px-3 rounded bg-yellow-300"
          >
            Edit
          </button>
          <button
            onClick={() => confirm("Are you sure?") && handleRemove(id)}
            className="text-xs py-2 px-3 rounded bg-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
