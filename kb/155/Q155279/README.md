---
layout: page
title: "Q155279: Windows NT 3.51 Service Pack 4 Does Not Update Mgmtapi.dll"
permalink: kb/155/Q155279/
---

## Q155279: Windows NT 3.51 Service Pack 4 Does Not Update Mgmtapi.dll

	Article: Q155279
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 3.51 Service Pack 4 contains a correction to address an issue where
	Simple Network Management Protocol (SNMP) debug messages are written to the
	Event Log (see Q141019). After installing the Service Pack 4, the problem still
	occurs.
	
	CAUSE
	=====
	
	Windows NT 3.51 Service Pack 4 does not replace the current Mgmtapi.dll with the
	corrected one from the Service Pack.
	
	RESOLUTION
	==========
	
	Manually replace the copy of %SystemRoot\System32\mgmtapi.dll with the corrected
	Mgmtapi.dll from the service pack.
	
	-or-
	
	Install the latest version of the Windows NT 3.51 service pack to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	
