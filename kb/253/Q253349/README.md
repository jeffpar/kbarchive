---
layout: page
title: "Q253349: XCON: Response Files from GroupWise Are Put in Badfiles Folder"
permalink: kb/253/Q253349/
---

## Q253349: XCON: Response Files from GroupWise Are Put in Badfiles Folder

	Article: Q253349
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you receive Directory Synchronization Service (DXA) response files from
	Novell GroupWise, some of the files are randomly routed to the Badfiles folder.
	The DXA process may stop responding for an hour if the response file is
	inappropriately moved to the Badfiles folder and the connector is not manually
	restarted.
	
	CAUSE
	=====
	
	When the DXA response file is locked down by the application programming
	interface (API) gateway for writing, the router service tries to pick the
	response file up. The pickup does not work, so the router tries to move the
	response file to the Badfiles folder, which also does not work. This cycle
	repeats every 8 seconds. Eventually the API gateway releases the files and the
	router moves the response file to the Badfiles folder.
	
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
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
