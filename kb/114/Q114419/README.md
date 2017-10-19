---
layout: page
title: "Q114419: Cannot Find DC with Multiple Installations on Single Computer"
permalink: /kb/114/Q114419/
---

## Q114419: Cannot Find DC with Multiple Installations on Single Computer

	Article: Q114419
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Workstation version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you have installed multiple configurations of Windows NT on a single
	computer using the same machine name for each installation, when you start
	Windows NT, it cannot find the domain controller.
	
	CAUSE
	=====
	
	When you run multiple installations of Windows NT on a single computer using the
	same machine name for each installation, one of these instances can modify the
	secure channel account password. This keeps the other instances from
	re-establishing communications with the domain controller.
	
	WORKAROUND
	==========
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	To prevent this, set this registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NetLogon\Parameters
	
	to this value:
	
	  DisablePasswordChange = [REG_DWORD] 0x01
	
	- or -
	
	use different machine names for each installation.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
