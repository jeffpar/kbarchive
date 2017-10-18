---
layout: page
title: "Q142683: Cannot Run Setup for Office 95 on Windows NT Alpha Platform"
permalink: kb/142/Q142683/
---

## Q142683: Cannot Run Setup for Office 95 on Windows NT Alpha Platform

	Article: Q142683
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbsetup
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup for Microsoft Office 95 on an Alpha-based platform with
	Windows NT 3.51, you receive the following error message:
	
	  Not enough memory.
	
	  The installation cannot run with this version of Windows.
	
	CAUSE
	=====
	
	Windows 32-bit programs will not run in Windows NT 3.51 environments on Alpha
	platforms. This is because Windows NT 3.51 running on an Alpha platform emulates
	the 80286 mode for those Windows programs.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	Issue type        : kbprb
	
	=============================================================================
	
