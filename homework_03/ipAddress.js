const dns = require('dns');
const util = require('util');
const promiseResolve = util.promisify(dns.resolve4);

async function ipAddress() {
    const ipAddres = await promiseResolve('www.mum.edu');
    console.log(ipAddres);
}

ipAddress();
console.log('MUM dns ipAddress using async & await');
