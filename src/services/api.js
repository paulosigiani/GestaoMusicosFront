import http from "../config/http";

export async function getInstrumentosApi() {
  // poderiam usar o axios
  const musicos = await http.get("/instrumentos");
  return musicos.data;
}

export async function deleteInstrumentosApi(id) {
  // poderiam usar o axios
  try {
    await http.delete(`/instrumentos/${id}`);
  } catch {
    throw new Error("não foi possível deletar");
  }
}


export async function getMusicosApi() {
  // poderiam usar o axios
  const musicos = await http.get("/musicos");
  return musicos.data;
}

export async function deleteMusicosApi(id) {
  // poderiam usar o axios
  try {
    await http.delete(`/musicos/${id}`);
  } catch {
    throw new Error("não foi possível deletar");
  }
}
