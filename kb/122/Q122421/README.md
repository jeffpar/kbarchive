---
layout: page
title: "Q122421: Server Service Hangs, Event 2000, with Madge Adapter"
permalink: kb/122/Q122421/
---

## Q122421: Server Service Hangs, Event 2000, with Madge Adapter

	Article: Q122421
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following problems occur on computers running Windows NT Advanced Server
	version 3.1 or Windows NT Server version 3.5 with any token ring card that
	allows setting the Transmit/Receive Buffer size:
	
	- On a Windows NT Advanced Server computer, the server service randomly stops
	  allowing new connections and appears to stop responding (hang). Any clients
	  that are already connected hang if you try to do anything over their
	  connections. At this point, you cannot pause or stop the server service (an
	  hourglass appears). There are no errors in the event log, and the workstation
	  service is still running.
	
	- On Windows NT Server installations, Event 2000 errors occur. When the
	  workstation makes a request to establish a session, it receives a failure
	  message from the server, stating that there is a lack of resources available.
	
	CAUSE
	=====
	
	By default, the Madge card is optimized for workstations (8 Receive and 4
	Transmit), not for servers.
	
	RESOLUTION
	==========
	
	The Madge card has settings that are configurable for the Transmit and Receive
	buffers. Increase the settings on the server to 12 Receive and 8 Transmit
	buffers as follows:
	
	1. Start the Network component of Control Panel
	
	2. Select your Madge adapter in the Installed Adapter Cards box
	
	3. Choose the Configure button
	
	4. In the Rx/Tx Buffers box, select Rx=12 and Tx=6.
	
	The Madge product included here is manufactured by Madge Networks, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNT310Search
	
	=============================================================================
	
