---
layout: page
title: "Q257591: Description of the Secure Sockets Layer (SSL) Handshake"
permalink: /kb/257/Q257591/
---

## Q257591: Description of the Secure Sockets Layer (SSL) Handshake

{% raw %}

	Article: Q257591
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Secure Sockets Layer (SSL) protocol uses a combination of public-key and
	symmetric-key encryption. Symmetric-key encryption is much faster than
	public-key encryption; however, public-key encryption provides better
	authentication techniques. An SSL session always begins with an exchange of
	messages called the SSL handshake. The handshake allows the server to
	authenticate itself to the client by using public-key techniques, and then
	allows the client and the server to cooperate in the creation of symmetric keys
	used for rapid encryption, decryption, and tamper detection during the session
	that follows. Optionally, the handshake also allows the client to authenticate
	itself to the server.
	
	MORE INFORMATION
	================
	
	The steps involved in the SSL handshake are as follows (note that the following
	steps assume the use of the cipher suites listed in Cipher Suites with RSA Key
	Exchange: Triple DES, RC4, RC2, DES):
	
	1. The client sends the server the client's SSL version number, cipher settings,
	  session-specific data, and other information that the server needs to
	  communicate with the client using SSL.
	
	2. The server sends the client the server's SSL version number, cipher settings,
	  session-specific data, and other information that the client needs to
	  communicate with the server over SSL. The server also sends its own
	  certificate, and if the client is requesting a server resource that requires
	  client authentication, the server requests the client's certificate.
	
	3. The client uses the information sent by the server to authenticate the server
	  (see Server Authentication for details). If the server cannot be
	  authenticated, the user is warned of the problem and informed that an
	  encrypted and authenticated connection cannot be established. If the server
	  can be successfully authenticated, the client proceeds to step 4.
	
	4. Using all data generated in the handshake thus far, the client (with the
	  cooperation of the server, depending on the cipher being used) creates the
	  pre-master secret for the session, encrypts it with the server's public key
	  (obtained from the server's certificate, sent in step 2), and then sends the
	  encrypted pre-master secret to the server.
	
	5. If the server has requested client authentication (an optional step in the
	  handshake), the client also signs another piece of data that is unique to
	  this handshake and known by both the client and server. In this case, the
	  client sends both the signed data and the client's own certificate to the
	  server along with the encrypted pre-master secret.
	
	6. If the server has requested client authentication, the server attempts to
	  authenticate the client (see Client Authentication for details). If the
	  client cannot be authenticated, the session ends. If the client can be
	  successfully authenticated, the server uses its private key to decrypt the
	  pre-master secret, and then performs a series of steps (which the client also
	  performs, starting from the same pre-master secret) to generate the master
	  secret.
	
	7. Both the client and the server use the master secret to generate the session
	  keys, which are symmetric keys used to encrypt and decrypt information
	  exchanged during the SSL session and to verify its integrity (that is, to
	  detect any changes in the data between the time it was sent and the time it
	  is received over the SSL connection).
	
	8. The client sends a message to the server informing it that future messages
	  from the client will be encrypted with the session key. It then sends a
	  separate (encrypted) message indicating that the client portion of the
	  handshake is finished.
	
	9. The server sends a message to the client informing it that future messages
	  from the server will be encrypted with the session key. It then sends a
	  separate (encrypted) message indicating that the server portion of the
	  handshake is finished.
	
	10. The SSL handshake is now complete and the session begins. The client and the
	  server use the session keys to encrypt and decrypt the data they send to
	  each other and to validate its integrity.
	
	11. This is the normal operation condition of the secure channel. At any time,
	  due to internal or external stimulus (either automation or user
	  intervention), either side may renegotiate the connection, in which case,
	  the process repeats itself.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q257586 Description of the Client Authentication Process During the SSL
	  Handshake
	
	  Q257587 Description of the Server Authentication Process During the SSL
	  Handshake
	
	Microsoft Internet Information Server 4.0 Resource Kit
	Microsoft Windows NT Option Pack Documentation
	Microsoft Internet Information Services 5.0 Resource Guide
	Microsoft Internet Information Services 5.0 Documentation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
