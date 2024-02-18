import server from '@shared/http/server';
import dataSource from '@shared/typeorm';

dataSource
  .initialize()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida');
    server.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor iniciado na porta ${ process.env.PORT }`);
    });
  })
  .catch((err) => console.error(err));
