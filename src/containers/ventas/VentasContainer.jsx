// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import VentasPage from "../../pages/ventas/VentasPage.jsx";

// Definición del contenedor: <VentasContainer />.
const VentasContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <VentasPage />;
};

// PropTypes.
VentasContainer.propTypes = {};

// Exportación.
export default VentasContainer;
