// Dependencias.
import React from "react";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Checkbox,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
// Estilos.
import "./PagosPage.scss";

// Definición del componente: <ConfirmacionPage />
const PagosPage = (props) => {
  // -- Manejo del estado.
  const { carroProducts } = props;
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox cliente" } };
  const [checked, setChecked] = React.useState(true);
  const [pago, setpago] = React.useState("");
  const [mostrarComponente, setMostrarComponente] = React.useState(true);
  const steps = ["Selección de productos", "Proceso de pago", "Pago confimado"];

  // -- Ciclo de vida.
  // ...

  // -- Metodos.
  const handleRedirect = () => {
    // Redirigir a la confirmación del pago
    navigate("/confirmacion");
  };

  const handleChangePago = (event) => {
    setpago(event.target.value);
  };

  const mappingCarroProducts = () => {
    return carroProducts.map((product, index) => {
      return (
        <div className="pagosPage_productContainer" key={`${index}-product`}>
          <div className="pagosPage_Cantidad">{product.cantidad}</div>
          <div className="pagosPage_Producto">{product.nombre}</div>
          <div className="pagosPage_Valor">${product.precio}</div>
        </div>
      );
    });
  };

  const mappingTotal = () => {
    let total = 0;

    carroProducts.map((product) => {
      total = total + product.precio * product.cantidad;
    });

    return `$${total}`;
  };

  // -- Renderizado.
  return (
    <section>
      {/* Navegación */}
      <section className="">
        <TabNavigation />
      </section>

      {/* Visual */}
      <section className="pagosPage_Contenedor">
        <div className="pagosPage_Titulo">
          <h1>Pago</h1>
        </div>
        <section className="pagosPage_Contenido">
          {/* Stepper de la pagosPage */}
          <div className="pagosPage_stepper">
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>

          {/* Seccion de resumen de productos*/}
          <section className="pagosPage_ProductosContenedor">
            <section className="pagosPage_ProductosContenido">
              <div className="pagosPage_ProductosCabecera">
                <p>Resumen de productos</p>
              </div>
              {/* Contenedor de productos*/}
              <div className="pagosPage_ProductosLista">{mappingCarroProducts()}</div>
            </section>
          </section>
          {/* Contenedor de valor total*/}
          <section className="pagosPage_ProductosTotal">
            <p>Total:</p>
            <p className="pagosPage_totalValor">{mappingTotal()}</p>
          </section>
          {/* Sección agregar cliente*/}
          <section className="pagosPage_TituloCliente">
            <p>
              ¿Desea agregar un cliente? {/* Checkbox para decidir si agregar o no cliente*/}
              <Checkbox
                onChange={() => setMostrarComponente(!mostrarComponente)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </p>
          </section>

          {/* Si el checkbox es activado lanza el formulario*/}
          <div className={!mostrarComponente ? "show-elementPagos" : null}>
            {!mostrarComponente && (
              <div>
                {/* Sección de formulario del cliente*/}
                <section className="pagosPage_Clientecontenedor">
                  <section className="pagosPage_ClienteContenido">
                    <div className="pagosPage_ClienteCabecera">
                      <p> Nuevo cliente </p>
                    </div>
                    <div className="pagosPage_ClienteFormulario">
                      <TextField
                        id="inputNombreCliente"
                        fullWidth
                        label="Nombre"
                        variant="filled"
                        margin="dense"
                      />
                      <TextField
                        id="inputCorreoCliente"
                        fullWidth
                        label="Correo"
                        variant="filled"
                        margin="dense"
                      />
                      <TextField
                        id="inputNumeroCliente"
                        fullWidth
                        label="Número telefónico"
                        variant="filled"
                        margin="dense"
                      />
                    </div>
                    <div className="pagosPage_ClienteBoton">
                      <Button
                        onClick={() => {
                          alert("Cliente guardado con éxito");
                        }}
                        variant="contained"
                      >
                        Guardar
                      </Button>
                    </div>
                  </section>
                </section>
              </div>
            )}
          </div>

          {/*Sección de información de compra (Método de pago)*/}
          <section className="pagosPage_InfoCompraContenedor">
            <div className="pagosPage_InfoCompraTitulo">
              <p>Información de la compra</p>
            </div>
            {/*Combobox de método de pago*/}
            <div className="pagosPage_ComboBox">
              <Box sx={{ minWidth: 500 }}>
                <FormControl variant="filled" fullWidth>
                  <InputLabel id="simple-select-labelPago">Método de Pago</InputLabel>
                  <Select
                    labelId="simple-select-labelPago"
                    id="simple-selectPago"
                    value={pago}
                    label="pago"
                    onChange={handleChangePago}
                  >
                    <MenuItem value={1}>Efectivo</MenuItem>
                    <MenuItem value={2}>Débito</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            {/*Botones de información de compra*/}
            <section className="pagosPage_InfoCompraContenido">
              <div className="pagosPage_CancelarBoton">
                <Button onClick={() => navigate("/caja")} variant="outlined">
                  Cancelar compra
                </Button>
              </div>
              <Button onClick={() => handleRedirect()} variant="contained">
                Confirmar pago
              </Button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

// Exportación.
export default PagosPage;
