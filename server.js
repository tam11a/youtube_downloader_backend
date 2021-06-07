const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(process.env.PORT || 3030, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/vd', (req,res) => {
    var URL = req.query.URL;
    var filename = Date.now();
    res.header('Content-Disposition', `attachment; filename="video-${filename}.mp4"`);
    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);
});

app.get('/ad', (req,res) => {
    var URL = req.query.URL;
    var filename = Date.now();
    res.header('Content-Disposition', `attachment; filename="audio-${filename}.mp3"`);
    ytdl(URL, {
        format: 'mp3'
        }).pipe(res);
});