---
layout: page
title: "Q122961: Print Job Stalls Printing to NEC NPDL2"
permalink: /kb/122/Q122961/
---

## Q122961: Print Job Stalls Printing to NEC NPDL2

{% raw %}

	Article: Q122961
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect a MIPS computer running Windows NT to a NEC PC-PR2000/4 or NEC
	PC-PR4000E/4, install the appropriate printer driver, and attempt to print
	TESTJ.TXT (from the floppy disk provided with the printer), the print job
	stalls.
	
	CAUSE
	=====
	
	When a memory allocation request is issued (especially with CacheAligned option)
	at a particular range of memory block size for non-paged pool, overflow of an
	internal array occurs. As a result, a spin-lock of non- paged pool is not
	unlocked, and IRQL is left as 2 (unchanged).
	
	This error occurs within ExAllocatePoolWithQuota which is called out from
	NtWriteFile, when a pool block for data copy is allocated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	S E R V P A C K
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt 3.50 npdl2 blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
