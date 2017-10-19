---
layout: page
title: "Q152271: EnumServicesStatus() Results in Services.exe Memory Leak"
permalink: /kb/152/Q152271/
---

## Q152271: EnumServicesStatus() Results in Services.exe Memory Leak

	Article: Q152271
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Applications that repeatedly use the Win 32 call EnumServicesStatus() may result
	in a memory leak in Services.exe.
	
	CAUSE
	=====
	
	Under certain situations a call to EnumServicesStatus() would result in
	Services.exe setting a heap block pointer to NULL without freeing the block
	first; the heap pointer that is not freed is the memory leak.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
