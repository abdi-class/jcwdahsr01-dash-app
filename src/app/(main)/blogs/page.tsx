"use client";
import * as React from "react";
import axios from "axios";
import Link from "next/link";

interface IAppProps {}

const BlogsPage: React.FunctionComponent<IAppProps> = (props) => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    try {
      // Call data from API
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2025-09-29&sortBy=publishedAt&apiKey=3fc668c4412748048ee5e3c1fed61fc5"
      );
      console.log(res.data.articles);

      // Store data to local state(useState data)
      setData(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData(); // execute function get data when first page rendered
  }, []);

  const printData = () => {
    return data.map((value: any, index) => {
      return (
        <div key={`${value}-${index}`} className="p-2 border rounded-md shadow">
          <Link href={`/blogs/${value.title}`}>
            <h2 className="font-bold">{value.title}</h2>
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Blogs Page</h1>
      <div>{printData()}</div>
    </div>
  );
};

export default BlogsPage;
