import Header from "../components/Header";
import { blogs } from "../faker/data";
import BlogItem from "../components/BlogItem";

const Blog = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h2 className="text-center">our blog</h2>
          </div>
        </div>
        {blogs.map((item, index) => {
          return <BlogItem item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Blog;
