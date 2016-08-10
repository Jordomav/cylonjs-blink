var Cylon = require('cylon');

Cylon.robot({

    connections: {
        arduino: { adaptor: 'firmata', port: 'my/port'}
    },
    devices: {
        led: { driver: 'led', pin: 13}
    },
    work: function (my) {
        every((1).second(), my.led.toggle)
    }
}).start();