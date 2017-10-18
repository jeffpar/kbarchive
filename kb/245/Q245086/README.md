---
layout: page
title: "Q245086: Netlogon Event 3051, with Invalid Registry Entry in Event Viewer"
permalink: kb/245/Q245086/
---

## Q245086: Netlogon Event 3051, with Invalid Registry Entry in Event Viewer

	Article: Q245086
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a computer that is running Microsoft Windows NT Server 4.0 or
	Microsoft Windows NT Workstation 4.0, Event Viewer may record the following
	event:
	
	  Netlogon Event 3051, with an invalid registry entry.
	
	CAUSE
	=====
	
	This behavior can occur if the Scripts value in the registry is damaged.
	
	RESOLUTION
	==========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, delete and then re-create the Scripts registry value:
	
	1. Start Registry Editor (Regedt32.exe), and then locate the following registry
	  key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Netlogon\Parameters
	
	2. Locate and delete the Scripts value.
	
	3. Quit Registry Editor, and then restart the computer.
	
	4. Start Registry Editor, and then re-create the Scripts value:
	
	  a. Locate the following registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Netlogon\Parameters
	
	  b. On the Edit menu, click Add Value.
	
	  c. In the Value Name box, type "Scripts" (without the quotation marks).
	
	  d. In the Data Type box, click REG_EXPAND_SZ, and then click OK.
	
	  e. In the String box, type the following path, and then click OK:
	
	  %SystemRoot%\System32\Repl\Import\Scripts
	
	     NOTE: Make sure you type this path correctly. If the path is incorrect,
	     Event Viewer may report the following event after you restart the
	     computer:
	
	  Event 5706
	  Netlogon could not create share c:\winnt\system32\repl\import\scripts. The
	  Following error occurred: The System could not find the path specified.
	
	5. Quit Registry Editor, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
