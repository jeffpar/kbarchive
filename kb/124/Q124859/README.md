---
layout: page
title: "Q124859: Allowing Non-Administrators to Use the AT command"
permalink: /kb/124/Q124859/
---

## Q124859: Allowing Non-Administrators to Use the AT command

	Article: Q124859
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Due to Windows NT C2 security limitations, by default, you cannot grant someone
	without administrator rights the right to submit jobs to the Schedule service.
	
	MORE INFORMATION
	================
	
	To give a member of the Server Operators group the right to submit jobs to the
	Schedule service do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\Lsa
	
	3. From the Edit menu choose Add Value.
	
	4. Add the following:
	
	     Value Name:   SubmitControl
	     Data Type:    REG_DWORD
	     Data:         00000001
	     Radix:        Hex
	
	In order to make Backup Operators or other "non-Administrator" users able to run
	the AT Scheduler service, you must add their user account to the appropriate
	user group.
	
	On a Domain Controller, they must be added to the Server Operators group. Then
	follow the steps above.
	
	On a member server or a stand-alone server, they must be added to the local
	Administrators group.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
