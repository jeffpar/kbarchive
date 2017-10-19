---
layout: page
title: "Q243759: XCON: MTA May Stop on 9405 Errors with Access Violation"
permalink: /kb/243/Q243759/
---

## Q243759: XCON: MTA May Stop on 9405 Errors with Access Violation

	Article: Q243759
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) may repeatedly stop
	with the following event in the Windows NT Event Viewer:
	
	  Event 9405:
	
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Access violation (0xc0000005) at Address 0x5e215a reading from 0x0. [BASE
	  XFER-OUT 20] (16)
	
	CAUSE
	=====
	
	The MTA is not properly deleting an entity control block after routing a
	message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
