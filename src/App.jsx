import "./assets/styleGlobal.css";
import Layout from "./components/layout";
import Table from "./components/table";
import Home from './components/home';
import { useEffect, useState } from "react";
import { deleteMusicosApi, getMusicosApi, getInstrumentosApi } from "./services/api";

function App() {
  const [musicos, setMusicos] = useState([]);
  const [instrumentos, setInstrumentos] = useState([]);
  const [showMusicos, setShowMusicos] = useState("musicos");

  const getMusicos = async () => {
    const data = await getMusicosApi();
    setMusicos(data);
  };

  const getInstrumentos = async () => {
    const data = await getInstrumentosApi();
    setInstrumentos(data);
  };

  const fetchData = () => {
    if (showMusicos === "musicos") {
      getMusicos();
    } else if (showMusicos === "instrumentos") {
      getInstrumentos();
    }
  };

  const deleteMusicos = async (id) => {
    try {
      await deleteMusicosApi(id);
      fetchData();
    } catch {
      alert("Erro ao deletar músico");
    }
  };

  useEffect(() => {
    if (showMusicos !== "home") {
      fetchData();
    }
  }, [showMusicos]);

  return (
    <Layout setShowMusicos={setShowMusicos}>
      {showMusicos === "home" ? (
        <Home />
      ) : (
        <Table
          data={showMusicos === "musicos" ? musicos : instrumentos}
          deleteFn={deleteMusicos}
        />
      )}
    </Layout>
  );
}

export default App;
