var EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        this.message = 'Hi!';
        this.feedBoom();
        setInterval(() => {
            this.emit('boom', 'BOOM');
        }, 1000);

    }
    feedBoom(message) {
        this.on('boom', function (name) {
            if (message)
                console.log(message);
            else
                console.log(`${name}`);
        })
    }
}

var gym = new Gym();
gym.feedBoom('Athlete is working out');