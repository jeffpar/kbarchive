---
layout: page
title: "Q237174: XIMS: IMAPISession::OpenMsgStore Leaks Approximately 40-60 Bytes"
permalink: kb/237/Q237174/
---

## Q237174: XIMS: IMAPISession::OpenMsgStore Leaks Approximately 40-60 Bytes

	Article: Q237174
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 13-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- MAPI 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Repeated calls to IMAPISession::OpenMsgStore cause a memory leak even after a
	corresponding close function.
	
	CAUSE
	=====
	
	An internal object is being constructed that in turn creates a critical section.
	When the object is destroyed, the corresponding critical section is not
	destroyed, resulting in a memory leak.
	
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
	Component         : MDB
	Technology        : kbAudDeveloper kbCDOsearch kbMAPISearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMAPIExt
	Version           : WINDOWS:; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
