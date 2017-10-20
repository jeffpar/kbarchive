---
layout: page
title: "Q178471: STOP 0XA Caused by Race Condition in VDM and Process Delete"
permalink: /kb/178/Q178471/
---

## Q178471: STOP 0XA Caused by Race Condition in VDM and Process Delete

{% raw %}

	Article: Q178471
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running 16-bit programs that require the Virtual DOS Machine (VDM). the
	following STOP error may occur:
	
	  Stop 0x0000000A (0x00000084, 0x00000002, 0x00000001, 0x80003D4A)
	  Hal.dll.
	
	This problem is most likely to occur on systems with more than one processor.
	
	CAUSE
	=====
	
	A race condition exists between process delete and delayed virtual interrupt
	processing. This causes a NULL parameter to be passed to the Hardware
	Abstraction Layer (HAL) acquire spin lock routine.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Apply Ntoskrnl.exe if the target computer has only one processor.
	
	Apply Ntoskrnlmp.exe if the target computer is a multiprocessor system.
	
	NOTE: After copying Ntkrnlmp.exe to the target computer, rename it to
	Ntoskrnl.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: 4.00 patch prodnt multi uni uniprocessor
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
