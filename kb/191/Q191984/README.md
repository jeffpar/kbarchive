---
layout: page
title: "Q191984: DHCP Relay Agent Fails to Start after Install"
permalink: /kb/191/Q191984/
---

## Q191984: DHCP Relay Agent Fails to Start after Install

	Article: Q191984
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the DHCP relay agent on a computer running Windows NT 4.0
	Server, you may receive the following error after restarting your computer:
	
	  At least one service or driver has failed to start. Check the Event log for
	  details.
	
	When you check the Event log, you find the following information:
	
	  Event 25017 Source: Relay Agent
	  "No network interfaces are available for relaying messages on. The Relay
	  Agent is exiting."
	
	  -and-
	
	  Event 7024 Source: Service Control Manager
	  "The DHCP Relay Agent service terminated with service-specific error 1."
	
	If you try to start the DHCP Relay Agent service manually through Control Panel,
	Services, you receive the message:
	
	  "The DHCP Relay Agent service terminated with service-specific error 1."
	
	CAUSE
	=====
	
	The DHCP Relay Agent fails to invoke a protocol rebinding when it is installed.
	This will only occur when the DHCP Relay Agent is installed using the DHCP Relay
	Agent tab in Properties for TCP/IP. Normal installation as a service through
	Control Panel\Network\Services\Add will work correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, complete the following steps:
	
	1. Click Start, go to Settings and choose Control Panel.
	
	2. Double-click Network and choose the Services tab.
	
	3. Choose the DHCP Relay Agent service and press the Remove button.
	
	4. Once the DHCP Relay Agent has been removed, press the Add button.
	
	5. Choose the DHCP Relay Agent service and press the OK button.
	
	6. Follow the steps for installing the service.
	
	When the component has been added, choose Close. The computer will go through its
	rebinding and you will be prompted to enter the DHCP Relay Agent configuration
	and then asked to restart. Allow the computer to restart.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0.
	This problem is resolved in Windows 2000 Server.
	
	Additional query words: BOOTP 1542
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
