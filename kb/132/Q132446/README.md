---
layout: page
title: "Q132446: Application Error When Adding Users and Groups with ADDUSERS"
permalink: /kb/132/Q132446/
---

## Q132446: Application Error When Adding Users and Groups with ADDUSERS

{% raw %}

	Article: Q132446
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add more than 150 users or groups using Add Users for Windows NT
	(ADDUSERS.EXE), the following error messages appear:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  SERVICES.EXE (and LSASS.EXE)
	
	  Exception: access violation (0xc0000005)
	
	
	CAUSE
	=====
	
	This problem occurs when the size of the change log is too small to handle
	requests by ADDUSERS.
	
	RESOLUTION
	==========
	
	To correct this problem, modify the Registry on all domain controllers before
	setting up new user or group accounts using ADDUSERS.EXE:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SYSTEM\CurrentControlSet\Services\NetLogon\Parameters
	
	3. From the Edit menu, choose Add Value.
	
	4. Add the following:
	
	     Value Name: ChangeLogSize
	     Data Type:  REG_DWORD
	     String:     0x400000 (Hex)
	
	5. Choose OK and quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	Additional query words: 3.51 Windows NT User Manager netlogon.chg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbMSPressSearch kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
