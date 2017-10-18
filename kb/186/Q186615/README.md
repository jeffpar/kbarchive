---
layout: page
title: "Q186615: Error 1008: Failed to Load/Unload the User Profile"
permalink: kb/186/Q186615/
---

## Q186615: Error 1008: Failed to Load/Unload the User Profile

	Article: Q186615
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
	
	The following error may occur when a user logs on to a Terminal Server either at
	the console or through the Terminal Server client. In the Terminal Server Event
	Viewer in the Security Log, a 1008 error is recorded.
	
	  Error 1008: Failed to Load/Unload the User Profile
	
	CAUSE
	=====
	
	One very likely cause is that the registry has exceeded the default limit of 12
	megabytes (MB). This is easy to do if many users log on to the Terminal Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Double-click the System tool in Control Panel.
	
	2. In the Virtual Memory section of the Performance tab, click Change.
	
	3. Check the current registry size limit and add 10 MB of additional space.
	
	If the registry size is not the issue, and if the users store their profiles on a
	computer other than the Terminal Server, check to make sure the user can make a
	connection to the remote server. Perhaps that system is out of licenses.
	
	MORE INFORMATION
	================
	
	For additional information about the Registry Size Limit, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q124594 Understanding and Configuring Registry Size Limit (RSL)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
