async function getPosition(ip = null) {
  const url = ip ? `http://ip-api.com/json/${ip}` : 'http://ip-api.com/json/';
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    const data = await response.json();

    if (data.status !== 'success') {
      console.error('Error from API:', data.message || 'Unknown error');
      return null;
    }

    console.log(`IP: ${data.query}`);
    console.log(`Latitudine: ${data.lat}`);
    console.log(`Longitudine: ${data.lon}`);
    console.log(`Città: ${data.city}, ${data.country}`);

    return { lat: data.lat, lon: data.lon };
  } catch (error) {
    console.error('Failed to fetch position:', error?.message || error);
    return null;
  }
}