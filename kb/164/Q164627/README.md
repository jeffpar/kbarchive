---
layout: page
title: "Q164627: SGC-Enabled Clients Have Trouble Connecting to SGC-Enabled IIS"
permalink: kb/164/Q164627/
---

## Q164627: SGC-Enabled Clients Have Trouble Connecting to SGC-Enabled IIS

	Article: Q164627
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an IIS 3.0 server with the Server Gated Cryptography (SGC) Schannel.dll
	update and a valid SGC certificate installed, SGC-enabled clients either cannot
	connect at 128-bit strength or they cannot connect at all.
	
	Specifically, Internet Explorer 3.02 with the SGC update installed only connects
	using a 40-bit key strength, while Internet Explorer 4.0 clients cannot connect
	at all, and get the following error:
	
	  Internet Explorer cannot open the Internet site http://www.xxxxxxx.yyy.
	  The supplied certificate is invalid.
	
	Netscape Communicator 4.0x always makes the encryption with a 40-bit key instead
	of a 128-bit key.
	
	CAUSE
	=====
	
	The name on the SGC certificate does not match the name of the server on which
	the certificate is installed. SGC certificates have the name of the machine on
	which they should be installed embedded in the certificate. If the name in the
	SGC certificate does not match the name of the server, the SGC clients are not
	able to negotiate 128-bit encryption and may completely fail any connect
	attempt.
	
	RESOLUTION
	==========
	
	Obtain an SGC certificate for your server that was generated for your machine
	name. Or you can rename your server to match the name on the certificate.
	
	MORE INFORMATION
	================
	
	For more information on how to obtain the updated version of Schannel.dll,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q148427 : Generic SSL (PCT/TLS) Updates for IIS and MS Internet Products
	
	For more information on the Server Gated Cryptography (SGC) version of
	Schannel.dll, please go to the following Microsoft web site:
	
	  http://www.microsoft.com/technet/security/prodtech.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	Additional query words: ie
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis300
	Version           : :3.0
	
	=============================================================================
	
