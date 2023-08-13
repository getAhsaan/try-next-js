import Link from "next/link";

// const blogs = [
//   {
//     id: 1,
//     year: 2016,
//     title: "title 1",
//   },
//   {
//     id: 2,
//     year: 2017,
//     title: "title 2",
//   },
//   {
//     id: 3,
//     year: 2018,
//     title: "title 3",
//   },
//   {
//     id: 4,
//     year: 2019,
//     title: "title 4",
//   },
// ];

const BlogsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const blogs = await res.json();

  return (
    <div className="container mx-auto">
      {blogs.map(({ id, body, title }) => (
        <div key={id} className="block border border-blue-500 p-2 m-2">
          <h2 className="text-2xl">
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link href={`/blogs/${id}`}>
            <button className="px-2 py-1 bg-blue-500 text-white ">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
