---
layout: page
title: "Q236387: Unable to Start Windows Explorer After Applying Service Pack 5"
permalink: kb/236/Q236387/
---

## Q236387: Unable to Start Windows Explorer After Applying Service Pack 5

	Article: Q236387
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbui
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use Windows Explorer after applying Windows NT 4.0 Service Pack
	5, Windows Explorer may not start, and you may receive the following error
	message:
	
	  This operation has been cancelled due to restrictions in effect on this
	  computer. Please contact your system administrator.
	
	CAUSE
	=====
	
	This problem can occur because of an update made to the Shell32.dll file by
	Service Pack 5 that permits you to hide the system drive for the default user or
	a specific user.
	
	RESOLUTION
	==========
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For additional information about the Shell32.dll update, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q219392 System Drive Cannot be Hidden in Windows NT Explorer View
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
