---
layout: page
title: "Q187316: Err Msg: Cannot Import &lt;File&gt;. Error Opening the File."
permalink: kb/187/Q187316/
---

## Q187316: Err Msg: Cannot Import &lt;File&gt;. Error Opening the File.

	Article: Q187316
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry  Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you double-click a registry entry (.reg) file, you may receive the
	following error message:
	
	  Cannot import <path to file>. Error opening the file. There may be a
	  disk or file system error.
	
	CAUSE
	=====
	
	This error message can occur if the .reg file is located in a folder whose name
	contains spaces.
	
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
	
	To resolve this issue, use either of the following methods:
	
	- Move the .reg file to a folder whose name does not contain spaces.
	
	- Use Registry Editor to modify the way Regedit.exe examines the path. To do
	  so, use registry editor to modify the data value for the "(Default)" value in
	  the following registry key:
	
	  HKEY_CLASSES_ROOT\regfile\shell\open\command
	
	  Change the data value to:
	
	  regedit.exe "%1"
	
	  NOTE: Make sure to include the quotation marks. After you make this change,
	  quit Registry Editor and restart the computer.
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
