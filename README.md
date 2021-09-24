<h1 align="center">Fakespot 📡</h1>
<p>
</p>

> Easy to understand DNS server with captive portal trigger.

### How does it work?

* Creates one DNS server and one HTTP server.
* The HTTP server handles the webpage.
* The DNS server redirects the trigger urls to the target address of the HTTP server.
  
### Requirements

* A router that support DNS redirection to a local device and the creation of an hotspot without the password.
* Any device that can run node.js. We'll call it server from now on.

### How to setup
* Connect the server to the router via ethernet.
* Assign a static ip address to the server.
* Set the server's ip address as the DNS server in your router's settings.
* Install node.js and npm in the server.
* Clone this repository in a directory of the server.
* cd to the directory and run `npm install`.
* Start the DNS/HTTP servers with npm start.
<br>
<i>
You can set it to start on boot so every time the server gets rebooted it will run the program.
</i>

### Supported triggers
* iOS
* macOS
* Windows
* Ubuntu (maybe other distros with Gnome, I haven't tried)
* Android
* Google Chrome
* Firefox

## Author

👤 **sonodima**

* Github: [@sonodima](https://github.com/sonodima)
