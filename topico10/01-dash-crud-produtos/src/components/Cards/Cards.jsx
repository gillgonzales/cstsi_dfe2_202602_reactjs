import { Link } from "react-router";
import thumbImage from "../../assets/img/cards-thumbnail.jpg"

export const Cards = ({ item }) => {
    const srcImage = item?.media?.length?item.media[0].source:thumbImage;

  return (
    <div className="card-container">
      <Link className="card-link" to={`/produto/${item.id}`}>
        <div className="card-main">
          <h3>{item.nome}</h3>
          <div className="card-image">
            <img src={srcImage} alt={item.nome} />
          </div>
          <h4>
            R$ {item.preco}
          </h4>
          <p>
            {item.descricao}
          </p>
        </div>
      </Link>
    </div>
  );
};
