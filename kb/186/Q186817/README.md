---
layout: page
title: "Q186817: 100 Percent CPU Usage with RCMD or REMOTE"
permalink: kb/186/Q186817/
---

## Q186817: 100 Percent CPU Usage with RCMD or REMOTE

	Article: Q186817
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the PMON Resource Kit utility under a remote command session (RCMD or
	REMOTE) leads to 100 percent CPU usage at the server. About 50 percent of the
	CPU is used by Csrss.exe and the other 50 percent by PMON. This issue may occur
	when using VI or many other utilities.
	
	CAUSE
	=====
	
	The problem is not caused by PMON and is not caused by the RCMD service but
	rather is a combination of the two utilities.
	
	RESOLUTION
	==========
	
	The recommended method of resolving this issue is to use the Remote Console
	resource kit utility. This utility does not redirect standard input and standard
	output but polls video memory changes in order to forward them to the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Remote Command server (RCMDSVC) only redirects standard input and output to the
	client so that RCMD clients are not able to see output of programs that work
	directly with video memory, such as EDIT, PMON and so on.
	
	Indeed the problem can be reproduced on one hand with any remote shell solution
	that redirects standard input and output, and on the other hand with any tool
	that works with an other active screen buffer. Console applications may create
	several screen buffers (CreateConsoleScreenBuffer() API) and change the current
	active buffer (SetConsoleActiveScreenBuffer API).
	
	Additional query words: ntreskit rconsole reskit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
