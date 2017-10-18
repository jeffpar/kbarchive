---
layout: page
title: "Q169888: User-Define Path Dropped When User and System Paths Too Large"
permalink: kb/169/Q169888/
---

## Q169888: User-Define Path Dropped When User and System Paths Too Large

	Article: Q169888
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The user-defined path is dropped when logging on if the system and user paths
	are more than 512 bytes when combined.
	
	CAUSE
	=====
	
	The calculation to determine the number of characters in the path was
	incorrect.
	
	
	RESOLUTION
	==========
	
	To work around this problem, shorten the user-defined path.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	The maximum length of the combined system and user-defined path variables is
	1,023 characters. This does not includes the "path=" portion of either.
	
	The system path is limited to the maximum path length of 1,023 characters. The
	user-defined path is limited to maximum 511 characters, but is limited to 1,023
	minus the system path.
	
	It is possible that the system path can use the total allocated environment
	space, causing the user-defined path to get truncated or not show up at all.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
