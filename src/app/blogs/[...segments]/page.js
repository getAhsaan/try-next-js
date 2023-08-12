export const metadata = {
  title: "Blogs | Next Hero",
  description: "next hero desc",
};

const SingleBlog = ({ params }) => {
  const [year, id] = params.segments || [];
  return (
    <div>
      SingleBlog and {year || new Date().getFullYear()} for {id || 1}
    </div>
  );
};

export default SingleBlog;
