import CardYoutube from "../components/Fragments/CardYoutube";


export default function YoutubePages() {
  return (
    <div>
      <h1 className="py-3 text-xl">Youtube Page</h1>
      <hr />
      <CardYoutube time={7.12} title={"Title 1"} desc={"Desc 1"}/>
      <CardYoutube time={5.12} title={"Title 2"} desc={"Desc 2"}/>
      <CardYoutube time={9.12} title={"Title 3"} desc={"Desc 3"}/>
      <CardYoutube time={3.12} title={"Title 4"} desc={"Desc 4"}/>
      <CardYoutube time={6.12} title={"Title 5"} desc={"Desc 5"}/>
    </div>
  )
}
