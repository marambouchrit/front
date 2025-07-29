import React from "react";
import { Paper, styled } from "@mui/material";

type PageHeaderProps = {
  children: React.ReactNode;
};
const StyledPaper = styled(Paper)(() => ({
  padding: "16px",
  marginTop: "24px",
}));

const PageHeader = (props: PageHeaderProps) => {
  return <StyledPaper> {props.children} </StyledPaper>;
};

export default PageHeader;
