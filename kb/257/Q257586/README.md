---
layout: page
title: "Q257586: Description of Client Authentication Process During SSLHandshake"
permalink: /kb/257/Q257586/
---

## Q257586: Description of Client Authentication Process During SSLHandshake

{% raw %}

	Article: Q257586
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the client authentication process during the Secure
	Sockets Layer (SSL) handshake.
	
	MORE INFORMATION
	================
	
	SSL-enabled servers can be configured to require client authentication, or
	cryptographic validation by the server of the client's identity. When a server
	that is configured this way requests client authentication, the client sends the
	server both a certificate and a separate piece of digitally signed data to
	authenticate itself. The server uses the digitally signed data to validate the
	public key in the certificate and to authenticate the identity that the
	certificate claims to represent.
	
	The SSL protocol requires the client to create a digital signature by creating a
	one-way hash from data that is generated randomly during the handshake and that
	is known only to the client and server. The hash of the data is then encrypted
	with the private key that corresponds to the public key in the certificate that
	is being presented to the server.
	
	An SSL-enabled server goes through the following steps to authenticate a user's
	identity:
	
	1. Does the user's public key validate the user's digital signature?
	
	The server checks whether the user's digital signature can be validated with the
	public key in the certificate. If so, the server has established that the public
	key asserted to belong to the user matches the private key that is used to
	create the signature and that the data has not been tampered with since it was
	signed.
	
	At this point, however, the binding between the public key and the Distinguished
	Name (DN) that is specified in the certificate has not yet been established. The
	certificate might have been created by someone attempting to impersonate the
	user. To validate the binding between the public key and the DN, the server must
	also complete step 3 and step 4.
	
	2. Is today's date within the validity period?
	
	The server checks the certificate's validity period. If the current date and time
	are outside of that range, the authentication process does not go any further.
	If the current date and time are within the certificate's validity period, the
	server goes on to Step 3.
	
	3. Is the issuing Certificate Authority (CA) a trusted CA?
	
	Each SSL-enabled server maintains a list of trusted CA certificates. This list
	determines which certificates the server will accept. If the DN of the issuing
	CA matches the DN of a CA on the server's list of trusted CAs, the answer to
	this question is yes, and the server goes on to Step 4. If the issuing CA is not
	on the list, the client is not authenticated unless the server can verify a
	certificate chain ending in a CA that is on the list. Administrators can control
	which certificates are trusted or not trusted within their organizations by
	controlling the lists of CA certificates that are maintained by clients and
	servers.
	
	4. Does the issuing CA's public key validate the issuer's digital signature?
	
	The server uses the public key from the CA's certificate (which it found in its
	list of trusted CAs in step 3) to validate the CA's digital signature on the
	certificate that is being presented. If the information in the certificate has
	changed since it was signed by the CA, or if the public key in the CA
	certificate does not correspond to the private key that was used by the CA to
	sign the certificate, the server does not authenticate the user's identity. If
	the CA's digital signature can be validated, the server treats the user's
	certificate as a valid "letter of introduction" from that CA and proceeds. At
	this point, the SSL protocol allows the server to consider the client
	authenticated and proceed with the connection in the next step.
	
	5. Is the authenticated client authorized to access the requested resources?
	
	The server checks what resources the client is permitted to access according to
	the server's access control lists (ACLs) and establishes a connection with
	appropriate access. If the server does not get to step 5 for any reason, the
	user that is identified by the certificate cannot be authenticated, and the user
	is not allowed to access any server resources that require authentication.
	
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
	

{% endraw %}
