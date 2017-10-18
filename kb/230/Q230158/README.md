---
layout: page
title: "Q230158: Err: &quot;The Network Path Was Not Found&quot; When Using Server Manager"
permalink: kb/230/Q230158/
---

## Q230158: Err: &quot;The Network Path Was Not Found&quot; When Using Server Manager

	Article: Q230158
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click commands from menus in Server Manager, the following error
	message may be displayed:
	
	  The network path was not found.
	
	CAUSE
	=====
	
	This problem occurs when the selected computer is offline or not available.
	Computers that are offline are represented with a dimmed or grayed-out icon.
	
	RESOLUTION
	==========
	
	To resolve this problem, click the name of the computer you wish to administer
	that is online. Then click commands from the Computer, MacFile, or FPNW menus.
	
	MORE INFORMATION
	================
	
	The menu commands act on the computer selected in the list. When you start
	Server Manager, it defaults to administering the domain of the currently logged
	on user. Furthermore, the default computer selected is the first computer in the
	list, not the local computer. This default computer might be unavailable or
	offline.
	
	Additional query words: grey gray
	
	======================================================================
	Keywords          : kberrmsg kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	
