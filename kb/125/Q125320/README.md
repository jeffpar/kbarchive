---
layout: page
title: "Q125320: Error Finding Network Information Using WinMSD"
permalink: kb/125/Q125320/
---

## Q125320: Error Finding Network Information Using WinMSD

	Article: Q125320
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to find network information for a remote computer using the
	Windows NT Diagnostics Network option, one of the following error messages
	appear:
	
	  Error
	  No Access
	
	  -OR-
	
	  Error
	  NWGI 102-ERR1326
	
	After you choose OK, the following error message appears:
	
	  \\|
	  System Not Found
	
	CAUSE
	=====
	
	This problem occurs if the Guest account on the remote computer is disabled.
	
	RESOLUTION
	==========
	
	To correct this problem, enable the Guest account on the remote computer.
	
	MORE INFORMATION
	================
	
	Windows NT Diagnostics allows you to view network details of remote Windows NT
	version 3.5 computers. If you want to view network information of a remote
	computer, type the computer name in universal naming conversion (UNC) format
	next to Network Info For and press the Tab key.
	
	The information you can view depends on your user permissions on the remote
	computer. Guest access allows you to view general network information (such as
	the computer name and current user name) and protocols information.
	Administrator access allows you to also view network settings and statistics.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
