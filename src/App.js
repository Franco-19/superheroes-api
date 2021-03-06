import React, { Fragment, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Index from "./routes/Index";
import Header from "./shared/Header";

export default function App() {
  const [inHome, setInHome] = useState(true);

  const handleHomeState = () => {
      setInHome(true);
  }

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Index />
      </BrowserRouter>
    </Fragment>
  );
}
