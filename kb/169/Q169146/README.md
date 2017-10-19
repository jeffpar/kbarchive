---
layout: page
title: "Q169146: Error Message When Running Network Monitor"
permalink: /kb/169/Q169146/
---

## Q169146: Error Message When Running Network Monitor

	Article: Q169146
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to run Network Monitor, you may receive the following error
	message:
	
	  Admin permissions are required for running Netmon on this machine.
	
	CAUSE
	=====
	
	This error can be generated if you do not have Administrator rights on the
	computer, and can also be caused by problems with the registry.
	
	Some of the problems with the registry might include incorrect permissions on the
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Bh key and its subkeys, or
	general registry problems such as the Maximum Registry Size has been reached or
	exceeded.
	
	RESOLUTION
	==========
	
	Verify that you are an Administrator (or have administrator equivalency).
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Make sure that the user you are logged on as has full control of the
	HKEY_LOCAL_MACHINE\CurrentControlSet\Services\bh key and all of its subkeys.
	
	Make sure the Maximum Registry Size in the Control Panel System tool is set
	appropriately. For example, make sure that the registry has some room to grow
	and that the registry's size limit has not been exceeded.
	
	Additional query words: bh bloodhound logged in doesn't work run
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
