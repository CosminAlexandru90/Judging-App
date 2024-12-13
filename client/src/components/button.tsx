import React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { title, onClick } = props;

  return <button onClick={onClick}>{title}</button>;
};
