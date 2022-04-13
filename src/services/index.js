export default async function executeRequest(uri, method) {
	const response = await fetch(uri);
	responseText = await response.text();
	return JSON.parse(responseText);
}
