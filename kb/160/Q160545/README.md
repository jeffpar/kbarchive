---
layout: page
title: "Q160545: Registry Subkey Already Exists When Reinstalling DSMN"
permalink: kb/160/Q160545/
---

## Q160545: Registry Subkey Already Exists When Reinstalling DSMN

	Article: Q160545
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt.32.exe.
	
	SYMPTOMS
	========
	
	If you attempt to reinstall Directory Service Manager for NetWare (DSMN)
	services, the following error may appear:
	
	  The registry subkey already exists.
	
	CAUSE
	=====
	
	If DSMN fails to install or if a portion of the registry is restored from an
	out-of-date copy (example: an old Emergency Repair Disk), it is possible that
	registry entries may be left behind that may prevent reinstallation.
	
	RESOLUTION
	==========
	
	To resolve this condition, remove all registry components for DSMN and then
	restart the computer. You should be able to reinstall the network service after
	removing the associated registry keys.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To remove the registry keys, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following keys:
	
	  HKEY_LOCAL_MACHINE\System\CCS\Services\MSSYNC
	  HKEY_LOCAL_MACHINE\Software\Microsoft\MSSYNC
	
	2. Select each key and, from the Edit menu, click delete.
	
	3. Quit Registry Editor and restart your computer.
	
	Additional query words: dsmn netware ipx remove
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
