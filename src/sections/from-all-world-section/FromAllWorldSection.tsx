import Map from "@/components/map";
import "./style/desktop.css";
import "./style/mobile.css";

export default function FromAllWorldSection() {
  return (
    <>
      {/* <div className="Rating">
        <h3>Mas de 5 años de experiencia</h3>
        <div className="RatingContainer">
          <div className="RatingItem">
            <p className="Number">5000+</p>
            <p className="Text">Recargas a Moviles</p>
            <div className="DecorationIcon"></div>
          </div>
          <div className="RatingItem">
            <p className="Number">6865+</p>
            <p className="Text">Transferencias a tarjetas</p>
            <div className="DecorationIcon"></div>
          </div>
          <div className="RatingItem">
            <p className="Number">4720+</p>
            <p className="Text">Entregas en efectivo</p>
            <div className="DecorationIcon"></div>
          </div>
        </div>
      </div> */}
      <section className="FromAllWorldSection">
        <div className="Decorator"></div>

        <div className="ContentContainer">
          <header className="SectionTitle">
            <p>Tu Enlace Directo</p>
            <h2>Remesas a Cuba desde el mundo</h2>
            <div className="Decoration"></div>
          </header>
          <p>
            En nuestra agencia de envío de remesas, entendemos la importancia de
            mantener a las familias conectadas y apoyadas, sin importar la
            distancia. Ofrecemos un servicio confiable y eficiente para enviar
            remesas a Cuba desde cualquier lugar del mundo.
          </p>
        </div>
        <Map />
        <div className="DecorationContainer">
          <div className="DecorationImage One"></div>
          <div className="DecorationImage Two"></div>
          <div className="DecorationImage Three"></div>
        </div>
      </section>
    </>
  );
}
