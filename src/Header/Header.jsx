import './Header.css';

const leftNav = ['Bundle Set', 'Lips', 'Eyes', 'Brows', 'Nails'];

const rightNav = [
  { type: 'text', label: "Dee's top picks" },
  { type: 'text', label: "Dee's rewards" },
  {
    type: 'icon',
    name: 'search-outline',
    label: 'Search',
  },
  { type: 'icon', name: 'person-circle-outline', label: 'Profile' },
  { type: 'icon', name: 'bag-outline', label: 'Bag' },
];

function Header() {
  return (
    <>
      <div className="header_hat">
        <p className="header_hat-text">
          <span className="header_hat-span">Join Dee's rewards</span> to earn
          points on purchases
        </p>
      </div>
      <header className="header">
        <nav className="buttons">
          {leftNav.map((label) => (
            <button key={label} className="button" type="button">
              {label}
            </button>
          ))}
        </nav>

        <h1 className="header_title">Dee's Store</h1>

        <nav className="buttons">
          {rightNav.map((item) => (
            <button
              key={item.label}
              className={`button ${item.className ?? ''}`}
              type="button"
              aria-label={item.label}
            >
              {item.type === 'icon' ? (
                <ion-icon name={item.name} />
              ) : (
                item.label
              )}
            </button>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Header;
