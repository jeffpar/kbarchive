---
layout: page
title: "Q159971: SetTimer() API Causes Memory Leak in the WOW Subsystem"
permalink: /kb/159/Q159971/
---

## Q159971: SetTimer() API Causes Memory Leak in the WOW Subsystem

	Article: Q159971
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run 16-bit applications, such as Microsoft Project 4.0, Microsoft Mail
	3.0, or Schedule+ 1.0, which frequently call the SetTimer() API, the system may
	run out of memory resulting in poor performance and very sluggish response.
	
	The following error message may also appear:
	
	  System Process - Out of Virtual Memory
	
	  Your system is running low on virtual memory. Please close some applications.
	  You can then start the System option in the Control Panel and choose the
	  Virtual Machine button to create an additional page file or to increase the
	  size of your current paging file.
	
	CAUSE
	=====
	
	The SetTimer API causes a memory leak in the Windows on Windows (WOW) subsystem.
	A memory leak is caused by an application or process that allocates memory for
	use, but does not later free it up when done. The result is that available
	memory is completely used up over time, often causing the system to stop
	functioning properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt wow
	
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
