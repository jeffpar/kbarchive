---
layout: page
title: "Q156366: How to Run Windows NT Explorer As a Separate Process"
permalink: /kb/156/Q156366/
---

## Q156366: How to Run Windows NT Explorer As a Separate Process

{% raw %}

	Article: Q156366
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the Windows NT 4.0 Desktop, Taskbar, and Explorer run in a single
	process using multiple threads. If you modify the registry, enabling the
	DesktopProcess entry, the Taskbar and Desktop will run in one process with each
	instance of Explorer in a separate process. Each new instance of Explorer.exe
	will use its own thread. The setting can be verified when two instances of
	Explorer.exe are visible using Pviewer.exe from the Windows NT 4.0 Resource Kit
	or the Process tab of the Windows NT 4.0 Task Manager.
	
	MORE INFORMATION
	================
	
	This configuration is enabled on a per-user basis by modifying the registry as
	follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_CURRENT_USER subtree, go to the following subkey:
	
	  Software\Microsoft\Windows\CurrentVersion\Explorer
	
	3. Create a new value called DesktopProcess (REG_DWORD) with the data field set
	  to 1.
	
	  Valid entries are 0 and 1; 0 is the default.
	
	4. Quit Registry Editor.
	
	This entry will allow access to the taskbar and desktop when Explorer becomes
	unresponsive.
	
	NOTE: This setting should only be enabled on Pentium-based computers with more
	than 16 MB of RAM.
	
	NOTE: Use default settings if you encounter shell problems.
	
	If you encounter problems after you install Internet Explorer version 4.0 or
	4.01, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q181562
	  TITLE : Problems Opening or Exploring Folders in Internet Explorer
	
	Additional query words: toolbar
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
