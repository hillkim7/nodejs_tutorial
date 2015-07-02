# HTTPS example client/server program
This sample shows how to use HTTPS with client-authentication.

By setting requestCert: true in server side, the server tries to validate client certificate.

But the default CA doesn't validate the self-signed certificate of the client.

It can succeed the test with simple trick -- copy the client certificate and say that is a Certificate Authority.
`cp client2.pem fake_ca.pem`

## run sample
* Open two terminal
* run 'node https_server.js' in terminal #1
* run 'node https_client.js' in terminal #2
