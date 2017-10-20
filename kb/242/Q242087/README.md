---
layout: page
title: "Q242087: How to Prevent My Briefcase from Appearing for New Users"
permalink: /kb/242/Q242087/
---

## Q242087: How to Prevent My Briefcase from Appearing for New Users

{% raw %}

	Article: Q242087
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to prevent the My Briefcase tool from automatically
	being created on the desktop when a new user logs on to a Windows NT-based
	computer for the first time.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Use Registry Editor to locate the following registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	2. Add a REG_DWORD value named RunSyncApp with a value of 0.
	
	3. Rename the Syncapp.exe file in the %SystemRoot%\System32 folder to
	  Syncapp.old.
	
	Additional query words: registry
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
