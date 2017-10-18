---
layout: page
title: "Q249806: STOP 0x0000001E Error Message on Windows NT 4.0 Terminal Server"
permalink: kb/249/Q249806/
---

## Q249806: STOP 0x0000001E Error Message on Windows NT 4.0 Terminal Server

	Article: Q249806
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer that is running Windows NT Server 4.0, Terminal Server Edition, may
	trap with a "STOP 0x0000001e" error message, generally in Win32k.sys or
	Ntoskrnl.exe. The trapping thread is in the Winlogon process. The parameters
	vary, based on the specific location of the trap.
	
	CAUSE
	=====
	
	This behavior can occur if a pool header for a pool that was allocated with the
	Ussy pool tag is corrupted during the loading of a user profile. The corrupted
	pool is located in the Winstation pool space, preventing the use of Special Pool
	to track down the item causing the corruption.
	
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
