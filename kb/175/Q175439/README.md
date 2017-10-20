---
layout: page
title: "Q175439: XFOR: Enabling SSL For Exchange Server"
permalink: /kb/175/Q175439/
---

## Q175439: XFOR: Enabling SSL For Exchange Server

{% raw %}

	Article: Q175439
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To accept logons from Internet clients, the Microsoft Exchange Server computer
	must be configured to accept the authentication method supported by the client.
	This article addresses how to enable the Exchange Server to accept Secure Socket
	Layer (SSL) authentication.
	
	Check your client's documentation to determine what authentication methods it
	supports and how to configure the client to use authentication.
	
	See the "More Information" section for an overview of SSL.
	
	MORE INFORMATION
	================
	
	If you are running Exchange 5.5 on a Windows 2000 server, the Key Manger is not
	integrated into the IIS Admin program. You must run Key Manager by using the
	executable file Keyring.exe.
	
	To start the Microsoft Internet Information Server (IIS) Key Manager in Windows
	2000, click Start, click Run, type "keyring.exe" (without the quotation marks)
	in the Open box, and then click OK.
	
	To enable Exchange Server to accept SSL authentication:
	
	1. Make sure that Microsoft Windows NT version 4.0 is installed and that Service
	  Pack 3 is applied.
	
	2. Install Microsoft Internet Information Server (IIS) version 3.0 or later
	  before you install Exchange Server. This step is critical. If IIS is not
	  installed before Exchange Server, the protocols supported by Exchange Server
	  are not available in the IIS Key Manager.
	
	3. Install Exchange Server version 5.0 or later. Select the Authentication
	  settings for each protocol for which you want to install certificates.
	
	  a. In the Exchange Server Administrator program, expand the Configuration
	     container, and then click the Protocols object.
	
	  b. Select the appropriate protocol (for example, POP3, NNTP, LDAP) by
	     double-clicking its associated icon.
	
	  c. In the protocol's property pages, click the Authentication tab, and then
	     set the authentication levels.
	
	  d. Click OK to save the settings.
	
	4. Using the IIS Key Manager, create a key request.
	
	  a. Start the Key Manager included with Internet Information Server.
	
	  b. Locate the Exchange Server icon, and click the appropriate protocol (for
	     example, POP3, NNTP, LDAP).
	
	  c. On the menu, click Key, and then click Create New Key.
	
	  d. Type the appropriate information in the fields. Click OK to save the
	     information to a request file.
	
	     NOTE: If you are on Windows 2000 and you are prompted to automatically
	     submit the request to the on-line authority, this will fail. Continue to
	     save the information to a file and then submit the request to the Windows
	     2000 (CA) Certificate Authority through the Certificate Authority's web
	     site interface http://MachineName/certsrv. If you use a Windows 2000
	     Enterprise CA you will be prompted for which template to use. You need to
	     use the Web Server template. A stand-alone root CA will not prompt you.
	     Download the certificate from the CA in base64 encoding, not DER encoding.
	
	  e. Send the key request to a certificate distribution company (such as
	     Verisign) to obtain a certificate for the server.
	
	5. Using the IIS Key Manager, install the SSL certificate.
	
	  a. After you obtain the certificate, start the Key Manager included with
	     Internet Information Server.
	
	  b. Locate the Exchange Server icon, and then click the appropriate protocol
	     (for example, POP3, NNTP, LDAP).
	
	  c. On the menu, click Key, and then click Install Key Certificate.
	
	  d. Select the certificate file sent by the certificate vendor. If your are
	     running IIS 4.0, you must specify the server IP address or specify to bind
	     the certificate to "Default."
	
	  e. On the menu, click Servers, and click Commit Changes Now.
	
	The SSL authentication method uses public/private key technology to ensure
	privacy. The SSL protocol resides at the Open Systems Interconnection (OSI)
	presentation layer and moves data from the application layer to the TCP
	transport layer. It is responsible for authentication, encryption, and
	verification of data integrity.
	
	The authentication function assures that the data is being sent to the correct
	server and that the server is secure. Encryption ensures that data cannot be
	read by anyone other than the target server. Data integrity ensures that the
	data has not been corrupted or altered in transit.
	
	Client Obtains Server Certificate
	---------------------------------
	
	The client and server introduce themselves to each other with HELO/EHLO messages
	(for SMTP/ESMTP respectively) and exchange information containing the encryption
	method to use, session information, server certificate (containing the server's
	public key), and random data.
	
	Client Verifies Server
	----------------------
	
	The client verifies that the server certificate is from a certifying authority
	and then uses it to send a message to authenticate the server (to verify it is
	who it claims to be). If the server does not pass the authentication, the client
	typically informs the user that the server is not who it claims to be.
	
	Client/Server Determine Encryption Key to Use for This Session
	--------------------------------------------------------------
	
	If the server replies back successfully, the client and server create a random
	secret key (referred to as the Master Key in the SSL specification) from the
	random data exchanged and the encryption method specified (such as RSA).
	
	Data Encrypted with Agreed Upon Key
	-----------------------------------
	
	All data sent over the SSL channel is encrypted with the secret key.
	
	Additional query words: SSL POP3 Authentication NTOP4
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
