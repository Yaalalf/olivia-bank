import "./style/desktop.css";
import "./style/mobile.css";
import Calculator from "@/components/Calculator";

export default function HeroSection() {
  return (
    <section className="HeroSection">
      <div className="Decorator"></div>

      <header className="HeroTitle">
        <p>Servicio 100% garantizado</p>
        <h1>
          Remesas a <span>Cuba</span> sin <span>Restricciones</span>.
        </h1>
        <button className="Button">¡Envia dinero ahora!</button>
      </header>

      <Calculator />
    </section>
  );
}
