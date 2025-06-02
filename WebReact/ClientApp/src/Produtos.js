import React, { useEffect, useState } from 'react';
import AddProduto from './components/AddProduto';
import CarouselBootstrap from './components/CarouselBootstrap';
import './Produtos.css';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProdutos = async () => {
    try {
      const res = await fetch('/api/Produtos');
      if (!res.ok) throw new Error('Erro ao buscar produtos');
      const data = await res.json();
      setProdutos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  if (loading) return <div className="text-center mt-5">Carregando...</div>;

  return (
    <div className="container py-5">
      <CarouselBootstrap />
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-3">
                <h2 className="mb-3 mb-md-0">Lista de Produtos</h2>
                <AddProduto onProdutoAdicionado={fetchProdutos} />
              </div>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="thead-light">
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      {/* Adicione mais colunas conforme o modelo Produto */}
                    </tr>
                  </thead>
                  <tbody>
                    {produtos.map(produto => (
                      <tr key={produto.id}>
                        <td>{produto.descricao}</td>
                        {/* Adicione mais células conforme o modelo Produto */}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {produtos.length === 0 && (
                  <div className="text-center text-muted py-4">Nenhum produto cadastrado.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}