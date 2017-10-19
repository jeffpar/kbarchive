---
layout: page
title: "Q174511: Access Violation in Win32K When Calling GetDCEx"
permalink: /kb/174/Q174511/
---

## Q174511: Access Violation in Win32K When Calling GetDCEx

	Article: Q174511
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In certain instances under Windows NT 4.0, application code may fail with an
	access violation in Win32k.sys when using the following API:
	
	     GetDCEx(GetDesktopWindow(), NULL, DCX_PARENTCLIP);
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix below, or wait for the next service
	pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
