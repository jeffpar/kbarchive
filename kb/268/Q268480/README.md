---
layout: page
title: "Q268480: Workstation Service Does Not Start, Event Viewer Records 'Duplic"
permalink: kb/268/Q268480/
---

## Q268480: Workstation Service Does Not Start, Event Viewer Records 'Duplic

	Article: Q268480
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your computer, the Workstation service, Server service, or
	Messenger service may not start, and Event Viewer may record many error messages
	relating to a duplicate name on the network.
	
	CAUSE
	=====
	
	This behavior can occur when the Windows Internet Name Service (WINS) database
	contains incorrect static mappings for the server.
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove the incorrect static mappings from the WINS
	database.
	
	MORE INFORMATION
	================
	
	To remove the incorrect static mappings, follow these steps:
	
	1. Start WINS Manager.
	
	2. In the right pane of the WINS Manager window, select the IP address of the
	  WINS server that contains the static mappings.
	
	3. On the Mappings menu, click Static Mappings.
	
	4. Select the static mappings for the server that is experiencing the problem,
	  and then click Delete Mapping.
	
	5. Click Close, and then quit WINS Manager.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
