---
layout: page
title: "Q250450: XFOR: Using Notes Document Type Cause Address Books to Reload"
permalink: kb/250/Q250450/
---

## Q250450: XFOR: Using Notes Document Type Cause Address Books to Reload

	Article: Q250450
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
	
	When you use the Lotus Notes document type field (Type) to synchronize
	information from Notes to Exchange Server, the target Address Books are reloaded
	every cycle although the original Exchange Server entries have not been changed.
	
	CAUSE
	=====
	
	When the Type field is specified in the Amap.tbl file and the Mapnotes.tbl file
	does not specify the mapping value of Type, directory synchronization between
	Notes and Exchange Server (the Dxanotes process) tries to compare the protected
	value in Notes against a NULL value, which causes all of the entries in the
	target Address Book to reload.
	
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
	
