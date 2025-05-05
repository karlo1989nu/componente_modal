import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import gatito from "./assets/gatito.jpg";

function App() {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => setOpenModal(null);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">Ejemplo de Modales</h1>
      <div className="space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setOpenModal("simple")}
        >
          Abrir Modal Simple
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setOpenModal("form")}
        >
          Abrir Modal con Formulario
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => setOpenModal("image")}
        >
          Abrir Modal con Imagen
        </button>
      </div>

      {/* Modal Simple */}
      <Modal isOpen={openModal === "simple"} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Modal Simple</h2>
        <p>Este es un modal con un título, un párrafo y un botón "Aceptar".</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          Aceptar
        </button>
      </Modal>

      {/* Modal con Formulario */}
      <Modal isOpen={openModal === "form"} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Modal con Formulario</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Ingresa tu email"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Enviar
          </button>
        </form>
      </Modal>

      {/* Modal con Imagen */}
      <Modal isOpen={openModal === "image"} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Modal con Imagen</h2>
        <img src={gatito} alt="Gatito" className="rounded mb-4" />
        <p className="text-sm text-gray-500">Este es un pie de foto.</p>
      </Modal>
    </div>
  );
}

export default App;
