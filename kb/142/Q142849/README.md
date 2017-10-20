---
layout: page
title: "Q142849: Obtaining a Secure Sockets Layer (PCT/SSL) Digital Certificate"
permalink: /kb/142/Q142849/
---

## Q142849: Obtaining a Secure Sockets Layer (PCT/SSL) Digital Certificate

{% raw %}

	Article: Q142849
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Server provides users with a secure communication
	channel through support for Secure Sockets Layer (SSL) and RSA encryption. In
	addition, support is provided for Private Communication Technology (PCT), which
	is an efficient and secure upgrade to the SSL protocol.
	
	MORE INFORMATION
	================
	
	The PCT/SSL protocols provide secure data communication through data encryption
	and decryption. A PCT/SSL-enabled server can send and receive private
	communication across the Internet to PCT/SSL-enabled clients (browsers), such as
	Microsoft Internet Explorer version 2.0 for Windows 95 (included on the
	Microsoft Internet Information Server compact disc in the \CLIENTS directory).
	
	In the Open Systems Interconnect (OSI) model, PCT and SSL are protocol layers
	between the TCP/IP transport/network layer and the application layer where HTTP
	operates. PCT/SSL provide server authentication, encryption, and data integrity.
	Authentication assures the client that data is being sent to the correct server
	and that the server is secure. Encryption assures that the data cannot be read
	by anyone other than the secure target server. Data integrity assures that the
	data being transferred has not been altered.
	
	Enabling PCT/SSL security on a Microsoft Internet Information Server involves the
	following steps:
	
	1. Generate a key pair file and a request file.
	
	2. Request a certificate from a Certification Authority.*
	
	3. Install the certificate on your server.
	
	4. Activate PCT/SSL security on a WWW service directory.
	
	* Digital certificates can be obtained from Verisign. For more information, point
	your browser to:
	
	  http://www.verisign.com/microsoft/
	
	You can find more information on the implementation of PCT/SSL in the Microsoft
	Internet Information Server Installation and Planning guide, pages 58 - 63.
	
	Additional query words: prodiis1
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
