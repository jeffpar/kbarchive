---
layout: page
title: "Q222912: XADM: Cannot Modify Database Paths on Clustered Server"
permalink: kb/222/Q222912/
---

## Q222912: XADM: Cannot Modify Database Paths on Clustered Server

	Article: Q222912
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Microsoft Exchange Server Administrator program to view the
	properties of an Exchange Server computer in a clustered environment, and you
	click the Database Paths tab, and then modify the location of one of the objects
	in the list, the object is not moved successfully. The associated services are
	stopped, the folder is moved, and then the services are restarted, but the
	registry is not updated correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	WORKAROUND
	==========
	
	To prevent this problem from occurring when you modify the database paths for an
	Exchange Server computer in a clustered environment, use the Performance
	Optimizer program to modify the paths instead of the Administrator program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server version 5.5
	Service Pack 3.
	
	
	Additional query words: clustered cluster server
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
