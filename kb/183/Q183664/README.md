---
layout: page
title: "Q183664: NDS Logon Scripts Do Not Execute Correctly"
permalink: /kb/183/Q183664/
---

## Q183664: NDS Logon Scripts Do Not Execute Correctly

	Article: Q183664
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
	
	You have NetWare 4.x servers with NDS running. The NDS tree is divided into
	several partitions. In a logon script, you check for objects in partitions that
	are not present on the logon server. When running the logon script, you find
	that some commands are not executed correctly.
	
	Often, logon scripts check for group membership of the user logging on. In this
	case, the logon script would execute as if the user was not member of the group
	although he or she is a member.
	
	CAUSE
	=====
	
	When using objects not present on the logon server, the script processor has to
	query a partition on another NDS server to resolve the request. If it later
	needs to check for group membership, it has to revert back to the original logon
	server. The current version of Nwscript.exe does not do this properly.
	
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
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
