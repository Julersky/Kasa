import "./Home.scss";
import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

function Home({ children }) {
  useEffect(() => {
    document.title = "Accueil";
  }, []);
  return (
    <main className="kasa-home">
      <Banner />
      <Gallery />
    </main>
  );
}

export default Home;
