set -x
openssl genrsa -out client2.key
openssl req -new -key client2.key -out client2.csr 
openssl x509 -req -in client2.csr -signkey client2.key -out client2.pem 
openssl genrsa -out server1.key
openssl req -new -key server1.key -out server1.csr
openssl x509 -req -in server1.csr -signkey server1.key -out server1.pem
cp client2.pem fake_ca.pem
