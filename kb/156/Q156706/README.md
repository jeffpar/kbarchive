---
layout: page
title: "Q156706: XCON: Messages Forwarded from DEC ALL IN ONE User Missing Date"
permalink: kb/156/Q156706/
---

## Q156706: XCON: Messages Forwarded from DEC ALL IN ONE User Missing Date

	Article: Q156706
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Dec All In One user forwards a message to a Microsoft Exchange user, the
	message will be missing the date field.
	
	MORE INFORMATION
	================
	
	The message route taken in this particular case is DEC ALL IN ONE to XMR Mailbus
	to Microsoft Exchange. The forwarded message appears as the envelope and when
	you open it, it is missing the Sent field information. In other words, it looks
	like a composed message that hasn't been sent yet.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
