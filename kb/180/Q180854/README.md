---
layout: page
title: "Q180854: Access Violation in Winlogon with Third-Party Gina.dll"
permalink: /kb/180/Q180854/
---

## Q180854: Access Violation in Winlogon with Third-Party Gina.dll

	Article: Q180854
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to run the screen saver after a period of inactivity,
	Winlogon.exe encounters an access violation, and a STOP 0xC000021A message
	appears on the screen.
	
	CAUSE
	=====
	
	This problem only occurs if a third-party Gina.dll file is installed on your
	computer and if the updated GINA, or any of the libraries with which it is
	linked, performs window hooking.
	
	
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
	
	
	Additional query words: accgina msgina hookproc
	======================================================================
	Keywords          : kb3rdparty kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
