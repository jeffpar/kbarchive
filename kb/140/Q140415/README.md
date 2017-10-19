---
layout: page
title: "Q140415: How to Remove Services and Device Drivers in Windows NT"
permalink: /kb/140/Q140415/
---

## Q140415: How to Remove Services and Device Drivers in Windows NT

	Article: Q140415
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After installing vendor supplied software or drivers under Windows NT, it is
	sometimes desired to remove these components later. In general, this article
	describes how to disable services and drivers under Windows NT, and how to
	remove them.
	
	MORE INFORMATION
	================
	
	Services and drivers may be removed from NT by using the Registry Editor
	(REGEDT32.EXE). Prior to their removal, the services must be stopped. Some
	services or drivers cannot be stopped, but must be set to disabled. In such
	cases, the server must be rebooted prior to removal.
	
	WARNING: Some services and drivers are required for proper system operation.
	Stopping or disabling of some services can render a system unusable.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To remove a service or device:
	
	1. Stop the service or device driver.
	
	  For services, run Control Panel and choose Services. For device drivers, run
	  Control Panel and choose Devices.
	
	  If the service or device driver does not stop, set the startup type to
	  disabled and reboot the computer.
	
	2. Run Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree, find the key:
	
	  \SYSTEM\CurrentControlSet\Services
	
	4. Find the registry key that corresponds to the service or device driver to be
	  deleted.
	
	5. Delete the key and related subkeys:
	
	  a. Select the key.
	
	  b. From the Edit menu, choose Delete.
	
	  c. Choose YES to confirm the deletion of the key.
	
	6. Quit Registry Editor.
	
	7. Shut down and restart the computer.
	
	NOTE: Other registry keys may exist elsewhere in the registry. For best results,
	check with the software vendor for more information.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
