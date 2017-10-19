---
layout: page
title: "Q186538: PointCast Business Network: Error with Pcn32.exe"
permalink: /kb/186/Q186538/
---

## Q186538: PointCast Business Network: Error with Pcn32.exe

	Article: Q186538
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
	
	When you install the PointCast Business Network application on a Terminal Server
	computer, the following error message may be displayed:
	
	  Pcn32.exe - Ordinal not found.
	
	CAUSE
	=====
	
	If you experience this problem, it is because the wrong version of Mfc42.dll is
	installed. The file date on Terminal Server's version of Mfc42.dll is more
	recent than the version included with PointCast Business Network. The
	application is set up to not install its own version of the .dll file, because
	the Terminal Server's version is newer, although in fact it is the wrong (and
	older) version.
	
	RESOLUTION
	==========
	
	TO work around this problem, copy Mfc42.dll (currently 01/31/97 02:24p 941,840)
	from PointCast Business Network to the Terminal Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
