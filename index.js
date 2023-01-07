const express = require("express");
const playYtVideo = require('./babbling-service');

const app = express();
const port = 3333;


app.get("/", async (req, res) => {
  const ytId = req.query.id;
  res.send(`Welcome to the DJonTour Library! Now Playing video with id: ${ytId || -''}`);

  await playYtVideo(ytId).catch(err => {
    console.error('Some error occured while trying to start playing a YouTube video. ', err);
  });

  const nowTime = new Date().toLocaleTimeString();
  console.log(`${nowTime}: Now playing the YouTube video ${ytId}`);
});

app.listen(port, () => {
  console.log(`📺 DJonTour Video Library now listening on port ${port}`);
});
