const mysql = require('mysql')

const conection = mysql.createConnection({

    host:'localhost',
    user:'Global',
    password:'123',
    database:'contacto'

})

conection.connect( (err) => {
     if(err) throw err
        console.log('La conexión es Exitosa')
})

conection.query('SELECT * from cliente', (err,rows) =>{
    if(err) throw err
    console.log('Los datos de la tabla son estos:')
    console.log(rows)
    /*console.log('La cantidad de resultados es:')
    console.log(rows)
    console.log(rows.length)
    const usuarioUno = rows[0]
    console.log('el usuario se llama ${usuarioUno.nombre} y tiene el id ${usuarioUno.id}')

*/
})


conection.end()
