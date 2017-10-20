---
layout: page
title: "Q320020: Dungeon Siege: Network Ports Required for Multiplayer Game"
permalink: /kb/320/Q320020/
---

## Q320020: Dungeon Siege: Network Ports Required for Multiplayer Game

{% raw %}

	Article: Q320020
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 12-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the ports required to play Microsoft Dungeon Siege as a
	multiplayer game through a firewall, a proxy server, a router, Network Address
	Translation (NAT), or Internet Connection Sharing (ICS).
	
	MORE INFORMATION
	================
	
	To verify that these ports are open or to open these ports, please contact your
	network administrator or Internet service provider (ISP).
	
	If you are the administrator of the network, please consult the documentation
	provided with your networking software to determine the steps to open these
	ports.
	
	Dungeon Siege requires that the following UDP and TCP ports be open to start
	multiplayer games:
	
	  Connection to ZoneMatch: 2300 UDP
	  News and AutoUpdate: 80 TCP
	
	When a multiplayer game is in session, Dungeon Siege uses the following
	DirectPlay ports:
	
	+-----------------------------------------------------------------------------------------+
	| Connection              | Ports for Client Configuration | Ports for Host Configuration | 
	+-----------------------------------------------------------------------------------------+
	| Initial UDP Connection  | 6073 Outbound for Joining      | 6073 Inbound for Hosting     | 
	+-----------------------------------------------------------------------------------------+
	| Subsequent UDP Inbound  | 2302-2400                      | 2302-2400                    | 
	+-----------------------------------------------------------------------------------------+
	| Subsequent UDP Outbound | 2302-2400                      | 2302-2400                    | 
	+-----------------------------------------------------------------------------------------+
	
	For additional information about DirectPlay, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q240429 DirectX: Ports Required to Play on a Network
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
