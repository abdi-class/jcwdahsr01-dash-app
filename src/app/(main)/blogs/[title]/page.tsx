import * as React from "react";
import axios from "axios";

interface IDetailBlogPageProps {
  params: Promise<{
    title: string;
  }>;
}

const getDetailbyTitle = async (title: string) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?title=${title}`
    );
    console.log(res.data);

    return res.data[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

const DetailBlogPage: React.FunctionComponent<IDetailBlogPageProps> = async (
  props
) => {
  const params = await props.params;
  const detail = await getDetailbyTitle(params.title);
  return (
    <div>
      <h1 className="text-4xl">DETAIL PAGE</h1>
      <h2 className="text-2xl font-bold">{detail.title}</h2>
      <p>{detail.body}</p>
    </div>
  );
};

export default DetailBlogPage;
