export default async function handler(request, response) {
    const host = request.headers.host;
    console.log("host", host);
    const htmlContent = `404 Error`;
    response.setHeader('Content-Type', 'text/html');
    response.send(htmlContent);
}
