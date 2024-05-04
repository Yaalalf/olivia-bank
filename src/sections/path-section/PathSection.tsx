"use client";

import Title from "@/components/title/Title";
import "./style/desktop.css";
import "./style/mobile.css";

export default function PathSection() {
  return (
    <section className="PathSection">
      <Title
        title="Excelencia en cada punto"
        description="Enviar dinero nunca antes habia sido tan facil"
        decoration={true}
      />

      <div className="CardContainer">
        <div className="Content">
          <p className="SubTitle">La distancia más corta</p>
          <h3>Su enlace a Cuba </h3>
          <p className="Text">
            Somos un líder confiable en el sector de envíos de remesas a Cuba,
            brindamos servicios seguros y eficientes para ayudar a las personas
            a enviar dinero a nivel nacional.
          </p>

          <button>Conoce Mas</button>
        </div>
        <div className="ImageContainer">
          <div className="Decorator"></div>

          <div className="DecoratorTwo"></div>
          <div className="DecoratorThree"></div>
        </div>
        <div className="DecoratorBottom"></div>

        <div className="Icon"></div>
      </div>

      <div className="CardContainer">
        <div className="Content">
          <p className="SubTitle">Ajustada al mercado</p>
          <h3>Tasa al tiempo</h3>
          <p className="Text">
            Nos enorgullecemos de ofrecer tasas de cambio competitivas, así como
            también comisiones bajas para garantizar que nuestros clientes
            obtengan el máximo valor por su dinero
          </p>

          <button>Conoce Mas</button>
        </div>
        <div className="ImageContainer"></div>
        <div className="DecoratorBottom"></div>
        <div className="Icon"></div>
      </div>
      <div className="CardContainer">
        <div className="Content">
          <p className="SubTitle">La distancia más corta</p>
          <h3>Un proceso transparente </h3>
          <p className="Text">
            Entendemos la importancia de cada remesa. Por eso, nos esforzamos
            para que nuestros clientes puedan enviar y recibir dinero con total
            tranquilidad y confianza en nosotros.
          </p>

          <button>Conoce Mas</button>
        </div>
        <div className="ImageContainer"></div>

        <div className="Icon"></div>
      </div>
    </section>
  );
}
