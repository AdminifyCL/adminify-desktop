// Dependencias.
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Importación de componentes.
import VentasPage from "../../pages/ventas/VentasPage.jsx";

// Definición del contenedor.
class VentasContainer extends Component {
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
  // -- Métodos [MAPPING].
  // -- Render
  render() {
    const { userInfo } = this.props;
    return <VentasPage userInfo={userInfo} />;
  }
}

// PropTypes.
VentasContainer.propTypes = {};

// Redux.
const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = {};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(VentasContainer);
