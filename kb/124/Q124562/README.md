---
layout: page
title: "Q124562: CPU Utilization on a NCR3450"
permalink: /kb/124/Q124562/
---

## Q124562: CPU Utilization on a NCR3450

	Article: Q124562
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT version 3.5 Server, Performance Monitor CPU Utilization
	counter on a four processors NCR3450 shows CPU # 3 at a higher utilization rate
	then CPUs #0, and #2. If the computer is idle, the CPU utilization for CPU #3
	could be as high as 16 percent, compared to 4 to 6 percent on the rest of the
	CPU.
	
	CAUSE
	=====
	
	NCR HAL is not distributing the timer interrupts properly across the processors.
	Although the performance monitor shows more CPU utilization on CPU3, The
	performance of the system is not affected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	The NCR product discussed here is manufactured by NCR Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
