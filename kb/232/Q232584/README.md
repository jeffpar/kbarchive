---
layout: page
title: "Q232584: Zone Err Msg: Failed to Establish Server Connection"
permalink: kb/232/Q232584/
---

## Q232584: Zone Err Msg: Failed to Establish Server Connection

	Article: Q232584
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu msgame kbFAQ
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a game room on Zone.com, you may receive the
	following error message:
	
	  Failed to establish connection with Zone server.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- You are connecting to the Zone through a proxy server.
	
	- You are using outdated Zone.com Web pages.
	
	- Your are experiencing high Internet latency.
	
	- The True Vector service of the Zone Alarm personal firewall software is
	  running on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented. If the issue continues to occur, proceed to the next method.
	
	Configure the Proxy Server
	--------------------------
	
	For information about how to configure a proxy server for use with Zone.com,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q159031 Zone: Connecting to the Zone Through a Firewall or Proxy Server
	
	Ensure That You Are Using the Latest Zone.com Web Pages
	-------------------------------------------------------
	
	To ensure that you are using the latest Zone.com Web pages, empty the Temporary
	Internet Files folder on your computer. For information about how to empty the
	Temporary Internet Files folder on your computer, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q310731Zone: Error Message When You Attempt to Connect to a Secure Zone Web
	  Page: The Page Cannot Be Displayed
	
	Reduce Your Internet Latency
	----------------------------
	
	For information about how to reduce your Internet latency, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q232392 Zone: High Latency in Game Lobbies or When Playing Games
	
	Disable the True Vector Service of the Zone Alarm Software
	----------------------------------------------------------
	
	Consult the documentation provided with the Zone Alarm software for information
	about how to disable the True Vector service or how to configure the True Vector
	service to be started manually.
	
	If you configure the True Vector service to be started manually, do not start the
	True Vector service before you connect to a game room on Zone.com.
	
	MORE INFORMATION
	================
	
	As an alternative to simply removing the firewall software, you can try clicking
	the "allow connect for local and internet" (green checks) for the following
	items:
	
	  Client.exe (If Asheron's Call is involved)
	  Zclient
	  Zproxy
	  Zsetup
	  Zone.exe
	
	Also, Pass Lock should be set for all of these, in case you select the Internet
	Lock feature.
	
	Additional query words: msgame igz msngz
	
	======================================================================
	Keywords          : kberrmsg kbimu msgame kbFAQ 
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
