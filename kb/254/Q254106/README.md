---
layout: page
title: "Q254106: Access to NetWare Server Stops Working After Applying SP4 or SP5"
permalink: /kb/254/Q254106/
---

## Q254106: Access to NetWare Server Stops Working After Applying SP4 or SP5

	Article: Q254106
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 4 (SP4) or Service Pack 5 (SP5) to a Terminal
	Server, attempts by a service (such as a scheduled batch file) to access a
	NetWare server do not succeed.
	
	CAUSE
	=====
	
	A problem in Terminal Server SP4 causes any attempt to connect to a NetWare
	server from a service to use a null password. Interactive access is not
	affected.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
