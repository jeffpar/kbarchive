---
layout: page
title: "Q257587: Description of Server Authentication Process During SSLHandshake"
permalink: /kb/257/Q257587/
---

## Q257587: Description of Server Authentication Process During SSLHandshake

	Article: Q257587
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the server authentication process during the Secure
	Sockets Layer (SSL) handshake.
	
	MORE INFORMATION
	================
	
	During the SSL handshake, the server sends the client a certificate to
	authenticate itself. The client uses the certificate to authenticate the
	identity the certificate claims to represent.
	
	An SSL-enabled client goes through these steps to authenticate a server's
	identity:
	
	1. Is today's date within the validity period?
	
	The client checks the server certificate's validity period. If the current date
	and time are outside of that range, the authentication process does not go any
	further. If the current date and time are within the certificate's validity
	period, the client goes on to step 2.
	
	2. Is the issuing Certificate Authority (CA) a trusted CA?
	
	Each SSL-enabled client maintains a list of trusted CA certificates. This list
	determines which server certificates the client will accept. If the
	distinguished name (DN) of the issuing CA matches the DN of a CA on the client's
	list of trusted CAs, the answer to this question is yes, and the client goes on
	to step 3. If the issuing CA is not on the list, the server is not authenticated
	unless the client can verify a certificate chain ending in a CA that is on the
	list.
	
	3. Does the issuing CA's public key validate the issuer's digital signature?
	
	The client uses the public key from the CA's certificate (which it found in its
	list of trusted CAs in step 2) to validate the CA's digital signature on the
	server certificate that is being presented. If the information in the server
	certificate has changed since it was signed by the CA, or if the CA
	certificate's public key doesn't correspond to the private key that was used by
	the CA to sign the server certificate, the client does not authenticate the
	server's identity. If the CA's digital signature can be validated, the client
	treats the server's certificate as a valid "letter of introduction" from that CA
	and proceeds. At this point, the client has determined that the server
	certificate is valid. It is the client's responsibility to take step 4 before it
	takes step 5.
	
	4. Does the domain name in the server's certificate match the domain name of the
	  server itself?
	
	This step confirms that the server is actually located at the same network
	address that is specified by the domain name in the server certificate. Although
	step 4 is not technically part of the SSL protocol, it provides the only
	protection against a form of security attack known as a "Man-in-the-Middle
	Attack." Clients must perform this step and must refuse to authenticate the
	server or establish a connection if the domain names do not match. If the
	server's actual domain name matches the domain name in the server certificate,
	the client goes on to step 5.
	
	5. The server is authenticated.
	
	The client proceeds with the SSL handshake. If the client does not get to step 5
	for any reason, the server that is identified by the certificate cannot be
	authenticated, and the user is warned of the problem and informed that an
	encrypted and authenticated connection cannot be established.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q257591 Description of the Secure Sockets Layer (SSL) Handshake
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
