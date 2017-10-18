---
layout: page
title: "Q184798: SSL: Connections May Fail Using Online Requested Certificates"
permalink: kb/184/Q184798/
---

## Q184798: SSL: Connections May Fail Using Online Requested Certificates

	Article: Q184798
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect using Secure Sockets Layer (SSL) to an Internet
	Information Server version 4.0 (IIS) that has a server certificate from an
	online Microsoft Certificate Server, you may receive the following error
	message:
	
	  Internet Explorer cannot open the Internet site <address>
	  A connection with the server could not be established.
	
	CAUSE
	=====
	
	When you perform an online request, the certificate returned by Certificate
	Server is not bound with an IP address or port number. As a result, IIS does not
	use this certificate for incoming SSL connections.
	
	WORKAROUND
	==========
	
	When you get the certificate back from the online request, a dialog box appears
	in Key Manager. Click Add, and then click OK. The certificate is now bound to
	all unassigned IP addresses and port numbers.
	
	MORE INFORMATION
	================
	
	NOTE: The above steps are not required if the certificate is requested from a
	well-known certificate authority, such as VeriSign, or when you are requesting a
	certificate from Certificate Server through the file-based mechanism (that is,
	not an online request).
	
	IIS 4.0 ships with a tool named Key Manager, Keyring.exe, to request and process
	server certificates. One of the options is to request a certificate from an
	online Microsoft Certificate Server. Online indicates that Certificate Server is
	running on the same computer as IIS, and the request is made without using a
	text-based approach.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : WINNT:1.0,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
