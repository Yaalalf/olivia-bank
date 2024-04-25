"use client";

import "./style/desktop.css";

export default function HeaderSection({ miniState }: { miniState: boolean }) {
  const classNames = miniState ? "HeaderSection Mini" : "HeaderSection";

  return (
    <header className={classNames}>
      <div className="Logo"></div>
    </header>
  );
}
