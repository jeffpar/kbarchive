---
layout: page
title: "Q234636: Server Service Does Not Start on Standalone Workstation"
permalink: kb/234/Q234636/
---

## Q234636: Server Service Does Not Start on Standalone Workstation

	Article: Q234636
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a service or driver attached to your computer running Windows NT,
	you may receive the following error message at startup:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	In addition, the following error message may be displayed in the System event
	log:
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Type: Error
	  Description: The Server service terminated with the following error:
	  A device attached to the system is not functioning.
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Type: Error Description: The Computer browser service depends on the server
	  service which failed to start because of the following error:
	  A device attached to the system is not functioning.
	
	CAUSE
	=====
	
	This behavior occurs because the Computer Browser and Server services may be set
	to Automatic. On a standalone workstation that does not have a network adapter
	or is not connected to the network, these services should be set to Manual or
	removed.
	
	RESOLUTION
	==========
	
	To manually set the Computer Browser and Server services:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click Computer Browser, and then click Startup.
	
	3. In the Startup Type area, click Manual, and then click OK.
	
	4. Click Server, and then click Startup.
	
	5. In the Startup Type area, click Manual, and then click OK.
	
	6. Click Workstation, and then click Startup.
	
	7. In the Startup Type area, click Manual, click OK, and then click Close.
	
	To remove the Computer Browser and Server services:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Services tab.
	
	3. Click Workstation, and then click Remove. When a dialog box asking if you
	  want to continue appears, click Yes. Note that the Computer Browser service
	  is removed because it depends on the Workstation service.
	
	4. Click Server, click Remove, and then click Close.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
