import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

function Home({ children }) {
  return (
    <main className="kasa-home">
      <Banner />
      <Gallery />
    </main>
  );
}

export default Home;
