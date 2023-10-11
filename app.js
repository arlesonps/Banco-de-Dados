const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'my_crud',
  });
  
  // Tentar estabelecer a conexão
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
      console.log('Conexão com o banco de dados estabelecida com sucesso!');
      // Aqui você pode executar consultas ou operações no banco de dados.
    }
  });
  
  // Lidar com erros não capturados durante a conexão
  process.on('uncaughtException', (err) => {
    console.error('Erro não tratado durante a conexão:', err);
  });
  
  // Lidar com a desconexão do banco de dados
  connection.on('end', () => {
    console.log('Conexão com o banco de dados encerrada.');
  });
  
  // Fechar a conexão quando você terminar
  // connection.end();