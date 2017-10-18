---
layout: page
title: "Q157007: XADM: Secondary Proxy Address Replaces Target Address of CR"
permalink: kb/157/Q157007/
---

## Q157007: XADM: Secondary Proxy Address Replaces Target Address of CR

	Article: Q157007
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
	
	When you create a Custom Recipient (CR) and add a secondary proxy address that
	is the same type (SMTP, X400, or MS) as the target address, the target address
	field will be replaced by the secondary proxy address field.
	
	
	CAUSE
	=====
	
	The E-Mail address and value in the proxy address list are kept in sync by a
	case insensitive comparison of the proxy address to figure out whether the
	E-Mail address should be updated. This is incorrect because the primary proxy
	address is always in upper case and the secondary address is always lower case.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: target
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
