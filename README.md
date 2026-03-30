\# VSVP Video API 🎬



API personnelle pour télécharger des vidéos depuis n'importe quel site directement sur iPhone via un Raccourci iOS.



\---



\## 🇫🇷 Français



\### Comment ça marche ?

L'API utilise yt-dlp pour extraire le lien direct de n'importe quelle vidéo en ligne, puis le Raccourci iOS télécharge la vidéo directement dans Fichiers.



\### Configurer le Raccourci iOS

1\. Ouvre l'app \*\*Raccourcis\*\* sur iPhone

2\. Crée un nouveau raccourci et active \*\*"Dans la feuille de partage"\*\* dans les détails (icône i)

3\. Ajoute ces actions dans l'ordre :

&#x20;  - \*\*Recevoir\*\* Apps depuis Feuille partagée

&#x20;  - \*\*URL\*\* → `https://vsvp-video-api.up.railway.app/download`

&#x20;  - \*\*Obtenir le contenu de l'URL\*\* → Méthode POST, Corps JSON

&#x20;    - Clé `url` → Entrée de raccourci

&#x20;    - Clé `key` → `VOTRE\_CLE`

&#x20;  - \*\*Obtenir valeur\*\* pour `videoUrl` dans Contenu de l'URL

&#x20;  - \*\*URL\*\* → Valeur du dictionnaire

&#x20;  - \*\*Obtenir le contenu de l'URL\*\* → Méthode GET

&#x20;  - \*\*Enregistrer le fichier\*\*



\### Utilisation

1\. Ouvre une vidéo dans Safari

2\. Appuie sur le bouton \*\*Partager\*\*

3\. Sélectionne \*\*Save Video\*\*

4\. La vidéo se télécharge dans \*\*Fichiers → Shortcuts\*\*



\### Sites supportés

Reddit, YouTube, TikTok, Twitter/X, Instagram, xnxx, xhamster et +1000 autres sites via yt-dlp.



\---



\## 🇬🇧 English



\### How it works

The API uses yt-dlp to extract the direct video link from any website, then the iOS Shortcut downloads the video directly to Files.



\### Setup iOS Shortcut

1\. Open the \*\*Shortcuts\*\* app on iPhone

2\. Create a new shortcut and enable \*\*"In Share Sheet"\*\* in details (i icon)

3\. Add these actions in order:

&#x20;  - \*\*Receive\*\* Apps from Share Sheet

&#x20;  - \*\*URL\*\* → `https://vsvp-video-api.up.railway.app/download`

&#x20;  - \*\*Get contents of URL\*\* → Method POST, Body JSON

&#x20;    - Key `url` → Shortcut Input

&#x20;    - Key `key` → `YOUR\_KEY`

&#x20;  - \*\*Get value\*\* for `videoUrl` in Contents of URL

&#x20;  - \*\*URL\*\* → Dictionary Value

&#x20;  - \*\*Get contents of URL\*\* → Method GET

&#x20;  - \*\*Save File\*\*



\### Usage

1\. Open a video in Safari

2\. Tap the \*\*Share\*\* button

3\. Select \*\*Save Video\*\*

4\. The video downloads to \*\*Files → Shortcuts\*\*



\### Supported sites

Reddit, YouTube, TikTok, Twitter/X, Instagram, xnxx, xhamster and 1000+ other sites via yt-dlp.



\---



\## ⚙️ Tech Stack

\- Node.js + Express

\- yt-dlp

\- Hosted on Railway

