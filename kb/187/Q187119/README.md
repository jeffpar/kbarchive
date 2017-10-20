---
layout: page
title: "Q187119: Custom Dictionaries in Office97"
permalink: /kb/187/Q187119/
---

## Q187119: Custom Dictionaries in Office97

{% raw %}

	Article: Q187119
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To have custom dictionaries, you must run the Microsoft Office 97 Compatibility
	script. This is because the custom dictionary entry for Word 97 is held in the
	HKEY_LOCAL_MACHINE hive. The result is that every time you modify this key, it
	changes the custom dictionary location for all users.
	
	For this to work properly, you must update the RootDrv2 compatibility script in
	the %systemroot%\Application Compatibility Scripts\ directory to include the
	path of a home drive for the users. To update the script, edit the line, "Set
	RootDrive=" to point to the drive letter of your choice. This script will map
	the user's home directory to the root of whichever drive you choose. After you
	set the root drive, run the %systemroot%\Application Compatibility
	Scripts\office97.cmd script. This script will update the registry so the custom
	dictionary will appear under the office97 subdirectory of the user's home drive.
	Each user runs the logon\ofc97usr.cmd script during logon to create the office97
	directory if needed.
	
	MORE INFORMATION
	================
	
	Users cannot have more than one custom dictionary, because the list of custom
	dictionaries is still held in HKEY_LOCAL_MACHINE.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
