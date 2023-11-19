import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { blogs } from "../faker/data";

const Single = () => {
  const { slug } = useParams();
  const singlePost = blogs.find((data) => data.slug === slug);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="w-100 my-3" src={singlePost.photo} alt="" />
            <h2>{singlePost.title}</h2>
            <p>{singlePost.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
