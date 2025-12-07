import express from 'express';
import path from 'path';

declare global {
    var __dirname: string;
}

const app = express();
const PORT = 8000;

// Resolve the path to the client directory (one level up from server/)
const clientDir = path.join(__dirname, '../../client');

// Serve static files (CSS, JS, JSON, etc.) from the client directory
app.use(express.static(clientDir));

app.get('/', (req, res) => {
    res.sendFile(path.join(clientDir, 'obs/index.html'));
});

app.get('/resource/:file', (req, res) => {
    res.sendFile(path.join(clientDir, 'obs/resource', req.params.file));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
