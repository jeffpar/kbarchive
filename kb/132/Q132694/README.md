---
layout: page
title: "Q132694: Windows NT May Hang With DEC Pathworks Installed"
permalink: kb/132/Q132694/
---

## Q132694: Windows NT May Hang With DEC Pathworks Installed

	Article: Q132694
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT servers with two or more CPUs and DEC Pathworks for Windows NT,
	versions 4.1 or 4.1b installed, stop responding (hang). No STOP message appears,
	and there no hardware or software errors are logged.
	
	CAUSE
	=====
	
	This problem occurs because DEC Pathworks for Windows NT acquires and releases
	spinlocks in reverse order in the NetBIOS over DECNet code. This causes the
	computer to hang when one CPU tries to acquire a lock still held by another CPU.
	The following is a simplified description of how this condition occurs:
	
	1. On Processor 0, a DEC Pathworks for Windows NT routine acquires Lock A
	  spinlock, and then, while holding Lock A, tries to acquire Lock B spinlock.
	
	2. On Processor 1, a DEC Pathworks for Windows NT routine acquires Lock B
	  spinlock, and then, while holding Lock B, tries to acquire Lock A spinlock.
	
	STATUS
	======
	
	DEC Pathworks is currently testing a fix for this problem.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.50 3.51 prodnt spin lock
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
