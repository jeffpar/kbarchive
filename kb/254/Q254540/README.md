---
layout: page
title: "Q254540: XCON: GW Router Has Trouble with Multiple Messages with Same ATT"
permalink: kb/254/Q254540/
---

## Q254540: XCON: GW Router Has Trouble with Multiple Messages with Same ATT

	Article: Q254540
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Multiple messages that contain attachments that have the same name and that are
	processed by the Exchange Server 5.5 GroupWise Router (Gwrouter.exe) are placed
	in the Badmail folder.
	
	CAUSE
	=====
	
	The GroupWise Router does not correctly process messages that contain the same
	attachment name and ends up incorrectly placing them in the Badmail folder.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
