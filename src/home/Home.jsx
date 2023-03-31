import Footer from "../Footer";
import "./home.css";
import Header from "./Header";
import Enjoy from "./Enjoy";
import Create from "./Create";
import Download from "./Download";
import Watch from "./Watch";
import Frequently from "./Frequently";

const Home = () => {
  return (
    <>
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Create />
      <Frequently />
      <Footer />
    </>
  );
};

export default Home;
