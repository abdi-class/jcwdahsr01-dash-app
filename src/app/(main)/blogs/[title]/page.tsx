import * as React from "react";

interface IDetailBlogPageProps {
  params: Promise<{
    title: string;
  }>;
}

const DetailBlogPage: React.FunctionComponent<IDetailBlogPageProps> = async (
  props
) => {
  const params = await props.params;
  return (
    <div>
      <h1 className="text-4xl">DETAIL PAGE</h1>
      <span>{params.title}</span>
    </div>
  );
};

export default DetailBlogPage;
