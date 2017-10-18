---
layout: page
title: "Q160562: Network NIC Icon Appears with a Number for its Description"
permalink: kb/160/Q160562/
---

## Q160562: Network NIC Icon Appears with a Number for its Description

	Article: Q160562
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
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
	
	SYMPTOMS
	========
	
	When you attempt to remove a network interface card from the Network utility in
	Control Panel, you may receive the following error message:
	
	  An unexpected error has happened while attempting this operation. The
	  operation has been canceled.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To delete this card, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe) and locate the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft
	  \Windows NT\CurrentVersion\NetworkCards
	
	  NOTE: The above registry key is one path, it has been wrapped for readability.
	
	2. Locate the subkey which equals the number described above and, from the Edit
	  menu, click delete.
	
	3. Quit Registry Editor and restart your computer.
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
