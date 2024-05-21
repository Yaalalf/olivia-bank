import Carrousel from "@/components/carrousel";
import "./style/desktop.css";
import Title from "@/components/title/Title";
import Map from "@/components/map";

export default function OnBoardingSection() {
  return (
    <section className="OnBoardingSection">
      <div className="OnBoardingTitleContainer">
        <Title
          title="Un puente financiero"
          description="Somos la conexión entre usted y su familia"
          decoration
        />
      </div>

      <Carrousel />

      <div className="SectionTitleContainer">
        <div className="SectionTitle">
          <div className="Content">
            <h2>
              Envía dinero de manera rápida y segura a tus seres queridos en
              todo la isla.
            </h2>
            <p>
              Nuestra agencia te ofrece las mejores tarifas y un servicio
              confiable para tus remesas internacionales.
            </p>
          </div>

          <div className="DecorationContainer">
            <div className="DecoratorImage"></div>
            <div className="Decorator"></div>
          </div>
        </div>
        <div className="SectionMobile">
          <div className="Content">
            <h2>
              Recarga tu móvil desde el exterior: ¡Conéctate sin fronteras!
            </h2>
            <p>
              Recarga el móvil de tus familiares y amigos desde el extranjero,
              sigue conectado con tus seres queridos
            </p>
          </div>

          <div className="DecorationContainer">
            <div className="DecoratorImage"></div>
            <div className="Decorator"></div>
          </div>
        </div>
        <div className="SectionTransfer">
          <div className="Content">
            <h2>Transferencias bancarias internacionales.</h2>
            <p>
              Envia dinero fácilmente a nivel internacional con tarifas
              competitivas.
            </p>
          </div>

          <div className="DecorationContainer">
            <div className="DecoratorImage"></div>
            <div className="Decorator"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
