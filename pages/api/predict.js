export default async function handler(req, res) {
    if (req.method === 'POST') {
        const features = req.body;

        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(features),
        });

        const data = await response.json();
        console.log(data);
        res.status(200).json(data);
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
