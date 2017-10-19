---
layout: page
title: "Q192165: Error: Terminal Server Has Ended Your Connection"
permalink: /kb/192/Q192165/
---

## Q192165: Error: Terminal Server Has Ended Your Connection

	Article: Q192165
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
	
	When the maximum connection count has been reached and another client tries to
	log on to the Terminal Server, the following error message will be seen:
	
	  Terminal Server has ended your connection.
	  Error Code: 0x904
	
	The Terminal Server event log will display:
	
	  Event ID 71:
	  The maximum connection count was exceeded for the RDP-TCP protocol. The
	  client connection request was rejected.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Click Start, click Programs, click Administrative Tools, and then click
	  Terminal Server Connection Manager.
	
	2. Double-click the RDP-TCP connection.
	
	3. Increase the maximum connection count.
	
	4. Click OK.
	
	5. Have the user try to connect again.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
