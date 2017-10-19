---
layout: page
title: "Q166727: McAfee NetShield or VirusScan May Cause Hangs with SP3"
permalink: /kb/166/Q166727/
---

## Q166727: McAfee NetShield or VirusScan May Cause Hangs with SP3

	Article: Q166727
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience STOP 0x0000001E, STOP 0x0000000A bugchecks, lockups, or other
	random buchecks when you run McAfee NetShield or VirusScan on Windows NT 4.0
	Service Pack 3.
	
	CAUSE
	=====
	
	These problems occur when the filter driver (Mcfilter.sys) from these McAfee
	applications corrupts memory within Windows NT kernel's address space.
	
	
	RESOLUTION
	==========
	
	This problem is fixed in McAfee version 3.02 and later. Please contact McAfee
	Technical support for the updated version.
	
	
	MORE INFORMATION
	================
	
	For information about similar issues, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q178413
	  TITLE : Windows NT System May Hang When Running a Filter Driver
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 4.00 sp3 prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search
	Version           : :4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
