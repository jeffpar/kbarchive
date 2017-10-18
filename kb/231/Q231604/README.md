---
layout: page
title: "Q231604: Event ID 7023 When Server Service Does Not Start"
permalink: kb/231/Q231604/
---

## Q231604: Event ID 7023 When Server Service Does Not Start

	Article: Q231604
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT Workstation, you may receive a message stating that at
	least one service or driver attached to the system is not functioning. The event
	log may contain the following event errors:
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Type: Error
	  Description: The Server service terminated with the following error: A device
	  attached to the system is not functioning.
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Type: Error
	  Description: The Computer browser service depends on the server service which
	  failed to start because of the following error: A device attached to the
	  system is not functioning.
	
	CAUSE
	=====
	
	These error messages can occur if the Server and Computer Browser services have
	been set to Automatic Startup on a stand-alone computer that is not connected to
	a network or does not have a network adapter installed.
	
	RESOLUTION
	==========
	
	The prevent these errors message, change the Server and Computer Browser
	services to Manual Startup:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Services icon.
	
	3. In the list of installed services, click Computer Browser.
	
	4. Click Startup.
	
	5. Change the Startup Type to Manual, and then click OK.
	
	6. In the list of installed services, click Server, and then click Startup.
	
	7. Change the Startup Type to Manual, and then click OK.
	
	8. Click Close.
	
	9. Restart your computer.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q151427 Server Service May Fail After Installing Network Card
	
	
	To remove the Computer Browser and Server services:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Services tab, click Workstation, and then click Remove. When a
	  dialog box asking if you want to continue appears, click Yes. Note that the
	  Computer Browser service is removed because it depends on the Workstation
	  service.
	
	3. Click Server, click Remove, and then click Close.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
