import { MDXProvider } from "@mdx-js/react";
import type { NextPage } from "next";
import Hello from "./hello.mdx";

const Headline = (...props: any) => {
  return <h1>hello 2</h1>;
};

const components = {
  h2: Headline,
  h3: Headline,
  h4: Headline,
  h5: Headline,
};

const Home: NextPage = () => {
  return (
    <MDXProvider components={components}>
      <Hello />
    </MDXProvider>
  );
};

export default Home;
