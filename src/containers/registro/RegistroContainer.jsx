// Dependencias.
import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/actionUser.js";
import PropTypes from "prop-types";

// Importación de componentes.
import RegistroPage from "~pages/registro/RegistroPage.jsx";

// Definición del contenedor.
class RegistroContainer extends Component {
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
  handleCreateUser = async (data) => {
    console.log("[#️⃣][INFO][CONTAINER:Registro][handleCreateUser] Creando usuario...");
    const { createUser } = this.props;
    await createUser(data);
  };

  // -- Métodos [MAPPING].
  // -- Render
  render() {
    return <RegistroPage createUser={this.handleCreateUser} />;
  }
}

// PropTypes.
RegistroContainer.propTypes = {
  createUser: PropTypes.func.isRequired,
};

// Redux.
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
  };
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(RegistroContainer);
