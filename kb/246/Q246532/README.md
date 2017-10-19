---
layout: page
title: "Q246532: Cannot Install GSNW on Windows NT with Lotus Domino Notes Server"
permalink: /kb/246/Q246532/
---

## Q246532: Cannot Install GSNW on Windows NT with Lotus Domino Notes Server

	Article: Q246532
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
	
	When you attempt to install the Gateway Service for NetWare (GSNW) service on a
	computer running Microsoft Windows NT Server 4.0 with Lotus Domino Notes Server,
	the installation may appear to be successful. However, after you then restart
	the computer, the Logon To Preferred Server option may not appear and Control
	Panel may not display the GSNW icon.
	
	Also, the Services utility may show that GSNW is present and set to Automatic,
	but the service may not be running. Event Viewer may record the following
	event:
	
	  Event ID 7001: The System Can Not Find the File Specified.
	
	CAUSE
	=====
	
	This behavior can occur because of a conflict between GSNW and Lotus Domino
	Notes Server.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and then reinstall the GSNW service and the NWLink
	Internetwork Packet Exchange/Sequenced Packet Exchange (IPX/SPX) protocol.
	Follow these steps:
	
	1. Remove GSNW and NWLink IPX/SPX:
	
	  a. In Control Panel, double-click Network.
	
	  b. On the Services tab, click Gateway (and Client) Services For NetWare,
	     click Remove, and then click Yes.
	
	  c. On the Protocols tab, click NWLink IPX/SPX Compatible Transport, click
	     Remove, and then click Yes.
	
	  d. Restart the computer.
	
	2. Quit the Lotus Domino Notes Server program.
	
	3. Reinstall NWLink IPX/SPX:
	
	  a. In Control Panel, double-click Network.
	
	  b. On the Protocols tab, click Add, click NWLink IPX/SPX Compatible Transport
	     in the Network Protocols box, and then click OK.
	
	  c. Insert the Windows NT Server 4.0 CD, or type the path to the location of
	     the setup files, and then click Continue.
	
	  d. Click OK.
	
	  e. Configure NWLink IPX/SPX Compatible Transport:
	
	     CAUTION: To prevent data loss, save all work and quit all programs before
	     you proceed.
	
	     1. To accept the default configuration for the protocol, click Close, and
	        then click Yes to restart the computer and enable the new settings.
	
	     2. To configure the protocol manually:
	
	        a. In the Network Protocols box, double-click NWLink IPX/SPX Compatible
	           Transport.
	
	        b. In the Adapter box, click the name of the network adapter to which
	           you want to bind the protocol.
	
	        c. In the Frame Type and Network Number boxes, specify this
	           information.
	
	        d. (Optional) On the Routing tab, click Enable RIP Routing.
	
	           NOTE: To enable Routing Information Protocol (RIP) routing, you must
	           have more than one network adapter running IPX/SPX and you must
	           install RIP for NWLink, under Network Services.
	
	        e. Click OK, and then click Close.
	
	           CAUTION: To prevent data loss, save all work and close all programs
	           before you proceed.
	
	        f. Click Yes to restart the computer and enable the new settings.
	
	4. Quit the Lotus Notes Domino Server program if it starts when you restart the
	  computer.
	
	5. Reinstall GSNW:
	
	  NOTE: You must have at least one account on the NetWare server so you can use
	  the Windows NT Server 4.0-based computer to log on as a user with
	  administrative privileges. Create a second NetWare account, NTGATEWAY, for
	  the gateway and remove existing NetWare redirectors.
	
	  a. In Control Panel, double-click Network.
	
	  b. On the Services tab, click Add, and then click Gateway (and Client)
	     Service For NetWare.
	
	  c. Click OK.
	
	  d. Insert the Windows NT Server 4.0 CD or type the path to the location of
	     the setup files, and then click Continue.
	
	  e. Click Close, and then click Yes to restart the computer.
	
	  f. Complete the Gateway (and Client) Service for NetWare installation:
	
	     1. In Control Panel, double-click Network.
	
	     2. In the Adapter box, click the network adapter you want to use for
	        communication with the NetWare network.
	
	        NOTE: By default, the network adapter frame type is 802.3.
	
	     3. Click OK.
	
	  g. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
