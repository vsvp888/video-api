const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = 'mon-cle-secrete-2024';

app.post('/download', (req, res) => {
  const { url, key } = req.body;

  if (key !== API_KEY) {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  if (!url) {
    return res.status(400).json({ error: 'URL manquante' });
  }

  const cmd = `yt-dlp -f "best[ext=mp4]/best" --get-url "${url}"`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: 'Impossible d\'extraire la vidéo', details: stderr });
    }

    const videoUrl = stdout.trim();
    res.redirect(videoUrl);
  });
});

app.get('/', (req, res) => {
  res.json({ status: 'API Video en ligne !' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});