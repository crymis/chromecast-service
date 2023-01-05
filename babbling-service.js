const Babbling = require("babbling");

const CHROME_CAST_NAME = "Fernseher";
const device = new Babbling.ChromecastDevice(CHROME_CAST_NAME);

module.exports = playYtVideo = async (youtubeId) => {
  const tv = await device.detect();
  if (!tv) {
    console.error('Chromecast TV is not available anymore');
    return;
  }

  console.log('🔎 Found: ', tv);
  const yt = await device.openApp(Babbling.YoutubeApp, {
    deviceName: tv.friendlyName,
  });
  await yt.play(youtubeId);
};

// How it works: e.g.
// playYtVideo('17ntdUP5-Do');