---
layout: page
title: "Q186600: Do Not Use Screen Savers with Terminal Server"
permalink: /kb/186/Q186600/
---

## Q186600: Do Not Use Screen Savers with Terminal Server

	Article: Q186600
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many screen savers monopolize system resources. In a Windows Terminal Server
	environment, a screen saver activated on the server or on a Terminal Server
	Client can monopolize server resources to an extent that makes it appear that
	other clients are hung. For this reason, Microsoft recommends that screen savers
	not be used on Windows Terminal Servers or within Terminal Server Client
	sessions. If a screen saver is required, choose the Blank Screen screen saver or
	another non-intensive screen saver that you have verified using Performance
	Monitor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
