---
layout: page
title: "Q247687: Incorrect Partition Size Reported After Creating Volume Set"
permalink: kb/247/Q247687/
---

## Q247687: Incorrect Partition Size Reported After Creating Volume Set

	Article: Q247687
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you do not immediately restart your computer after you create a volume set
	using the Disk Administrator tool, the computer may not properly report the
	correct partition size.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, modify the BootExecute registry value to start the
	Autochk tool when restarting your computer:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the BootExecute value under the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager
	
	3. On the Edit menu, click Multi String, put the cursor at the end of the value
	  "autocheck autochk *", and then press ENTER. On the next line type "autochk
	  /x D:" (without the quotation marks) where D: is the drive letter of the
	  drive being extended, and then click OK.
	
	  NOTE: The default value is the single string "autocheck autochk *".
	
	4. Quit Registry Editor.
	
	When you restart your computer, Autochk creates or extends (as necessary) the
	volume set, and updates the file system boot partition. The volume set then
	reports the correct size.
	
	
	Additional query words: ftdisk volumeset autochk windisk
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
