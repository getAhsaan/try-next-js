export const metadata = {
  title: "Blogs | Next Hero",
  description: "next hero desc",
};

const SingleBlog = ({ params }) => {
  // const [year, id] = params.segments || [];
  return (
    <div>
      SingleBlog {params.id}
    </div>
  );
};

export default SingleBlog;
