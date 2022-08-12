// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";

// Importación de estilos.
import "./IndexPage.scss";

// Definición de la pagina: Index.
class IndexPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  handleUser = () => {
    const { createUser } = this.props;
  };
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    return (
      <section className="">
        <div className="">
          <h1>Index - Page</h1>
        </div>
      </section>
    );
  }
}

// PropTypes.
IndexPage.propTypes = {};

// Exportación de la pagina: Index.
export default IndexPage;
