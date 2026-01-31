import './Hot.css';

function Hot({ card }) {
  return (
    <div
      className="showoff card"
      style={{ backgroundImage: `url(${card.img})` }}
    >
      <div className="showoff_overlay">
        <h2 className="card_title">{card.title}</h2>
        <button className="btn-primary card_button">Shop now</button>
      </div>
    </div>
  );
}

export default Hot;
