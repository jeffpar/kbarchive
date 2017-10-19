---
layout: page
title: "Q250671: XFOR: Notes Group Type Attr. Doesn't Sync to Exchange Directory"
permalink: /kb/250/Q250671/
---

## Q250671: XFOR: Notes Group Type Attr. Doesn't Sync to Exchange Directory

	Article: Q250671
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 19-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run directory synchronization (dirsync) from Lotus Notes to Microsoft
	Exchange Server and you use mapping rules, the Type document property may not be
	synchronized correctly from Notes to Exchange Server.
	
	CAUSE
	=====
	
	The Dxanotes process does not pick up Notes Group type attributes during
	synchronization to Exchange Server.
	
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
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
