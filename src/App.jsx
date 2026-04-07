import "./App.css";
import { inventory } from "./constants/inventory.js";
import { bestSellingTv } from "./constants/inventory.js";

import {
  getVerkochteTelevisies,
  getIngekochteTelevisies,
  getTeVerkopen,
} from "./helpers/storeInfo.jsx";

import check from "./assets/check.png";
import minus from "./assets/minus.png";

import { getTvName, getTvPrice, getTvGroottes } from "./helpers/getTvInfo.jsx";

function App() {
  // Roep de functie aan wanneer het component laadt
  console.log(inventory);
  console.log(bestSellingTv);

  function logButton(button) {
    console.log(button);
  }

  return (
    <div>
      <header>
        <h1>Tech it easy dashboard</h1>
      </header>
      <main>
        <section>
          <h2>Verkoopoverzicht</h2>
          <div className="verkoopsoverzichten">
            <article className="verkoopsoverzichtItem groen">
              Verkochte producten
              <div>{getVerkochteTelevisies(inventory)}</div>
            </article>
            <article className="verkoopsoverzichtItem blauw">
              Ingekochte producten
              <div>{getIngekochteTelevisies(inventory)}</div>
            </article>
            <article className="verkoopsoverzichtItem geel">
              Te verkopen producten
              <div>
                {getTeVerkopen(
                  getIngekochteTelevisies(inventory),
                  getVerkochteTelevisies(inventory),
                )}
              </div>
            </article>
          </div>
        </section>
        <section>
          <h2>Best verkopende televisie</h2>
          <div className="bestVerkopendeTv">
            <img
              src={bestSellingTv.sourceImg}
              alt="Best selling TV"
              className="bestVerkopendeTvAfbeelding"
            />
            <div className="bestVerkopendeTvInfo">
              <div className="bestVerkopendeTitel">
                {getTvName(bestSellingTv)}
              </div>
              <div className="bestVerkopendePrice">
                {getTvPrice(bestSellingTv)}
              </div>
              <div>{getTvGroottes(bestSellingTv)}</div>
              <div className="bestVerkopendeTvOpties">
                <span>
                  <img src={check} className="checkicon" alt="Check" />
                  wifi
                </span>
                <span>
                  <img src={minus} className="checkicon" alt="Check" />
                  speech
                </span>
                <span>
                  <img src={check} className="checkicon" alt="Check" />
                  hdr
                </span>
                <span>
                  <img src={check} className="checkicon" alt="Check" />
                  bluetooth
                </span>
                <span>
                  <img src={check} className="checkicon" alt="Check" />
                  ambilight
                </span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <button onClick={() => logButton("Meest verkocht eerst")}>
            Meest verkocht eerst
          </button>
          <button onClick={() => logButton("Goedkoopste eerst")}>
            Goedkoopste eerst
          </button>
          <button onClick={() => logButton("Meest geschikt voor sport eerst")}>
            Meest geschikt voor sport eerst
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
