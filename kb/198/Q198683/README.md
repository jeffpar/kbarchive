---
layout: page
title: "Q198683: Err Msg: The Security Library Has Encountered an Improperly..."
permalink: /kb/198/Q198683/
---

## Q198683: Err Msg: The Security Library Has Encountered an Improperly...

	Article: Q198683
	Product(s): Internet Information Server
	Version(s): winnt:1.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a server certificate issued by Microsoft Certificate Server, the
	following error may occur in Netscape Navigator and Netscape Communicator when
	you connect to a secure Web server using Secure Sockets Layer (SSL):
	
	  The security library has encountered an improperly formatted DER-encoded
	  message.
	
	CAUSE
	=====
	
	This error occurs because the browser is unable to correctly parse the server
	certificate.
	
	WORKAROUND
	==========
	
	To work around this problem, correct the certificate by re-issuing the server
	certificate and making sure the Distinguished Name (DN) uses only valid
	PrintableString characters.
	
	MORE INFORMATION
	================
	
	Most X.509 certificates use strings called PrintableString to represent text
	information. PrintableStrings are strings of characters contained within the set
	{ a-zA-Z0-9'()+,-./:=? } and the space character. Microsoft Certificate Server
	is not restricted to using these characters however. If any part of the DN in
	the certificate is not a PrintableString, then Certificate Server will use
	another string type such as Unicode. The Netscape parser cannot understand
	Unicode, and therefore, issues the above error.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : winnt:1.0,3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
