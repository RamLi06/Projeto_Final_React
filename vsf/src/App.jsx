import './App.css'
import React, { useState } from 'react'

const SistemaDePonto = () => {
  const [registros, setRegistros] = useState([]);
  const [tipoPonto, setTipoPonto] = useState('');
  const [dataHoraAtual, setDataHoraAtual] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setDataHoraAtual(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, []);

  const registrarPonto = () => {
    if (tipoPonto) {
      const novoRegistro = {
        tipo: tipoPonto,
        data: new Date().toLocaleString(),
      };
      setRegistros([...registros, novoRegistro]);
      setTipoPonto('');
    }
  };

  return (
    <div>
      <h1>Sistema de Ponto</h1>
      <h2>Data e Hora Atual: {dataHoraAtual}</h2>
      <div>
        <button onClick={() => setTipoPonto('Entrada')}>Registrar Entrada</button>
        <button onClick={() => setTipoPonto('Saída')}>Registrar Saída</button>
        <button onClick={registrarPonto}>Confirmar Registro</button>
      </div>
      <h2>Histórico de Pontos</h2>
      <ul>
        {registros.map((registro, index) => (
          <li key={index}>
            {registro.tipo} - {registro.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SistemaDePonto;