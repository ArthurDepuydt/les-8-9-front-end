import "./App.css";
import { inventory } from "./constants/inventory.js";
import { bestSellingTv } from "./constants/inventory.js";

import {
  getVerkochteTelevisies,
  getIngekochteTelevisies,
  getTeVerkopen,
} from "./helpers/storeInfo.jsx";

import showOutcomeInConsole from "./constants/oefenbestand.js";

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

  showOutcomeInConsole(inventory);

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
          <h2>Best verkochte televisie</h2>
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
          <h2>Onze merken</h2>
          <ul>
            {inventory.map((tv) => {
              return <li key={tv.type}>{tv.brand}</li>;
            })}
          </ul>
        </section>
        <section className="buttons">
          <button
            onClick={() => {
              inventory.sort((a, b) => {
                return b.sold - a.sold;
              });
              console.log(inventory);
            }}
          >
            Meest verkocht eerst
          </button>
          <button
            onClick={() => {
              inventory.sort((a, b) => {
                return a.price - b.price;
              });
              console.log(inventory);
            }}
          >
            Goedkoopste eerst
          </button>
          <button
            onClick={() => {
              inventory.sort((a, b) => {
                return b.refreshRate - a.refreshRate;
              });
              console.log(inventory);
            }}
          >
            Meest geschikt voor sport eerst
          </button>
          <button
            onClick={() => {
              inventory.sort((x, y) => {
                inventory.map((tv) => {
                  let sizes = tv.availableSizes.sort((a, b) => {
                    return b - a;
                  });
                  return inventory;
                });
                return y.availableSizes[0] - x.availableSizes[0];
              });
              console.log(inventory);
            }}
          >
            Grootste schermgroottes eerst
          </button>
        </section>
        <section>
          <h2>Al onze televisies</h2>
          {inventory.map((tv) => {
            return (
              <div className="bestVerkopendeTv">
                <img
                  src={tv.sourceImg}
                  alt="Best selling TV"
                  className="bestVerkopendeTvAfbeelding"
                />
                <div className="bestVerkopendeTvInfo">
                  <div className="bestVerkopendeTitel">{getTvName(tv)}</div>
                  <div className="bestVerkopendePrice">{getTvPrice(tv)}</div>
                  <div>{getTvGroottes(tv)}</div>
                  <div className="bestVerkopendeTvOpties">
                    {tv.options.map((optie) => {
                      if (optie.applicable == true) {
                        return (
                          <span key={optie.name + tv.type}>
                            <img
                              src={check}
                              className="checkicon"
                              alt="Check"
                            />
                            {optie.name}
                          </span>
                        );
                      } else {
                        return (
                          <span>
                            <img
                              src={minus}
                              className="checkicon"
                              alt="Check"
                            />
                            {optie.name}
                          </span>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
