import { useState } from "react";

function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  const offers = [
    {
      name: "Basic",
      price: {
        anually: 199.99,
        monthly: 19.99,
      },
      info: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      name: "Professional",
      price: {
        anually: 249.99,
        monthly: 24.99,
      },
      info: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      name: "Master",
      price: {
        anually: 399.99,
        monthly: 39.99,
      },
      info: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  function toggleClicked() {
    document.activeElement.blur();
    setIsMonthly((oldIsMonthly) => !oldIsMonthly);
  }

  function enterPressed(event) {
    if (event.key === "Enter") {

      toggleClicked()
    }
  }

  return (
    <main className="main">
      <h1>Our Pricing</h1>
      <div className="main__options">
        <div className="main__options__option">Annually</div>
        <div
          tabIndex={"1"}
          className={`main__options__toggle ${isMonthly && "clicked"}`}
          onClick={toggleClicked}
          onKeyDown={enterPressed}
        >
          <div className="main__options__toggle__circle"></div>
        </div>
        <div className="main__options__option">Monthly</div>
      </div>

      <div className="main__offers">
        {offers.map((offer) => (
          <div key={offer.name} className="main__offers__offer">
            <h2>{offer.name}</h2>
            <div className="main__offers__offer__price">
              <div className="main__offers__offer__price__sign">$</div>
              <div className="main__offers__offer__price__number">
                {isMonthly ? offer.price.monthly : offer.price.anually}
              </div>
            </div>
            <div className="main__offers__offer__info">
              {offer.info.map((infoPiece) => (
                <div
                  key={offer.name + infoPiece}
                  className="main__offers__offer__info__info-piece"
                >
                  {infoPiece}
                </div>
              ))}
            </div>
            <button>LEARN MORE</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
