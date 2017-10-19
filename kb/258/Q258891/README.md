---
layout: page
title: "Q258891: XADM: Information Store Stops Responding with Access Violation"
permalink: /kb/258/Q258891/
---

## Q258891: XADM: Information Store Stops Responding with Access Violation

	Article: Q258891
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server information store (Store.exe) may cause an access violation
	and stop responding. If Dr. Watson is active as the default debugger, then a Dr.
	Watson log and a User.dmp file (if Dr. Watson is configured to create a User.dmp
	file) may be generated.
	
	CAUSE
	=====
	
	This problem can occur because under certain conditions, a message property
	variable is left uninitialized.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+----------------------+
	| File name | Version  | 
	+----------------------+
	| Store.exe | 5.5.2647 | 
	+----------------------+
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words: XMRP
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
