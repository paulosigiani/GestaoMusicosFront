/* eslint-disable react/prop-types */
import { columns } from "../config/columns-musicos";

function Table({ data, deleteFn, editFn }) {
  //define as colunas da tabela dinamicamente
  const isMusicos = data.length && data[0].hasOwnProperty('idade');
  const headers = isMusicos ? columns.musicos : columns.instrumentos;

  return (
    <table>
      <thead>
        <tr>
          {headers.map((column, i) => (
            <th key={i}>{column.toUpperCase()}</th>
          ))}
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            {isMusicos ? (
              <>
                <td>{item.idade}</td>
                <td>{item.sexo}</td>
                <td>{item.salario}</td>
                <td>{item.cep}</td>
              </>
            ) : (
              <>
                <td>{item.codigo}</td>
                <td>{item.tipo}</td>
              </>
            )}
            <td>
              <button onClick={() => editFn(item.id)} className="btn btn-editar">
                Editar
              </button>
            </td>
            <td>
              <button onClick={() => deleteFn(item.id)} className="btn btn-excluir">
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
