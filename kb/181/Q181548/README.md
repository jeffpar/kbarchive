---
layout: page
title: "Q181548: Event ID 4119 and 4311 After Removal of Remote Access Service"
permalink: kb/181/Q181548/
---

## Q181548: Event ID 4119 and 4311 After Removal of Remote Access Service

	Article: Q181548
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After uninstalling the Remote Access Service (RAS) and then restarting your
	computer running Windows NT, Event Viewer may log one or more of the following
	events in the System log:
	
	  Event ID   : 4119
	  Source     : TCP/IP
	  Description: IP could not open registry key for NdiswanX.
	
	-or-
	
	  Event ID   : 4311
	  Source     : NetBT
	  Description: Initialization failed because the driver device could not
	               be created.
	
	CAUSE
	=====
	
	Some of the registry keys associated with RAS were not correctly removed when
	RAS was uninstalled.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually remove all Ndiswan keys from the registry using
	the following procedure:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe).
	
	2. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NetBt\Adapters
	
	3. Delete all the Ndiswan keys.
	
	4. Close Registry Editor and restart your computer.
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
