---
layout: page
title: "Q139613: Error Accessing Performance Data of Remote Windows NT Server"
permalink: kb/139/Q139613/
---

## Q139613: Error Accessing Performance Data of Remote Windows NT Server

	Article: Q139613
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Performance Monitor to access a remote server's performance data,
	the following error message appears:
	
	  Insufficient privilege to access performance data
	
	CAUSE
	=====
	
	This problem occurs in Windows NT 3.51 only. In previous versions of Windows NT,
	users including Guest (if not disabled) were able to view remote server's
	performance data. This operation consumed a lot of the remote server's CPU
	cycles and network bandwidth. Therefore, in Windows NT 3.51, you may enable an
	access check in order to prevent any user from viewing the performance data on
	the remote server using Performance Monitor.
	
	To restrict any user from accessing a network server's performance data, modify
	the registry on the server:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Perflib
	
	3. Select the Perflib key.
	
	4. From the Security menu, select Permissions.
	
	5. Select Everyone and choose Remove. NOTE: By default, Administrator and System
	  have Full Control access and Everyone had Read access.
	
	6. Choose OK and quit the Registry Editor.
	
	7. Shutdown and restart Windows NT.
	
	Additional query words: prodnt perfmon.exe
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
