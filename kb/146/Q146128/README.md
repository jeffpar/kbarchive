---
layout: page
title: "Q146128: XADM: Cannot Disable Proxy Address Generators"
permalink: kb/146/Q146128/
---

## Q146128: XADM: Cannot Disable Proxy Address Generators

	Article: Q146128
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc4
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Exchange version 4.0 Administrator program, there are three
	default e-mail proxy addresses installed by default: MSMail, X400, and SMTP.
	These addresses are an integral part of the program and cannot be disabled.
	
	MORE INFORMATION
	================
	
	You cannot control the generation of proxy addresses for imported recipients or
	newly created recipients. For example, when you create or import users, the
	Microsoft Exchange Administrator program automatically generates an X.400, a
	Microsoft Mail, and an SMTP proxy address for each mailbox. You cannot force
	Exchange Server to generate only one or two of the proxy addresses. The
	Administrator program generates all three proxy addresses.
	
	This behavior is by product design.
	
	To find these addresses, click the Configuration container, open the Site
	Addressing Container properties, and then click the Site Addressing tab. The
	Remove button on this page can be used to remove a specific address type from
	all existing mailboxes, but Exchange Server will generate all types of address
	for new or imported mailboxes.
	
	
	
	Additional query words: FAQ
	
	======================================================================
	Keywords          : kbsetup kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
