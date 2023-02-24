import "../../styles/dist/main.scss";
import "./About.scss";
import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import data from "../../datas/about";

function About() {
  useEffect(() => {
    document.title = "Kasa - A propos";
  }, []);
  return (
    <main className="about-main">
      <Banner />
      <div className="container">
        {data.map((data) => {
          return (
            <div key={data.id}>
              <Collapse
                title={data.title}
                content={data.content}
                id={data.id}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default About;
