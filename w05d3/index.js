const pg = require('pg');

const Client = pg.Client;

const configObj = {
  user: 'postgres',
  host: 'localhost',
  database: 'spot',
  password: 'postgres',
  port: 5433
};

// console.log('db connection info:',configObj);

const client = new Client(configObj);

client.connect()
.then(()=>{
  console.log('db connected');



})
.catch((err)=>{
  console.log('db connection error:',err.stack);
});

const verb = process.argv[2];

switch (verb){
  case 'browse':
    client.query('SELECT id,question FROM objectives ORDER BY id;')
    .then((response)=>{
      console.log('browse query response rows:',response.rows);
      client.end();
    })
    .catch((err)=>{
      console.log('db browse query error:',err.stack);
      client.end();
    });
    break;
  
  case 'read':
    const id = process.argv[3];
    client.query(`SELECT id,day_id,question,answer,type,sort FROM objectives WHERE id = $1;`,[id])
    .then((response)=>{
      console.log('browse query response rows:',response.rows);
      client.end();
    })
    .catch((err)=>{
      console.log('db browse query error:',err.stack);
      client.end();
    });

    break;
  
  default:
    console.log('please enter a recognized verb.');
    client.end();
    break;
}


