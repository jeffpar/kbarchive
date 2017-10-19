---
layout: page
title: "Q245185: Stop 0xA Error When Using pcANYWHERE 8.0 with Windows NT 4.0."
permalink: /kb/245/Q245185/
---

## Q245185: Stop 0xA Error When Using pcANYWHERE 8.0 with Windows NT 4.0.

	Article: Q245185
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a computer running the Symantec pcANYWHERE 8.0 program and either
	Microsoft Windows NT Server 4.0 or Windows NT Workstation 4.0, you may receive a
	Stop 0xA error message and the computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur when pcANYWHERE 8.0 and the Windows NT kernel both make
	a request to lock nonexistent memory.
	
	RESOLUTION
	==========
	
	To resolve this issue, install pcANYWHERE version 8.01 or later. To obtain the
	latest version of pcANYWHERE, visit the Symantec Web site at:
	
	  http://www.symantec.com/pcanywhere/
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 0x0000000A IRQL_NOT_LESS_OR_EQUAL
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
