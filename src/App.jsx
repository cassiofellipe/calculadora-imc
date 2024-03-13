import { useState } from 'react'
import './App.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100; // Convertendo altura de cm para metros
    const imcCalculado = peso / (alturaMetros * alturaMetros);

    let classificacaoIMC = '';
    if (imcCalculado < 18.5) {
      classificacaoIMC = 'Magreza';
    } else if (imcCalculado < 24.9) {
      classificacaoIMC = 'Normal';
    } else if (imcCalculado < 29.9) {
      classificacaoIMC = 'Sobrepeso';
    } else if (imcCalculado < 34.9) {
      classificacaoIMC = 'Obesidade Grau I';
    } else if (imcCalculado < 39.9) {
      classificacaoIMC = 'Obesidade Grau II';
    } else {
      classificacaoIMC = 'Obesidade Grau III';
    }

    setImc(imcCalculado.toFixed(2));
    setClassificacao(classificacaoIMC);
  };

  return (
      <div className="App">
      <h1>Calculadora de IMC</h1>
      <form>
        <div>
          <label>Altura (cm):</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <button type="button" onClick={calcularIMC}>Calcular</button>
      </form>
      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App
