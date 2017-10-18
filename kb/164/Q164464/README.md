---
layout: page
title: "Q164464: XFOR: Can't Mail to Exchange Account &quot;Admin&quot; from MSMail Client"
permalink: kb/164/Q164464/
---

## Q164464: XFOR: Can't Mail to Exchange Account &quot;Admin&quot; from MSMail Client

	Article: Q164464
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail messages sent to a Microsoft Exchange Server account named Admin from an
	MSMail client through the MSMail Connector do not arrive in the Admin's mailbox
	on Exchange Server.
	
	CAUSE
	=====
	
	This is by design. Mail destined for the Exchange Admin account is sent to the
	alias listed in the Administrator entry on the MSMail Connector Interchange.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
