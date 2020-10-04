const fs = require('fs');

const httpServer = require('./httpServer');
const dnsServer = require('./dnsServer');


(async () => {
    console.log('[!] fakespot\n');

    let data;

    try {
        data = await fs.readFileSync('config.json');
    } catch (error) {
        return console.log('[-] Unable to read config');
    }

    let config = JSON.parse(data);
    
    if (config.whitelist === undefined) {
        return console.log('[-] Whitelist must be defined'); 
    }
    dnsServer.setWhitelist(config.whitelist);

    try {
        await httpServer.start(80);
    } catch (error) {
        return console.log('[-] Unable to start HTTP server');
    }
    console.log('[+] HTTP server listening on port 80');

    try {
        await dnsServer.start(53);
    } catch (error) {
        return console.log('[-] Unable to start DNS server');
    }
    console.log('[+] DNS server listening on port 53\n');

    console.log('[+] Server is ready\n');
})();