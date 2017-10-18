---
layout: page
title: "Q234432: XADM: Running Isinteg May Truncate Databases to 8 KB"
permalink: kb/234/Q234432/
---

## Q234432: XADM: Running Isinteg May Truncate Databases to 8 KB

	Article: Q234432
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you receive one or more of the following events or error messages, visible
	from Event Viewer or command prompt, while attempting to start the Microsoft
	Exchange Server information store, and if you then run Isinteg, it may truncate
	the database file to 8 KB.
	
	Sample error message in Event Viewer:
	
	  Event ID: 0
	  Source: ESE97
	  Type: Error
	  Category: Logging/Recovery
	  Description: MSExchangeIS ((451)) -1019
	
	Sample command prompt error message:
	
	  A service specific error occurred: 4294966277
	
	CAUSE
	=====
	
	Isinteg has encountered a damaged page in the Microsoft Exchange database and
	the page appears to be uninitialized but it is actually in use. Only certain
	pages that have become damaged will cause this to happen and therefore, the
	chances are small this problem will occur.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: ESE97
	
	+---------------------+
	| File name | Version | 
	+---------------------+
	| 5.5.2632  | Ese.dll | 
	+---------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
