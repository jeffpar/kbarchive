---
layout: page
title: "Q264126: XADM: Cannot Send SSL Messages After Installing Certificate"
permalink: kb/264/Q264126/
---

## Q264126: XADM: Cannot Send SSL Messages After Installing Certificate

	Article: Q264126
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you obtain a new certificate from a Microsoft Windows 2000 certification
	authority (CA), the organization name, common name, and other values specified
	in the certificate request may not appear in the certificate's properties. In
	addition, if you install the certificate, commit the changes, and then attempt
	to send messages using Secure Sockets Layer (SSL) authentication, the Exchange
	Server computer may not be able to establish the SSL connection.
	
	CAUSE
	=====
	
	This problem occurs when the Windows 2000 certification authority issues the
	certificate using base-64 encoding instead of binary encoding. The Key Manager
	program (Keyring.exe) that is used to install certificates on an Exchange Server
	computer does not support base-64-encoded certificates.
	
	WORKAROUND
	==========
	
	To work around this problem, convert the base-64-encoded certificate you
	obtained from the Windows 2000 certification authority to use binary encoding
	instead.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
