---
layout: page
title: "Q130074: User Profiles Default to Global SENDTO Directory"
permalink: /kb/130/Q130074/
---

## Q130074: User Profiles Default to Global SENDTO Directory

	Article: Q130074
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you set up Windows 95 to use user profiles, some settings are maintained
	individually for each user who logs on to the computer (for example, Start menu
	settings and desktop settings). However, each user does not get an individual
	SendTo folder. By default, the global SendTo folder is used for all users.
	
	CAUSE
	=====
	
	There is no setting in the user interface (UI) to maintain separate SendTo
	folders for each user.
	
	
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
	
	To use a separate SendTo folder for each user who logs on to the computer, follow
	these steps:
	
	1. Create a SendTo folder in each user's personal folder. For example, for a
	  user named User1, create a SendTo folder in the Windows\ Profiles\User1
	  folder.
	
	2. Use Registry Editor to modify the SENDTO value in the following registry key
	  for each user to point to the SendTo folder you created for each user:
	
	     HKEY_USERS\USERNAME\SOFTWARE\Microsoft\WINDOWS\CURRENTVERSION\ 
	     EXPLORER\SHELL FOLDERS
	
	3. Create a SENDTO string in the following registry key for each user and set it
	  to the SendTo folder you created for each user:
	
	     HKEY_USERS\USERNAME\SOFTWARE\Microsoft\WINDOWS\CURRENTVERSION\ 
	     EXPLORER\USER FOLDERS
	
	4. Create shortcuts in the SendTo folders that will appear when the users click
	  objects with the right mouse button and then click Send To.
	
	5. Restart the computer.
	
	To add locations to the global SendTo folder for all users, add shortcuts to the
	default SendTo folder (typically C:\Windows\SendTo).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
