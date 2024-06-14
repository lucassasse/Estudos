async function getRouteInfo() {
    const routeId = document.getElementById('routeIdSelect').value;
    const resultDiv = document.getElementById('result');
    const timeDiv = document.getElementById('time');

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `https://mobilibus.com/api/timetable?origin=web&v=2&project_id=816&route_id=${routeId}`;
    const url = proxyUrl + apiUrl;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.longName) {
            resultDiv.textContent = `Horários da linha: ${data.timetable.trips[0].tripDesc}`;
        } else {
            resultDiv.textContent = 'Nenhuma informação foi encontrada para esta linha';
        }

        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const currentTime = `Horário Atual: ${hours}:${minutes}:${seconds}`;

        timeDiv.textContent = currentTime;
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
    }
}