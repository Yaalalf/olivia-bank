import "./style/desktop.css";

export default function HeroSection() {
  return (
    <section className="HeroSection">
      <header className="HeroTitle">
        <p>Servicio 100% garantizado</p>
        <h1>Remesas a Cuba y el mundo</h1>
        <button className="Button">Contactar</button>
      </header>

      <div className="CalculatorContainer">
        <div className="Calculator">
          <div className="PhoneDecoration Blur"></div>
          <div className="PhoneDecoration"></div>

          <div className="Card"></div>
        </div>
      </div>
    </section>
  );
}
