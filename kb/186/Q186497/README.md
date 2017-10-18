---
layout: page
title: "Q186497: Do Not Install Active Desktop on Terminal Server"
permalink: kb/186/Q186497/
---

## Q186497: Do Not Install Active Desktop on Terminal Server

	Article: Q186497
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform a standard installation of Microsoft Internet Explorer 4.01
	with Active Desktop, restart the Terminal Server computer, and log on, the
	computer stops responding (hangs) or displays a blue screen. Little more than
	the Start Menu and Task Manager can be available.
	
	If you remove the Active Desktop component, the problem is resolved for users
	logging on at the console but Terminal Server clients may receive the following
	error message:
	
	  Cannot access this file. Path is too long.
	
	If you click OK, the client session ends.
	
	RESOLUTION
	==========
	
	To work around this problem, remove Internet Explorer and reinstall it without
	the Active Desktop component. Follow these steps to remove Internet Explorer:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	  NOTE: It may take a long time for Control Panel to open after you click it.
	
	2. Double-click Add/Remove Programs.
	
	3. Select Microsoft Internet Explorer 4.0, and then click Add/Remove.
	
	4. Remove Internet Explorer.
	
	Additional query words: update slow very minutes hang terminate
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
