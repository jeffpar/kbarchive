---
layout: page
title: "Q271307: XWEB: Invalid Calendar Recurrence Causes Looping in Cdo.dll"
permalink: /kb/271/Q271307/
---

## Q271307: XWEB: Invalid Calendar Recurrence Causes Looping in Cdo.dll

	Article: Q271307
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
	
	The Inetinfo.exe process may experience high CPU usage (80 to 100 percent),
	causing Outlook Web Access (OWA) to become unavailable. OWA users may not be
	able to access any of their e-mail information.
	
	CAUSE
	=====
	
	One or more users may have invalid Outlook recurring appointments in their
	calendar folder. An example of this is a damaged recurring appointment that may
	occur on the 0th day of the month.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : CDO MAPI
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
