import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";

const H1 = (...props: any) => {
  return <h1>hello 3</h1>;
};

const components = {
  h2: H1,
  h3: H1,
  h4: H1,
  h5: H1,
};

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Component", Component);
  return (
    <MDXProvider components={components}>
      <Component />
    </MDXProvider>
  );
}

export default MyApp;
