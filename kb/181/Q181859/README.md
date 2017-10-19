---
layout: page
title: "Q181859: Stop 0x0000000A When Using UltraBac to Back Up a SQL Server"
permalink: /kb/181/Q181859/
---

## Q181859: Stop 0x0000000A When Using UltraBac to Back Up a SQL Server

	Article: Q181859
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
	
	You may receive a Stop 0x0000000A blue screen error when you use UltraBac for
	Windows NT on a SQL Server client computer to back up a SQL Server database.
	
	CAUSE
	=====
	
	The trap occurs because Windows NT incorrectly sets a transfer length greater
	than the user's buffer. This may occur when reading from a named pipe of
	PIPE_TYPE_MESSAGE across the network when requesting less data than the pipe
	contains.
	
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
	
	
	MORE INFORMATION
	================
	
	UltraBac is a third-party application from the vendor Barratt Edwards
	International Corp (BEI), which is independent of Microsoft Corp. For further
	details regarding UltraBac; please contact the vendor directly.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
