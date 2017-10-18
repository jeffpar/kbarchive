---
layout: page
title: "Q156707: XADM: NDR's Due to Non-Printable Characters in the DDA Value"
permalink: kb/156/Q156707/
---

## Q156707: XADM: NDR's Due to Non-Printable Characters in the DDA Value

	Article: Q156707
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message is received by Microsoft Exchange and the sender's address
	contains a DDA Value, characters within the string might be translated by
	Microsoft Exchange. This can cause the originating system to refuse to accept
	replies to the sender.
	
	CAUSE
	=====
	
	The only characters allowed in the ORName address DomainDefinedAttribute are
	printable characters. However, Microsoft Exchange translates character sequences
	used to indicate special characters in DDA values and sends these non-printable
	characters to other email systems. For example: the character string (b) is
	translated to ! and the character string (a) is translated to @.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
