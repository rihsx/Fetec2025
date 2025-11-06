export default async function handler(req, res) {
  const inicio = Date.now();
  const duracao = 5000; // 5 segundos

  // Simula trabalho pesado (CPU)
  while (Date.now() - inicio < duracao) {
    Math.sqrt(Math.random());
  }

  res.status(200).json({
    mensagem: "Processo finalizado",
    tempo: Date.now() - inicio,
    timestamp: new Date().toISOString(),
  });
}
