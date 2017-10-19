---
layout: page
title: "Q242053: Event ID 4319: Duplicate names on the network."
permalink: /kb/242/Q242053/
---

## Q242053: Event ID 4319: Duplicate names on the network.

	Article: Q242053
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
	
	When you start the computer, the NetBIOS name resolution over your Transmission
	Control Protocol/Internet Protocol (TCP/IP)-based network may not succeed, and
	Event Viewer may report Event ID 4319 with the following error message:
	
	  A duplicate name has been detected on the TCP network.
	  The IP address of the machine that sent the message is in the data.
	  Use nbtstat -n in a command window to check which name is in the conflict
	  state.
	
	CAUSE
	=====
	
	This behavior can occur if there are incorrect static mappings in the Windows
	Internet Name Service (WINS) database, or if a multihomed WINS server has the
	WINS Client (TCP/IP) bound to both network adapters.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the static WINS mappings and clean (scavenge) the
	WINS database. If the server is a multihomed WINS server, disable the WINS
	client on one of the network adapters.
	
	To do this, follow these steps:
	
	1. Delete the static mappings:
	
	  a. Start WINS Manager.
	
	  b. On the Mappings menu, click Static Mappings.
	
	  c. In the Static Mappings dialog box, click WINS Static Mapping, and then
	     click Delete Mapping.
	
	  d. Click Close.
	
	2. Clean the WINS database:
	
	  a. In the WINS Manager window, click Mappings, and then click Initiate
	     Scavenging.
	
	  b. To confirm the queuing of the scavenging command, click OK.
	
	3. Disable the WINS client:
	
	  a. In Control Panel, double-click Network.
	
	  b. Click the Bindings tab.
	
	  c. In the Show Bindings For list, click All Adapters.
	
	  d. Click the plus character (+) next to the appropriate adapter name.
	
	  e. Right-click WINS Client (TCP/IP), and then click Disable.
	
	  f. In the Network dialog box, click OK.
	
	  g. Click Yes to restart the computer.
	
	Additional query words: multihomed static
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
