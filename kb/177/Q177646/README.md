---
layout: page
title: "Q177646: Stop 0x0000000A with IOMEGA JAZ Drive"
permalink: /kb/177/Q177646/
---

## Q177646: Stop 0x0000000A with IOMEGA JAZ Drive

	Article: Q177646
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the IOMEGA JAZ drive and the IOMEGA Quick.exe application are installed,
	you may receive the following blue screen error message when you log on to the
	computer using an administrative account:
	
	  Stop 0x0000000A (parameter,parameter,parameter,parameter)
	  IRQL_NOT_LESS_OR_EQUAL.
	
	CAUSE
	=====
	
	The IOMEGA Quick.exe application is installed in the Startup group to start
	automatically. It sends invalid system calls that are only allowed when logged
	on as an administrator.
	
	RESOLUTION
	==========
	
	Remove Quick.exe from the Startup group, and do not run it when logged on as
	administrator.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
