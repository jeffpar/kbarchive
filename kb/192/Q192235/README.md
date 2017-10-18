---
layout: page
title: "Q192235: NetShow Installation on a Terminal Server"
permalink: kb/192/Q192235/
---

## Q192235: NetShow Installation on a Terminal Server

	Article: Q192235
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
	
	When you attempt to install NetShow On-Demand server on a Windows Terminal
	Server, the following error message may be displayed:
	
	  An Application Using Data Access Object or the Jet Database Engine is
	  currently running. Setup cannot complete until this application is shut down.
	
	CAUSE
	=====
	
	This problem is because of the jet database engine for the MSTSC running on the
	Windows Terminal Server.
	
	RESOLUTION
	==========
	
	If you stop the service, the install completes. There are two ways to accomplish
	this task:
	
	- Close any client connections made to itself. Ensure there is no dialog box
	  displayed with a prompt for a connection server.
	
	- Open Task Manager and end the Mstsc.exe process.
	
	NOTE: This will end the locally attached session or sessions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Terminal Server version
	4.0. We are researching this problem and will post additional information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
