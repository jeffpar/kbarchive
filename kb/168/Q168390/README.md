---
layout: page
title: "Q168390: Add/Remove Programs Tool Responds Slowly"
permalink: /kb/168/Q168390/
---

## Q168390: Add/Remove Programs Tool Responds Slowly

	Article: Q168390
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool kbui win95
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you double-click the Add/Remove Programs icon in Control Panel, the
	Add/Remove Programs tool may open very slowly.
	
	CAUSE
	=====
	
	This problem can occur if the registry entry point to an incorrect location for
	the Apps.ini file, or if the Apps.ini file is missing.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use the appropriate method:
	
	Method 1
	--------
	
	Verify that the Apps.ini file is located in the folder pointed to by the
	AppInstallPath value in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
	
	If the value points to a network location, verify your ability to connect to the
	network location.
	
	Method 2
	--------
	
	If Apps.ini functionality is not required, delete the AppInstallPath value from
	the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
	
	MORE INFORMATION
	================
	
	The Apps.ini file contains a list of programs and their installation locations.
	When there is an AppInstallPath entry in the registry that points to a valid
	Apps.ini file, there is a Network Install tab in the Add/Remove Programs
	Properties dialog box. Programs listed in the Apps.ini file are listed on this
	tab.
	
	REFERENCES
	==========
	
	For information about creating an Apps.ini file, see page 719 in the Microsoft
	Windows 95 Resource Kit.
	
	Additional query words: add remove
	
	======================================================================
	Keywords          : kbtool kbui win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
