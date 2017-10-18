---
layout: page
title: "Q171355: International WinNT Unattended Installation Stops On Time Zone"
permalink: kb/171/Q171355/
---

## Q171355: International WinNT Unattended Installation Stops On Time Zone

	Article: Q171355
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you perform an unattended installation with an international version of
	Windows NT, the installation may stop.
	
	This occurs during the GUI portion of setup, when setup reached the time zone
	screen. This happens with or without a TimeZone entry in the Unattend.txt file.
	If you have a TimeZone entry in the unattend.txt file, installation will stop no
	matter which TimeZone string you use in the unattend.txt file.
	
	
	CAUSE
	=====
	
	The Time Zone strings in the Spanish version use Spanish characters not
	available in the English version.
	
	RESOLUTION
	==========
	
	The following steps must be done in the Spanish version of Windows NT. Opening
	the Unattend.txt file in the English version converts the characters from
	Spanish to English.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (regedit.exe, not regedt32) to search for "GMT".
	
	2. From the Edit menu, click Find, and then type GMT.
	
	3. Find the time zone you want to specify in your Unattend.txt file.
	
	4. Copy the text string.
	
	5. Paste it into the Unattend.txt file under the appropriate heading.
	
	6. Use the corrected Unattend.txt file for your installation.
	
	Additional query words: unattend timezone Spanish localized
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
