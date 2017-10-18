---
layout: page
title: "Q240348: All Programs May Not Be Displayed in Add/Remove Programs Tool"
permalink: kb/240/Q240348/
---

## Q240348: All Programs May Not Be Displayed in Add/Remove Programs Tool

	Article: Q240348
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv win98 win98se
	Last Modified: 11-JUN-2002
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	- Microsoft Windows 98 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice that all of the programs that are installed on your computer may
	not be displayed in the Add/Remove Programs tool.
	
	CAUSE
	=====
	
	This behavior occurs if a program's DisplayName or uninstall key name is longer
	than 63 characters.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue:
	
	1. Click Start, click Run, type "regedit" (without the quotation marks), and
	  then click OK.
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall
	
	3. Click the folder of the program that has more than 63 characters in the
	  title, right-click DisplayName, and then click Modify.
	
	4. In the "Value data" box, type a name with less than 63 characters, and then
	  click OK.
	
	5. If the program's uninstall key name is longer than 63 characters, shorten it
	  also. For example, the following key name is too long:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\
	  1234567890123456789012345678901234567890123456789012345678901234
	
	6. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv win98 win98se 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbWin98SEsearch kbOPKSearch kbWin98 kbWin98SE
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
