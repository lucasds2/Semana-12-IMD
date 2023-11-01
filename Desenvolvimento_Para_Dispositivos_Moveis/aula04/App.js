import React, { useState, useEffect } from 'react';

function App() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const adicionarContato = () => {
    if (nome && telefone && email) {
      const novoContato = {
        nome: nome,
        telefone: telefone,
        email: email,
      };
      setContatos([...contatos, novoContato]);
      setNome('');
      setTelefone('');
      setEmail('');
    }
  };

  const removerContato = (index) => {
    const novaLista = [...contatos];
    novaLista.splice(index, 1);
    setContatos(novaLista);
  };

  useEffect(() => {
    document.title = `Contatos: ${contatos.length}`;
  }, [contatos]);

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={adicionarContato}>Adicionar</button>
      <ul>
        {contatos.map((contato, index) => (
          <li key={index}>
            {contato.nome}, {contato.telefone}, {contato.email}
            <button onClick={() => removerContato(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
