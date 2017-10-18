---
layout: page
title: "Q192042: Diskeeper 2.0 Will Not Establish Connections to Other Servers"
permalink: kb/192/Q192042/
---

## Q192042: Diskeeper 2.0 Will Not Establish Connections to Other Servers

	Article: Q192042
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Diskeeper 2.0 installed on a Windows Terminal Server and another Windows NT
	server, a connection cannot be established from the Windows Terminal Server to
	the remote Windows NT server. After selecting the Windows NT server from within
	Diskeeper's Network Connection window on the Windows Terminal Server, you may be
	prompted with the following error message:
	
	  Diskeeper can not establish a connection to <servername>.
	
	CAUSE
	=====
	
	This problem may be caused by one of the following reasons:
	
	- The remote computer may not be running Diskeeper 2.0.
	
	- The remote computer may be extremely busy and not able to answer the request.
	
	- The Diskeeper service on the remote computer is not responding.
	
	In the scenarios above, if the servers are reversed, Diskeeper works correctly.
	Diskeeper on the Windows NT server can establish remote connections and
	defragment the Windows Terminal Server.
	
	RESOLUTION
	==========
	
	To resolve this issue, Dkserve.exe needs to be registered as a system global
	executable on the Windows Terminal Server computer. An application compatibility
	script named Diskpr20.cmd has been included to accomplish this task. It is
	located in the %systemroot%\Application Compatibility Scripts\Install folder.
	Running this command file will register the necessary executables as system
	global executables.
	
	Additional query words: diskeeper terminalsrv
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
