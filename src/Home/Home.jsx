import './Home.css';
import Hot from '../Hot/Hot';

const showoffCards = [
  { title: 'Lip Glosses', img: '/images/placeholder_lip_gloss.jpg' },
  { title: 'Eyeshadow', img: '/images/blue_lip.PNG' },
  { title: 'Eyebrows', img: '/images/pink_lip.PNG' },
];

function Home() {
  return (
    <>
      <img
        src="/images/placegolder.jpg"
        alt="Home page display"
        className="home__img"
      />
      <div className="home_showoff">
        {showoffCards.map((card) => (
          <Hot card={card} key={card.title} />
        ))}
      </div>
    </>
  );
}

export default Home;
