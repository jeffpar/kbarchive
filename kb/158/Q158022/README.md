---
layout: page
title: "Q158022: RunOnce Registry Key Runs Program at Every Startup"
permalink: /kb/158/Q158022/
---

## Q158022: RunOnce Registry Key Runs Program at Every Startup

	Article: Q158022
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, you should first make a backup copy of the registry files
	(System.dat and User.dat). Both are hidden files in the Windows folder.
	
	When you use System Policy Editor to have a program run once by placing it in the
	RunOnce registry key on the default computer or a particular computer, the
	program may run every time a user logs on.
	
	CAUSE
	=====
	
	With system policies, every time a user logs on to a computer the policy file is
	downloaded and added to the registry. Therefore, the value is always placed in
	the RunOnce key at startup.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	To cause a program to run only once, use one of the following methods:
	
	- Use Remote Registry to open each computer's registry file, and place the
	  program in the RunOnce key.
	
	- Create an initial policy file with the RunOnce key enabled. After users have
	  downloaded the change, edit the policy file to remove the RunOnce entry.
	
	- Export and send the registry entry to users in e-mail. Users can double-click
	  the .reg file to add the key to their registry. The program runs the next
	  time the computer is started.
	
	MORE INFORMATION
	================
	
	The RunOnce key is designed to cause a value to be executed only one time. When
	you select the RunOnce key in System Policy Editor, the value you add is placed
	under the following registry keys:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce,
	
	HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce
	
	With system policies, every time a user logs on to a computer the policy file is
	downloaded and added to the registry. Therefore, the value is always placed in
	the RunOnce key at startup.
	
	For information about installing Remote Administration Services, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q141460 How to Install Remote Administration Services
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
