---
layout: page
title: "Q163789: XFOR: UUEncoded Non-TNEF Embedded Messages Translated"
permalink: kb/163/Q163789/
---

## Q163789: XFOR: UUEncoded Non-TNEF Embedded Messages Translated

	Article: Q163789
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server Internet Mail Connector (IMC) and Internet Mail
	Service (IMS) will perform character set translation on an embedded message
	within a UUEncoded non-TNEF message as specified for the recipient domain. This
	is by design.
	
	MORE INFORMATION
	================
	
	The IMC and IMS converts the embedded message because Transport Neutral Encoding
	Format (TNEF) is not specified. To ensure the message becomes encapsulated and
	is not translated, use TNEF encoding to send the embedded message.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
