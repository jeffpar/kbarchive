---
layout: page
title: "Q268091: Event 7022: Messenger Service Hung on Startup"
permalink: kb/268/Q268091/
---

## Q268091: Event 7022: Messenger Service Hung on Startup

	Article: Q268091
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
	
	When you start your computer, Event Viewer records Event ID 7022, "Messenger
	service hung on startup."
	
	CAUSE
	=====
	
	This behavior can occur when the services that the Messenger service depends on
	have been modified and are not configured correctly in the registry.
	
	RESOLUTION
	==========
	
	To resolve this behavior, make sure that the services that the Messenger service
	depends on are correctly listed in the registry.
	
	MORE INFORMATION
	================
	
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
	
	To make sure the necessary services are present in the registry, follow these
	steps:
	
	1. Start Registry Editor (Regedt32).
	
	2. Navigate to the following registry location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Messenger
	
	3. In the right pane of the Registry Editor window, double-click the value
	  DependOnService.
	
	4. In the Multi-String Editor dialog box, make sure the following services are
	  listed under Data. Each service should be listed on a separate line:
	
	  LanmanWorkstation
	  NetBIOS
	
	5. If either of these services is missing, type its name in the Data box, with
	  each service on a separate line, and then click OK.
	
	6. Quit Registry Editor, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
