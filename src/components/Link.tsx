import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

function CustomLink({ href, children }: Props) {
  return <StyledLink to={href}>{children}</StyledLink>;
}

export default CustomLink;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
