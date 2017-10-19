---
layout: page
title: "Q135774: Performance Monitor Counters Produce Unlikely Results"
permalink: /kb/135/Q135774/
---

## Q135774: Performance Monitor Counters Produce Unlikely Results

	Article: Q135774
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the HALAPIC.DLL hardware abstraction layer (HAL), applications that
	query performance counters may produce unlikely results. For example, Network
	Monitor Agent counters may produce numbers for network use that are known to be
	incorrect.
	
	CAUSE
	=====
	
	Applications that query Performance Counters on Intel based symmetric multi-
	processing (SMP) computers may receive incorrect timer information. As a result,
	counter values in Performance Monitor, and other programs that are calculated
	against this timer, may be incorrect.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem has been corrected in the latest U.S. Service Pack for
	Windows NT version 3.51. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
