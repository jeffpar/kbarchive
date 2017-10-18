---
layout: page
title: "Q156703: XADM: Space Character not Supported for SMTP Custom Recipients"
permalink: kb/156/Q156703/
---

## Q156703: XADM: Space Character not Supported for SMTP Custom Recipients

	Article: Q156703
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
	
	When you try to create an SMTP custom recipient with the following format:
	
	  "Full Name"@Domain
	
	the space is stripped and the address is created as:
	
	  FullName@Domain.
	
	MORE INFORMATION
	================
	
	RFC 822 specifies that a space in an SMTP address is valid and must be entered
	inside quotes as shown above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: space smtp proxy
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
