---
layout: page
title: "Q183382: RRAS Event ID: 20111 A Demand Dial Connection to the..."
permalink: /kb/183/Q183382/
---

## Q183382: RRAS Event ID: 20111 A Demand Dial Connection to the...

	Article: Q183382
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Routing and Remote Access Service (RRAS) server, when attempting to connect
	a Dial on Demand (DOD) interface, terminates the connection attempt with the
	following pop-up error message:
	
	  No PPP control protocols are available
	
	Also, Event Viewer may log the following message in the System Log:
	
	  Event ID   : 20111
	  Source     : Router
	  Description: A Demand Dial connection to the remote interface <interface
	               name> on port <port name> was successfully initiated but
	               failed to complete successfully because of the following
	               error: Your modem (or other connecting device) has reported
	               an error.
	
	CAUSE
	=====
	
	This issue may be caused by one or more of the following:
	
	- The transport protocol is disabled on the DOD interface
	
	  -or-
	
	- Your RRAS server is configured to use Dynamic Host Configuration Protocol
	  (DHCP) to assign remote TCP/IP client addresses and the RRAS server cannot
	  obtain addresses from the DHCP server.
	
	  -or-
	
	- Service Pack 3 was reinstalled on the server, but Update on the Services tab
	  of the Network tool in Control Panel was not run for the Routing and Remote
	  Access Service.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Verify that Internet Protocol is enabled on the DOD interface:
	
	  1. Click Start, point to Programs, point to Administrative Tools, and click
	     Routing and RAS Admin.
	
	  2. Double-click the IP Routing folder, click Summary, and right-click the DOD
	     interface.
	
	  3. Click Configure interface.
	
	  4. Click to select the Enable IP Router Manager on This Interface check box.
	
	  NOTE: If this check box is not selected, IP is disabled on this interface.
	
	  -or-
	
	- Verify that your RRAS server can obtain IP addresses from your DHCP server.
	  For more information, please see the following article in the Microsoft
	  Knowledge base:
	
	  ARTICLE-ID: Q172956
	  TITLE : RAS Clients Fail to Connect with IP Assigned via DHCP
	
	  -or-
	
	- Run Update using the Network tool in Control Panel for the Routing and Remote
	  Access Service.
	
	  1. Click Start and point to Settings, and then click Control Panel.
	
	  2. Double-click Network and click the Services tab.
	
	  3. Select the Routing and Remote Access Service and click Update.
	
	  4. When the Windows NT Setup dialog box appears, type the path where the RRAS
	     service copied its files, usually the Program Files\Routing folder.
	
	  5. After Windows NT has finished copying the files click Close and restart
	     the computer when asked.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  ARTICLE-ID: Q169415
	  TITLE : Routing and Remote Access Release Notes Readme.doc File
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
