---
layout: page
title: "Q148308: Configuring Windows 95 Registry Settings From Windows NT 4.0"
permalink: kb/148/Q148308/
---

## Q148308: Configuring Windows 95 Registry Settings From Windows NT 4.0

	Article: Q148308
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In Windows NT 4.0, you can remotely control and configure Windows 95 registry
	settings. This is accomplished by installing the Remote Registry service
	(available on the Windows 95 CD-ROM in the Admin/Nettools folder) on both the
	local computer and the remote Windows 95-based computer. User-level security and
	remote administration must be enabled on the Windows 95-based computer.
	
	Additional information regarding Remote Administration can be found in the
	Windows 95 Resource Kit.
	
	To control and configure registry settings, you must run Registry Editor
	(Regedt32.exe).
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To connect to the Windows 95 computer's registry from a computer running Windows
	NT, perform the following steps:
	
	1. Click the Start button, and then click Run.
	
	2. Type "regedt32.exe" (without the quotation marks), and then click OK.
	
	3. From the Registry menu, select Connect Network Registry.
	
	4. Enter the computer name of the Windows 95 computer.
	
	Additional query words: regedt32
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
