---
layout: page
title: "Q216538: STOP 0x0000000A in NTOSKRNL at 801453ea"
permalink: /kb/216/Q216538/
---

## Q216538: STOP 0x0000000A in NTOSKRNL at 801453ea

	Article: Q216538
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix _IK
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Server 4.0, Terminal Server Edition, a STOP 0x0000000A
	at address 801453ea may occur in NTOSKRNL.
	
	CAUSE
	=====
	
	A routine in the kernel that handles removing items from a linked list has a
	problem on multiprocessor computers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 tse wts
	
	======================================================================
	Keywords          : kbWinNT400sp5fix _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
