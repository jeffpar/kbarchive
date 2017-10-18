---
layout: page
title: "Q166311: Memory Leak Retrieving OLE Property Values with Service Pack 2"
permalink: kb/166/Q166311/
---

## Q166311: Memory Leak Retrieving OLE Property Values with Service Pack 2

	Article: Q166311
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbolekbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	- Microsoft Windows NT Server version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Applications that retrieve OLE property values from a file's property store
	exhibit a gradual increase in memory usage. For example, a program that opens a
	file's property store, retrieves a property value, and then closes the property
	store 100 times might see its working set grow by 4 KB as a result of this
	problem.
	
	The problem described here exists only with Windows NT version 4.0 with Service
	Pack 2 applied.
	
	CAUSE
	=====
	
	A function in Ole32.dll does not correctly delete all the resources it allocates
	on behalf of the application reading the OLE property values.
	
	
	RESOLUTION
	==========
	
	Obtain the hotfix referenced in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 4.00 sp2
	
	======================================================================
	Keywords          : kbenv kbole kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search
	Issue type        : kbbug
	
	=============================================================================
	
