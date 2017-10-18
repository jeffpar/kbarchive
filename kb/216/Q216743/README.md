---
layout: page
title: "Q216743: Unable to KILL Processes or Terminate Down Sessions"
permalink: kb/216/Q216743/
---

## Q216743: Unable to KILL Processes or Terminate Down Sessions

	Article: Q216743
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Occasionally, while in Terminal Server, a process will stop responding (hang).
	Typically, it will be Csrss.exe; sometimes, the Windows NT Virtual DOS Machine
	(NTVDM) is associated with this process, but not always. When this process stops
	responding, it may continue to use CPU cycles until the CPU reaches 100 percent
	utilization.
	
	The affected client will usually disconnect and establish a new session so it can
	continue work.
	
	The previous session will show up in the Terminal Server Administrator as a DOWN
	session. The only way to remove this DOWN session is to restart the server,
	which is not feasible for production-based servers.
	
	CAUSE
	=====
	
	This problem may be caused by a 16-bit application that is not behaving
	properly. You may be able to control Csrss.exe and NTVDM by setting the BadApp
	information for whatever application caused the problem.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q186628 Performance Tuning CPU Use for 16, 32-bit Windows Applications
	
	
	RESOLUTION
	==========
	
	To work around this problem, try using the Kill.exe tool on the supplemental
	resource kit; this works better than the default Kill.exe included with Terminal
	Server, but it is not completely effective.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0, Terminal Server
	Edition.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
