---
layout: page
title: "Q193283: XADM: Meeting Update Generates NDR After Moving Server"
permalink: kb/193/Q193283/
---

## Q193283: XADM: Meeting Update Generates NDR After Moving Server

	Article: Q193283
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 exc55sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a meeting request to another user, use the Move Server Wizard to
	move the Microsoft Exchange Server computer on which your mailbox is located to
	a different site, and then send a meeting update to the other user, you may
	receive a non-delivery report (NDR).
	
	
	CAUSE
	=====
	
	When you send the meeting update under these conditions, the attendee's X.400
	address contains a blank common name (/cn=) field. This prevents the server from
	delivering the meeting update.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Mdbmsg.dll   5.5.2397.0
	  Store.exe    5.5.2397.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
