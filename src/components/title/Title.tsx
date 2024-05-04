import "./style/desktop.css";

export default function Title({
  title,
  description,
  decoration,
}: {
  title: string;
  description: string;
  decoration: boolean;
}) {
  return (
    <div className="TitleContainer">
      <div className="Content">
        <h2>{title} </h2>
        <p>{description}</p>
      </div>
      {decoration ? (
        <div className="DecorationContainer">
          <div className="Decoration"></div>
          <div className="Circle"></div>
          <div className="Decoration"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
