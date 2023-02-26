import "./Gallery.scss";
import Thumb from "../Thumb/Thumb";




function Gallery() {

  let housings = require('../../datas/log.json')

  return (
    <section className="gallery">
      <ul className="kasa-housing-list">
        {housings.map((housing) => (
          <Thumb
            key={housing.id}
            id={housing.id}
            cover={housing.cover}
            title={housing.title}
          />
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
