// See https://github.com/yocontra/nodecast
const nodecast = require('nodecast');

console.log('Start Nodecast 📺');

const devices = nodecast.find('chromecast');
// console.log('The following devices were found', devices);

devices.on('device', function(device) {
  console.log('Found device', device, device.info.serviceList);
  const yt = device.app('YouTube');

  console.log('Youtube app on chromecast', yt);
  const someId = '1234';

	yt.start(`v=${someId}`, function(err) {
		// starts the app on the device
		// also optionally takes data to pass to the app
		// (for example: youtube takes v=id to launch with a video)
    if (err) {
      console.log(`Error happened when trying to open youtube with id: '${someId}'`, err);
    }
    console.log('Started on', device.name);
	});
});