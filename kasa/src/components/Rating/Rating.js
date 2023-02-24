import "../../styles/dist/main.scss";
import fullStar from "../../assets/etoile-pleine.svg";
import emptyStar from "../../assets/etoile-vide.svg";

const Rating = ({ hostRate }) => {
  //Construction d'un Array de 5 éléments qu'on rempli avec les étoiles
  const fullStars = Array(5).fill(
    <img src={fullStar} alt="Etoile pleine" className="fullstar" />
  );
  const emptyStars = Array(5).fill(
    <img src={emptyStar} alt="Etoile vide" className="emptystar" />
  );
  return (
    //Dans un premier temps on fait une difference pour recuperer a partir de quel indice, du tableau de 5 elements (donc indice 0,1,2,3,4), on va récuperer les etoiles pleines(avec slice). Ensuite on fait un map pour creer le nombre d'elements correspondant. Ici si la note est de 4: apres soustraction on determine qu'on recupere le reste du tableau a partir de l'indice 1 (inclus) donc 4 elements
    <div className="stars-container">
      {fullStars.slice(5 - hostRate).map((fullStar, index) => {
        return (
          <span className="stars" key={index}>
            {fullStar}
          </span>
        );
      })}
      {emptyStars.slice(hostRate).map((emptyStar, index) => {
        return (
          <span className="stars" key={index}>
            {emptyStar}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
