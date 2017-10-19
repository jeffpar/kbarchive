---
layout: page
title: "Q194825: Remove Personalized Settings for Users Running Terminal Server"
permalink: /kb/194/Q194825/
---

## Q194825: Remove Personalized Settings for Users Running Terminal Server

	Article: Q194825
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.0,4.01; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows NT 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When users log on to a Terminal Server and Internet Explorer 4.x is installed,
	Internet Explorer 4.x creates personalized settings for each user who logs on to
	the same Terminal Server after the logon process occurs.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: When you remove this key, make sure that you back it up first. Removal of
	this key may stop Microsoft Outlook 2000 from recognizing that Microsoft Outlook
	Express is installed.
	
	To prevent the personalized settings from being created, follow these steps:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \Software\Microsoft\Active Setup
	
	3. Delete the Installed Components key and the personalized settings are not
	  created.
	
	Additional query words: terminalsrv
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE400WinNT400 kbIE401WinNT400
	Version           : WINDOWS:4.0,4.01; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
