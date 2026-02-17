export default function LogoButton({ onClick, variant = "center" }) {
  const handleClick = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`logo-button-wrapper ${variant}`}>
      <button
        type="button"
        className="logo-button"
        onClick={handleClick}
        role="button"
        aria-label="Go back / Open intro"
      >
        <img
          src="/dragonlogo.png"
          alt="Dragon logo"
          className="logo-icon"
        />
      </button>
    </div>
  );
}
