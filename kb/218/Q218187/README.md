---
layout: page
title: "Q218187: XADM: Error 8004010f-0501-8004010f When Moving Mailbox"
permalink: /kb/218/Q218187/
---

## Q218187: XADM: Error 8004010f-0501-8004010f When Moving Mailbox

	Article: Q218187
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Moving a mailbox from one server to another fails with the following error
	message:
	
	  Unexpected error <<0xc0040000 - The client operation failed. Microsoft
	  Exchange Information Store ID no. 8004010f-0501-8004010f>> occurred.
	
	CAUSE
	=====
	
	During the Move Mailbox operation, when Exchange Server tried to read the
	ptagMailFlag field for an embedded message, it was not able to because the flag
	is not available, and the operation failed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	NOTE: The fix should be applied to the source and destination Exchange Server
	computers.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2560.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2560.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2560.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
