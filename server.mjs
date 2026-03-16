import { createServer } from 'node:http';
import { parse } from 'node:url';

const server = createServer((req, res) => {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000,
    }

    res.writeHead(200, headers);

    // Extraer los query params de la URL
    const query = parse(req.url, true).query;
    const num1 = parseFloat(query.num1);
    const num2 = parseFloat(query.num2);

    const resultado = num1 + num2;

    let respuesta = { "resultado": resultado }
    let respuestaJson = JSON.stringify(respuesta);
    res.end(respuestaJson);
});

const PORT = process.env.PORT || 3002;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servicio SUMA QUERY en 0.0.0.0:${PORT}`);
});