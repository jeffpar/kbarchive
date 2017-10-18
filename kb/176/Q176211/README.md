---
layout: page
title: "Q176211: Console-mode Apps May Run Slowly on Multiprocessor Computers"
permalink: kb/176/Q176211/
---

## Q176211: Console-mode Apps May Run Slowly on Multiprocessor Computers

	Article: Q176211
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A series of MS-DOS-based console applications may take a long time (perhaps
	several minutes) to complete on a multiprocessor computer. The console windows
	may remain blank and appear to stop responding (hang). All the applications do
	eventually finish, but this may take an unusual amount of time.
	
	The same series of applications will finish in a few seconds on a single
	processor computer.
	
	CAUSE
	=====
	
	A console handle table lock is being held too long during the freeing of a
	console. Processing for other console-related activities is delayed while the
	lock is held.
	
	The problem is not usually seen on single processor computers as a context switch
	to another console process is unlikely during console cleanup. On a
	multiprocessor computer, however, multiple console-mode processes may be
	executing simultaneously, which greatly increases the chance of encountering
	this problem.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	This fix modifies console handling so that the handle table lock is released
	during noncritical sections of console cleanup. This allows other simultaneously
	executing console processes to continue and finish in a reasonable time frame.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	All MS-DOS console-mode applications are affected by this problem on
	multiprocessor computers under Windows NT 4.0. Windows applications are not
	affected.
	
	This problem has been seen when attempting to start multiple PERL scripts as CGI
	applications run in console-mode on multiprocessor intranet web servers.
	
	
	Additional query words: wedge msdos dos box cmd command multi-processor Ntvdm vdm mp
	======================================================================
	Keywords          : kb3rdparty kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
