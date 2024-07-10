import "./base.css";

export default function YLIcon({
  icon,

  className,
}: {
  icon: string;
  className?: string;
}) {
  return (
    <span className={`yl-icon ${className || ""}`}>
      <span
        className="yl-icon-container"
        style={{ maskImage: `url(${icon})` }}
      ></span>
    </span>
  );
}
