---
layout: page
title: "Q160793: Additional Desktop Restrictions Available Through Registry"
permalink: /kb/160/Q160793/
---

## Q160793: Additional Desktop Restrictions Available Through Registry

	Article: Q160793
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
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
	Help topic in Regedt.32.exe.
	
	SUMMARY
	=======
	
	After you apply Windows NT 4.0 Service Pack 2, additional desktop restrictions
	are available per user by configuring the registry values specified.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	MORE INFORMATION
	================
	
	Removing "Map Network Drive"/"Disconnect Network Drive"
	-------------------------------------------------------
	
	Details: Removes the "Map Network Drive" and "Disconnect Network Drive" buttons
	from the toolbar in Explorer and also removes the menu items from the context
	menu of My Computer and the Tools menu of Explorer. Registry Location:
	
	HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	NOTE: The above registry key is one path, it has been wrapped for readability.
	
	  Value: NoNetConnectDisconnect
	  Type: REG_DWORD
	  Options: 1=Enable 0=Disable
	
	Removing Context Menus
	----------------------
	
	Details: Removes the context menus for the tray including the Start button, tab
	control, and clock.
	
	Registry Location:
	
	HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	NOTE: The above registry key is one path, it has been wrapped for readability.
	
	  Value: NoTrayContextMenu
	  Type: REG_DWORD
	  Options: 1=Enable 0=Disable
	
	Disabling Ability to View Context Menus (Desktop/Explorer)
	----------------------------------------------------------
	
	Details: Removes the context menu when you right click on the desktop, or when
	you right click in Explorer in the results pane.
	
	Registry Location:
	
	HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	NOTE: The above registry key is one path, it has been wrapped for readability.
	
	  Value: NoViewContextMenu
	  Type: REG_DWORD
	  Options: 1=Enable 0=Disable
	
	Preventing User from running Task Manager
	-----------------------------------------
	
	Registry Location:
	
	HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\System
	
	(create the System key if not already present)
	
	NOTE: The above registry key is one path, it has been wrapped for readability.
	
	  Value: DisableTaskMgr
	  Type: REG_DWORD
	  Options: 1=Enable 0=Disable
	
	New ".ADM" files, used in building System Policy Files, will also be included in
	the Service Pack.
	
	Additional query words: editor SP2
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
