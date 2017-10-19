---
layout: page
title: "Q159031: Zone: Network Ports Required to Play"
permalink: /kb/159/Q159031/
---

## Q159031: Zone: Network Ports Required to Play

	Article: Q159031
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbnetwork igz kbimu msgame kbDirectPlay kbSDKPlatform kbGrpDSNetkbfaq
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the ports required to chat or connect to game rooms or
	lobbies on Zone.com through a firewall, proxy server, Network Address
	Translation (NAT), or Internet Connection Sharing (ICS).
	
	MORE INFORMATION
	================
	
	To verify that these ports are open or to open these ports, please contact your
	network administrator or Internet service provider (ISP).
	
	If you are the administrator of the network, please consult the documentation
	provided with your networking software to determine the steps to open these
	ports.
	
	Zone.com requires that the following TCP ports be open to sign in, chat, or
	connect to game rooms or lobbies:
	
	- 80
	
	- 443
	
	- 6667
	
	- 28800-29100
	
	If your network requires that you open these ports based on IP address, you can
	determine the class C address range used by the Zone by opening a command prompt
	window and running the following command:
	
	  "ping zone.msn.com" (without the quotation marks)
	
	Additional query words: msgame igz msngz match making firewall host join
	
	======================================================================
	Keywords          : kbenv kbnetwork igz kbimu msgame kbDirectPlay kbSDKPlatform kbGrpDSNet kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
