import React from "react";
import { Link } from "react-router-dom";

type StlyledLinkProps = {
  linkText: string;
  to: string;
};

export const StlyledLink = ({ linkText, to }: StlyledLinkProps) => {
  return <Link to={to}>{linkText}</Link>;
};
