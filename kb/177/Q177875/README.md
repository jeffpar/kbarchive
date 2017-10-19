---
layout: page
title: "Q177875: XADM: Memory Leak in Directory Service of Exchange Server"
permalink: /kb/177/Q177875/
---

## Q177875: XADM: Memory Leak in Directory Service of Exchange Server

	Article: Q177875
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Exchange Server computer has been running for a long time, it may have a
	small memory leak in the directory service component. This can be observed by
	using Performance Monitor and checking the private byte counter of the Microsoft
	Exchange directory service process (Dsamain.exe). The observed symptom is that
	the counter increases over a time frame of days.
	
	CAUSE
	=====
	
	The Exchange directory service allocates memories from heap, which should be
	freed when the task is finished or during shutdown of the directory service.
	However, some of the allocated memory is not freed properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: DS
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
