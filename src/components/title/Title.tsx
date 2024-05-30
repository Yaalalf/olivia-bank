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
    <div className="title_container">
      <div className="Content">
        <h2>{title} </h2>
        <p>{description}</p>
      </div>
      {decoration ? (
        <div className="decoration_container">
          <div className="decoration"></div>
          <div className="circle"></div>
          <div className="decoration"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
