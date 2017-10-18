---
layout: page
title: "Q178113: Specifying a Group Name in LMHOSTS File May Cause STOP 0xA"
permalink: kb/178/Q178113/
---

## Q178113: Specifying a Group Name in LMHOSTS File May Cause STOP 0xA

	Article: Q178113
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any Windows NT system that contains one or more NetBIOS group names specified in
	the LMHOSTS file may experience a STOP 0xA error message with parameters similar
	to the following:
	
	  Stop 0xA (0000000a 00000000 00000002 00000000)
	
	CAUSE
	=====
	
	If a group name is added to the NetBT name cache as a result of the network
	activity of various services before the LMHOSTS file is fully parsed, and the
	LMHOSTS file contains a matching group name entry, the system incorrectly
	overwrites the cached entry with the LMHOSTS entry. Because it is assumed that
	the LMHOSTS file only contains unique NetBIOS names and not group names, the
	cached entry is incorrectly treated as unique, causing a STOP 0xA.
	
	RESOLUTION
	==========
	
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
	
	
	Additional query words: bluescreen blue screen
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
