function mandar_datos_calendario() {
    fetch('wp-json/api/v1/usuarioCalendario', {
        headers : {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: '{"nombre": "angel"}'
    })
    .then((data) => console.log(data))
}