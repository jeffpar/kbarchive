---
layout: page
title: "Q236430: Asheron's Call: Network Ports Required to Play"
permalink: /kb/236/Q236430/
---

## Q236430: Asheron's Call: Network Ports Required to Play

	Article: Q236430
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork igz kbimu msgamekbfaq
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Asheron's Call: Dark Majesty, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the ports required to play Microsoft Asheron's Call with
	other players through a firewall or proxy server, or by using Network Address
	Translation (NAT) or Internet Connection Sharing (ICS).
	
	NOTE: This article is provided for informational purposes only. Microsoft does
	not guarantee that Asheron's Call will work through your firewall, proxy server,
	NAT, or ICS.
	
	MORE INFORMATION
	================
	
	The following tables list the UDP ports required to play Asheron's Call with
	other players on Zone.com through a network firewall or proxy server.
	
	To verify if these ports are open or for instructions about how to open these
	ports, please contact your network administrator or Internet service provider
	(ISP).
	
	If you are the network administrator, please refer to the documentation provided
	with your networking software for instructions about how to open these ports.
	
	  
	  +------------------------------------------------------------------------------------------+
	  | Connection              | AC IP address | Port(s)                                        | 
	  +------------------------------------------------------------------------------------------+
	  | Initial UDP Outbound    | 207.46.204.*  | 9000                                           | 
	  +------------------------------------------------------------------------------------------+
	  | Subsequent UDP Outbound | 207.46.204.*  | 9004, 9008, 9012                               | 
	  +------------------------------------------------------------------------------------------+
	  | Subsequent UDP Inbound  | 207.46.204.*  | 9000, 9001, 9004, 9005, 9008, 9009, 9012, 9013 | 
	  +------------------------------------------------------------------------------------------+
	
	and
	
	  
	  +------------------------------------------------------------------------------------------+
	  | Connection              | AC IP address | Port(s)                                        | 
	  +------------------------------------------------------------------------------------------+
	  | Initial UDP Outbound    | 207.46.204.*  | 9004                                           | 
	  +------------------------------------------------------------------------------------------+
	  | Subsequent UDP Outbound | 207.46.204.*  | 9000, 9008, 9012                               | 
	  +------------------------------------------------------------------------------------------+
	  | Subsequent UDP Inbound  | 207.46.204.*  | 9000, 9001, 9004, 9005, 9008, 9009, 9012, 9013 | 
	  +------------------------------------------------------------------------------------------+
	
	NOTE: On some proxy servers, such as Microsoft Proxy Server, you need to open UDP
	port 0 as an additional Subsequent UDP Inbound port.
	
	Ports defined as "Inbound" are those originating from the Asheron's Call server
	and going to the client through the firewall or proxy server. Ports defined as
	"Outbound" are those originating from the client and going to the Asheron's Call
	server through the firewall or proxy server.
	
	Depending on your network configuration, you may also need change the default
	network port setting in Asheron's Call. These are available by following these
	steps:
	
	1. Click Start, point to Programs, point to Microsoft Games, point to Asheron's
	  Call, and then click Asheron's Call.
	
	2. Click Settings.
	
	For additional information about changing Asheron's Call network settings, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q238325 Asheron's Call: Only One Player on Your LAN Is Able to Play Game
	
	Additional query words: 1.00 msgame igz msngz ac fire wall firewall asherons
	
	======================================================================
	Keywords          : kbnetwork igz kbimu msgame kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbMSNSearch kbAsheronSearch kbAsheron100 kbAsheronDarkMaj
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	
