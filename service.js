const Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'nodeBasicService',
  description: 'The nodejs.org example web server.',
  script: 'C:\\Users\\TzonG\\Desktop\\BTL-HDH\\index.js',
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('uninstall',function(){
  console.log('success');
  svc.start();
});

svc.uninstall();