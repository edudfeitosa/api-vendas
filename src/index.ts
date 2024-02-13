import server from '@shared/http/server';

// inicialização do servidor
server.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor iniciado na porta ${ process.env.PORT }`);
});
