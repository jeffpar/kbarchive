---
layout: page
title: "Q160670: FPSCR is Not Being Saved Across Thread Context Switches"
permalink: kb/160/Q160670/
---

## Q160670: FPSCR is Not Being Saved Across Thread Context Switches

	Article: Q160670
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FPSCR (Floating Point Status and Control Register) is not being saved during
	the thread context save/restore procedure. It may cause an invalid
	floating-point exception mask.
	
	NOTE: This problem happens on PowerPC-based computers only.
	
	CAUSE
	=====
	
	When a process has multiple threads, the FPSCR register is not being saved
	during the thread context save restore procedure. It is being treated as a per
	process resource rather than a per thread resource.
	
	For example:
	
	The first thread in a process unmasks a floating point exception, for example
	divide by zero, and then spawns another thread and waits for it to exit. The
	other thread unmasks a different exception, for example underflow, and then
	exits. When the first thread gets scheduled, the FPSCR register is set to
	underflow being unmasked, but divide by zero being masked. Thus, when the first
	thread executes, the FPSCR register is set to the state left by the second
	thread.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt ppc powerpc Dr Watson
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
