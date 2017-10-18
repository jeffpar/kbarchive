---
layout: page
title: "Q185996: XFOR: Internet Mail Service Takes Very Long Time to Start"
permalink: kb/185/Q185996/
---

## Q185996: XFOR: Internet Mail Service Takes Very Long Time to Start

	Article: Q185996
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a Microsoft Exchange Server computer that contains a directory with a large
	number of users, Address Book views, and recipient containers, the Internet Mail
	Service may take an unusually long time to start.
	
	CAUSE
	=====
	
	When you start the Internet Mail Service, it obtains the entire Address Book
	hierarchy, even though it only needs the global address list (GAL). If the
	Address Book hierarchy is very large, the Internet Mail Service takes a long
	time to start.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When you start the Internet Mail Service, it uses the Messaging Application
	Programming Interface (MAPI) to obtain Address Book information from the Address
	Book Provider dynamic-link library (Emsabp.dll or Emsabp32.dll). After you apply
	the fix, the Internet Mail Service only requests the GAL.
	
	Additional query words: abp
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
