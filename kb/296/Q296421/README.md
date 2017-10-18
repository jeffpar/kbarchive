---
layout: page
title: "Q296421: Schedule+ 7.x Hangs at Start After Selecting Group Mode"
permalink: kb/296/Q296421/
---

## Q296421: Schedule+ 7.x Hangs at Start After Selecting Group Mode

	Article: Q296421
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.x
	Operating System(s): 
	Keyword(s): kbenv kbui
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.x 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start Schedule+ 7.x after you specify group-enabled mode, the splash
	screen appears and then the program stops responding (hangs).
	
	CAUSE
	=====
	
	This behavior can occur when you first install Schedule+ 7.x if you select
	Group-enabled mode instead of Standalone mode and if you also specify that you
	do not want the mode-selection dialog box to appear again. Schedule+ hangs when
	it tries to start because it is trying to detect a nonexistent mailbox.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, modify two registry values to enable the mode-selection
	dialog box for Schedule+:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the MailDisabled value under the following key in the registry:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Schedule+\Application
	
	3. On the Edit menu, click DWORD, type "0" (without the quotation marks), and
	  then click OK.
	
	4. Locate the MAPIPresent value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Schedule+\Application
	
	5. On the Edit menu, click DWORD, type "0" (without the quotation marks), and
	  then click OK.
	
	6. Quit Registry Editor.
	
	7. Start Schedule+, and in the relevant dialog box, click Standalone mode.
	
	MORE INFORMATION
	================
	
	To toggle between Group-enabled mode and Standalone mode:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the MailDisabled value under the following key in the registry:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Schedule+\Application
	
	3. On the Edit menu, click DWORD, type "0" (without the quotation marks), and
	  then click OK, or if the value is already 0, change it to 1.
	
	4. Quit Registry Editor.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbui 
	Technology        : kbScheduleSearch kbSchedule7xSearch
	Version           : :7.x
	Issue type        : kbprb
	
	=============================================================================
	
