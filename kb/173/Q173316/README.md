---
layout: page
title: "Q173316: Capture Command Does Not Support /Copies Parameter"
permalink: /kb/173/Q173316/
---

## Q173316: Capture Command Does Not Support /Copies Parameter

	Article: Q173316
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The /copies parameter has no effect when a VLM client is capturing to a local
	Windows NT printer.
	
	CAUSE
	=====
	
	Microsoft File and Print Services for NetWare does not handle capture command
	/copies parameter correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Windows
	NT service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: FPNW Novell NCP
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
