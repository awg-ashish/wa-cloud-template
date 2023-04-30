import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Whatsapp Template</title>
      </Head>
      <main>
        <Sidebar />
      </main>
    </>
  );
};
export default Home;
