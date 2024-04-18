export default async function handler(request, response) {
    const htmlContent = `404 Error`;
    response.setHeader('Content-Type', 'text/html');
    response.send(htmlContent);
}
