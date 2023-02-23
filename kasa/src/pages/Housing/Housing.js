import "./Housing.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import housings from "../../datas/logements";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Error from "../../pages/Error/Error";

function Housing() {
  document.title = "Logement Kasa";
  const icon = document.querySelector("head > link:nth-child(5)");
  icon.href = "../../assets/logo.png";

  const housing_id = useParams().id;
  const [idInData, setIdInData] = useState(false);

  //toutes les id
  const allId = housings.map((data) => {
    return data.id;
  });

  useEffect(() => {
    if (allId.includes(housing_id)) {
      setIdInData(true);
    }
  }, [allId, housing_id]);

  if (!idInData) {
    return <Error />;
  }

  const focusedHousing = housings.filter(
    (housing) => housing.id === housing_id
  );
  const equip = focusedHousing[0].equipments;
  const pictures = focusedHousing[0].pictures;

  return (
    <main className="housing-main">
      <div className="housing-carousel">
        <Carousel
          images={pictures.map((pictures) => {
            return pictures;
          })}
        />
      </div>
      <div className="housing-info">
        <div className="housing-description">
          <h1 className="housing-description-title">
            {focusedHousing[0].title}
          </h1>
          <p className="housing-description-location">
            {focusedHousing[0].location}
          </p>
          <section className="housing-description-tags">
            {focusedHousing[0].tags.map((tag, index) => {
              return (
                <span className="tags" key={index}>
                  {tag}
                </span>
              );
            })}
          </section>
        </div>
        <div className="housing-host">
          <section className="housing-host-id">
            <h1 className="housing-host-id-name">
              {focusedHousing[0].host.name}
            </h1>
            <img
              className="housing-host-id-picture"
              src={focusedHousing[0].host.picture}
              alt="Propriétaire"
            />
          </section>
          <section className="housing-host-stars">
            <Rating hostRate={focusedHousing[0].rating} />
          </section>
        </div>
      </div>
      <div className="housing-collapse">
        <section className="collapse-container">
          <Collapse
            title="Description"
            content={focusedHousing[0].description}
          />
        </section>
        <section className="collapse-container">
          <Collapse
            title="Équipements"
            content={equip.map((data, index) => {
              return (
                <p key={index} className="content">
                  {data}
                </p>
              );
            })}
          />
        </section>
      </div>
    </main>
  );
}

export default Housing;
