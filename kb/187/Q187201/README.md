---
layout: page
title: "Q187201: Reset /? Displays Wrong Parameters"
permalink: kb/187/Q187201/
---

## Q187201: Reset /? Displays Wrong Parameters

	Article: Q187201
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
	
	If you type the command, Reset RDP-TCP#3, the following error message will
	occur:
	
	  Invalid parameter(s) RESET {SESSION}
	
	RESOLUTION
	==========
	
	The reset command will work if you type it as follows:
	
	RESET SESSION rdp-tcp#3
	
	-or-
	
	RESET WINSTA rdp-tcp#3
	
	The RESET WINSTA option is included for backward compatibility with Citrix
	Winframe servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server
	version 4.0, Terminal Server Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
