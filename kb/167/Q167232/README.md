---
layout: page
title: "Q167232: STOP:0x0000000A While Using HP NetServer Assistant 2.5"
permalink: /kb/167/Q167232/
---

## Q167232: STOP:0x0000000A While Using HP NetServer Assistant 2.5

	Article: Q167232
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HP NetServer System running HP NetServer Assistant software version 2.5 fails
	with STOP:0x0000000A.
	
	CAUSE
	=====
	
	The CIOArrayMgmnt agent in NetServer Assistant 2.5 is supposed to monitor the
	hard disk drives, but fails. The CIOArrayMgmnt agent reports errors when in fact
	there are no errors.
	
	This typically results in STOP:0x0000000A anywhere from two to seven hours later.
	
	RESOLUTION
	==========
	
	To resolve this problem, do either of the following:
	
	- Disable the CIOArrayMgmnt agent.
	
	  -or-
	
	- Upgrade to Net Server Assistant version 2.51.
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Windows NT versions 3.51 and 4.0 and
	HP NetServer Assistant software version 2.5.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 0x0a prodnt 0x0000000A crash crashes
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
