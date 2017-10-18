---
layout: page
title: "Q170566: Ntbackup.exe Log Has Additional Space at Beginning of Each Line"
permalink: kb/170/Q170566/
---

## Q170566: Ntbackup.exe Log Has Additional Space at Beginning of Each Line

	Article: Q170566
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fixkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Ntbackup.exe in Windows NT version 4.0 Service Pack 3 adds an additional null
	character (0x00) at the beginning of each line in the log when the log is
	written to disk using the /l (lowercase "L") switch.
	
	CAUSE
	=====
	
	The function that writes the log file takes a value that determines the size to
	write. The size passed to this function was too big by one byte.
	
	
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
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
