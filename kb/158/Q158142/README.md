---
layout: page
title: "Q158142: WM_DDE_EXECUTE API Causes a Memory Leak in the WOW Subsystem"
permalink: kb/158/Q158142/
---

## Q158142: WM_DDE_EXECUTE API Causes a Memory Leak in the WOW Subsystem

	Article: Q158142
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a 16-bit DDE application on Windows NT, you may run out of memory.
	This may also cause the following error message to appear:
	
	  System Process - Out of Virtual Memory
	
	  Your system is running low on virtual memory. Please close some applications.
	  You can then start the System option in the Control Panel and choose the
	  Virtual Machine button to create an additional page file or to increase the
	  size of your current paging file.
	
	CAUSE
	=====
	
	WM_DDE_EXECUTE API causes a memory leak in the Windows on Windows (WOW)
	subsystem. A memory leak is caused by an application or process that allocates
	memory for use, but does not later free it up when done. The result is that
	available memory is completely used up over time, often causing the system to
	stop functioning properly.
	
	
	RESOLUTION
	==========
	
	Use the updated Wow32.dll file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
