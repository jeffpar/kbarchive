---
layout: page
title: "Q172692: Error 0001: Incorrect Function When Starting WINS Service"
permalink: /kb/172/Q172692/
---

## Q172692: Error 0001: Incorrect Function When Starting WINS Service

	Article: Q172692
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your Windows NT 4.0 Server starts, you may receive an error message similar
	to the following:
	
	  Service Control Manager
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	When you check Event Viewer, you may have the following event log message in the
	System Log:
	
	  Event ID: 4165
	  Source: WINS
	  Description: WINS has encountered an error that is causing it to shut down.
	
	When you attempt to start the Windows Internet Name Service (WINS) using the
	Control Panel Services tool, you receive the following error:
	
	  Could not start the Windows Internet Name Service on \\<Server>. Error
	  0001: Incorrect function.
	
	CAUSE
	=====
	
	The WINS Client(TCP/IP) device is disabled or has not started.
	
	RESOLUTION
	==========
	
	To resolve this issue you will need to enable the WINS Client(TCP/IP) device and
	start it using the following steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the Devices icon.
	
	2. Click WINS Client(TCP/IP), click Startup, and verify it is set to Automatic.
	
	3. Click OK, click Start, and then click Close.
	
	4. Double-click the Services icon, and then click Windows Internet Name Service.
	
	5. Click Start, and then click Close.
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
