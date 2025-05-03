import React from "react";

function Login() {
    //let (email,setEmail)= .useState("");
    //let (password,setPassword)= .useState("");
    let getFormData = (evento) => {
        console.log("formulario:",evento)
        evento.preventDefault(); // Evita el comportamiento por defecto del formulario
        let email = evento.target.email.value; // Obtiene el valor del campo de correo electrónico
        let password = evento.target.password.value; // Obtiene el valor del campo de contraseña
        console.log("email:",email) // Muestra el correo electrónico en la consola
        console.log("password:",password) // Muestra la contraseña en la consola
        // Aquí puedes agregar la lógica para enviar los datos al servidor o realizar la autenticación  

    }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4 fw-bold">Iniciar Sesión</h2>
        <form onSubmit={(evento)=>getFormData(evento)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email"className="form-control"id="email"placeholder="tucorreo@ejemplo.com"
              //value={email} onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Ingresar</button>
          </div>
          <div className="text-center mt-3">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
