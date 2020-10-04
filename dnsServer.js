const ip = require('ip');
const dns = require('dns2');
const { Packet } = require('dns2');

const server = dns.createServer();
let whitelist;

server.on('request', async (req, res, info) => {
    const response = Packet.createResponseFromRequest(req);
    const [ question ] = req.questions;
    const { name, type } = question;
    const local = ip.address();

    let whitelisted = false;
    whitelist.forEach(element => {
        if (name.includes(element)) {
            whitelisted = true;
        }
    });

    console.log(`[${ whitelisted ? '+' : '-' }] ${ info.address } - ${ name } > ${ local }`);

    if (whitelisted) {
        response.answers.push({
            name,
            type: type,
            class: Packet.CLASS.IN,
            ttl: 300,
            address: local
        });

        res(response);
    }
});

start = async (port) => { await server.listen(port); }
setWhitelist = (list) => { whitelist = list; }

module.exports = {
    start,
    setWhitelist
}

/*
DNS Resolving
const resolver = require('dns');
resolver.lookup(name, (err, address) => {
    if (address === undefined) return;
    response.answers.push({
        name,
        type: type,
        class: Packet.CLASS.IN,
        ttl: 300,
        address: address
    });

    res(response);
});
*/