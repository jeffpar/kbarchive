---
layout: page
title: "Q137585: STOP 0x0000007F on Pentium Pro Systems Running Windows NT 3.51"
permalink: kb/137/Q137585/
---

## Q137585: STOP 0x0000007F on Pentium Pro Systems Running Windows NT 3.51

	Article: Q137585
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pentium Pro systems running Windows NT 3.51 and using Halmps.dll, which is the
	Hardware Abstraction Layer DLL for most Intel multiprocessor systems, or
	Halapic.dll, the uniprocessor version of the same HAL, may experience repeated
	STOP 0x0000007F (UNEXPECTED_KERNEL_MODE_TRAP) errors.
	
	CAUSE
	=====
	
	Hardware interrupts are not being disabled at the appropriate time, resulting in
	the possibility of a stack fault, given the timing characteristics of the
	Pentium Pro processor.
	
	NOTE: The same STOP code may also result from other causes, so the fix mentioned
	here will not resolve all instances of this problem. For more information,
	please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE: Q137539
	  TITLE : "General Causes of STOP 0x0000007F."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Solution Type     : kbfix
	
	=============================================================================
	
