# shell script for createing certificatei to run TLS socket sample
# Note: you can just simply pass questions from below commands by hitting enter key.
set -x

# create client private key
openssl genrsa -out client_key.pem
# create client certificate
openssl req -new -key client_key.pem -out client_csr.pem 
openssl x509 -req -in client_csr.pem -signkey client_key.pem -out client_cert.pem 

# create server private key
openssl genrsa -out server_key.pem
# create server certificate
openssl req -new -key server_key.pem -out server_csr.pem
openssl x509 -req -in server_csr.pem -signkey server_key.pem -out server_cert.pem

# creating fake CA
cp client_cert.pem fake_ca.pem

