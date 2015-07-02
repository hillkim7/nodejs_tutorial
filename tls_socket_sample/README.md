# TLS socket example client/server program
These source files are created based on the book, Professional Node.js.
This sample shows how to use TLS socket with client-authentication.

== run sample
* Open two terminal
* run 'node tls-socket_server.js' in terminal #1
* run 'node tls-socket_client.js' in terminal #2

== TLS sample with client-authentication
To be with client-authentication following requirement should be fulfilled.
* In server-side an option 'requestCert: true' should be included and 'ca: [fs.readFileSync('fake_ca.pem')]'.
* In server-side an option 'rejectUnauthorized: false' required to check 'client.authorized' manually and deny the connection request.

== TLS sample without client-authentication
To be without client-authentication requires less.
* In server-side an option 'requestCert: false' should be included and no need of 'ca: [fs.readFileSync('fake_ca.pem')]'
* In server-side an option 'rejectUnauthorized: false' is not used.
* The 'client.authorized' is always false but communication between server and client is possible.
* No need to specify 'key: fs.readFileSync('client_key.pem'), cert: fs.readFileSync('client_cert.pem')' in client-side.
