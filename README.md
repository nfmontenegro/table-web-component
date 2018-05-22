

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

```
import React from 'react'

class CreateUser extends React.Component {
  state = {
    title: ''
  }

  handleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <Mutation mutation={CREATE_DRAFT_MUTATION}>
        {(createDraft, { data, loading, error }) => {
          return (
            <div className="pa4 flex justify-center bg-white">
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  const { title } = this.state
                  //call mutation function
                  await createDraft({
                    variables: { title, text }
                  })
                  //redirect after mutation function
                  this.props.history.replace('/drafts')
                }}>
                <h1>Create user</h1>
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={this.handleChange}
                  placeholder="Title"
                  type="text"
                  value={this.state.title}
                />
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }
}
```