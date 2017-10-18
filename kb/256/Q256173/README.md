---
layout: page
title: "Q256173: Possible Hang When Multiple Users Access Data on Same Dfs Share"
permalink: kb/256/Q256173/
---

## Q256173: Possible Hang When Multiple Users Access Data on Same Dfs Share

	Article: Q256173
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kbWinNT4sp6fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two or more Terminal Server users are running a program that accesses the
	same data file on the same distributed file system (Dfs) share, Terminal Server
	may stop responding (hang). This behavior has occurred only with some programs.
	
	CAUSE
	=====
	
	Because of a Dfs timing problem, a deadlock can occur in the redirector. Network
	access can stop while waiting for this deadlock.
	
	STATUS
	======
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
