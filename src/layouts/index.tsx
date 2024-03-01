import { Container } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { Header } from "../components/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <Container sx={{ border: "1px solid red" }}>
        <Header />
        {children}
      </Container>
    </>
  );
};