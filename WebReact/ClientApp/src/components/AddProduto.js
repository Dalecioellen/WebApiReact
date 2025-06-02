import React, { useState } from 'react';
import './AddProduto.css';

const AddProduto = ({ onProdutoAdicionado }) => {
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Descricao', descricao);

    await fetch('/api/Produtos', {
      method: 'POST',
      body: formData,
    });

    setDescricao('');
    if (onProdutoAdicionado) onProdutoAdicionado();
  };

  return (
    <form className="add-produto-form d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Nome do produto"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-success">Cadastrar Produto</button>
    </form>
  );
};

export default AddProduto;


