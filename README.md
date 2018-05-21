

### Config .env file
```
USER=""
HOST=""
DB=""
PASSWORD=""
SERVERPORT=""
POSTGRESPORT=""
```
# Postgres

### Conectar a Postgres

- [Connecting to PostgresSQL](https://node-postgres.com/features/connecting)
- [Queries](https://node-postgres.com/features/queries)

Para iniciar desde la línea de comandos 

`psql -U Nico -h 127.0.0.1 postgres`

Desde la librería `node-postgres`, iniciar archivo de configuración

```
export const pool = new Pool({
  user: 'USER',
  host: 'HOST',
  database: 'DB',
  password: 'PASSWORD',
  port: 'PORT'
})
```

### Crear tabla user en Postgres
```
CREATE TABLE users(id SERIAL PRIMARY KEY, firstname VARCHAR(40) NOT NULL,
lastname VARCHAR(40) NOT NULL, age INTEGER(40) NOT NULL, phone VARCHAR(40) NOT NULL)
```
