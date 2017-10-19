---
layout: page
title: "Q156204: Unusual Addresses Like 1.10.0.184 Showing in WINS Database"
permalink: /kb/156/Q156204/
---

## Q156204: Unusual Addresses Like 1.10.0.184 Showing in WINS Database

	Article: Q156204
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use WINS Manager, you notice a WINS server with an address of
	1.10.0.184, 1.35.0.184, 0.62.0.184, or 0.227.0.184, or you notice an owner with
	these addresses when you click Show Database on the Mappings menu.
	
	You will also notice when you view the mappings for the selected owner (real IP
	address of the WINS server itself), that you do not see any name registrations
	for that server. An NBTSTAT -N command will show the correct WINS server
	registrations.
	
	
	CAUSE
	=====
	
	The Remote Access Service (RAS) WAN Wrapper is bound before the network
	interface card (NIC).
	
	
	RESOLUTION
	==========
	
	Windows NT 3.51
	---------------
	
	Perform the following steps to work around this problem:
	
	1. Go to the Main group, double-click Control Panel, and then double-click
	  Network.
	
	2. Click Bindings.
	
	3. In the Show Bindings For list, click All Protocols, and then double-click
	  WINS Client (TCP/IP).
	
	4. Click Remote Access Service WAN Wrapper, and then click the down arrow to
	  move it below your network adapter driver.
	
	  NOTE: There may be multiple RAS WAN Wrapper entries.
	
	Windows NT 4.0
	--------------
	
	Perform the following steps to work around this problem:
	
	1. Click the Start button, point to Settings, click Control Panel, and
	  double-click Network.
	
	2. Click the Bindings tab.
	
	3. In the Show Bindings For list, click All Protocols, then double-click WINS
	  Client (TCP/IP).
	
	4. Click Remote Access Service WAN Wrapper, and then click Move Down to move it
	  below your network adapter driver.
	
	  NOTE: There may be multiple RAS WAN Wrapper entries.
	
	5. In the Show Bindings For list, click All services.
	
	6. For each service, select the WINS Client (TCP/IP) and verify that the network
	  adapter is now listed first. Move the Remote Access Service WAN Wrappers down
	  if needed.
	
	  NOTE: There may be multiple RAS WAN Wrapper entries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: weird funny bogus strange unusual
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
