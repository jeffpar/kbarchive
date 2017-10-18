---
layout: page
title: "Q240429: DirectX: Ports Required to Play on a Network"
permalink: kb/240/Q240429/
---

## Q240429: DirectX: Ports Required to Play on a Network

	Article: Q240429
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbimu msgamekbfaq
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Close Combat III: The Russian Front 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator 2000 
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition 
	- Microsoft Golf 2001 Edition 
	- Microsoft Links LS 2000 
	- Microsoft Links 2001 
	- Microsoft MechCommander 2.0, version 1.0 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft StarLancer, version 1.0 
	- Microsoft Urban Assault, version 1.0 
	- Microsoft Zone.com 
	- Microsoft Allegiance, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the ports required to play Microsoft DirectX multiplayer
	games through a firewall, a proxy server, a router, Network Address Translation
	(NAT), or Intenet Connection Sharing (ICS).
	
	MORE INFORMATION
	================
	
	To verify that these ports are open or to open these ports, please contact your
	network administrator or Internet service provider (ISP).
	
	If you are the administrator of the network, please consult the documentation
	provided with your networking software to determine the steps to open these
	ports.
	
	To play DirectX games through a network firewall or proxy server, the following
	requirements must be met:
	
	- To ensure DirectPlay compatibility, the latest version of DirectX should be
	  installed on the computers used by all players who participate in the game.
	
	- The following TCP and UDP ports must be open on the firewall or proxy
	  server:
	
	  Using DirectX 7 method::
	
	  +-----------------------------------------------------------------------------------------+
	  | Connection              | Ports for Client Configuration | Ports for Host Configuration | 
	  +-----------------------------------------------------------------------------------------+
	  | Initial TCP Connection  | 47624 Outbound                 | 47624 Inbound                | 
	  +-----------------------------------------------------------------------------------------+
	  | Subsequent TCP Inbound  | 2300-2400                      | 2300-2400                    | 
	  +-----------------------------------------------------------------------------------------+
	  | Subsequent TCP Outbound | 2300-2400                      | 2300-2400                    | 
	  +-----------------------------------------------------------------------------------------+
	  | Subsequent UDP Inbound  | 2300-2400                      | 2300-2400                    | 
	  +-----------------------------------------------------------------------------------------+
	  | Subsequent UDP Outbound | 2300-2400                      | 2300-2400                    | 
	  +-----------------------------------------------------------------------------------------+
	
	  Using DirectX 8 method::
	
	  +-----------------------------------------------------------------------------------------+
	  | Connection              | Ports for Client Configuration | Ports for Host Configuration | 
	  +-----------------------------------------------------------------------------------------+
	  | Initial UDP Connection  | 6073 Outbound                  | 6073 Inbound                 | 
	  +-----------------------------------------------------------------------------------------+
	  | Subsequent UDP Inbound  | 2302-2400                      | 2302-2400                    | 
	  +-----------------------------------------------------------------------------------------+
	  | Subsequent UDP Outbound | 2302-2400                      | 2302-2400                    | 
	  +-----------------------------------------------------------------------------------------+
	
	To determine the DirectPlay method for games that utilize the DirectPlay Lobby
	service, follow these steps:
	
	1. On the Windows Start menu, click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the "Save All Information" button to save a Dxdiag.txt report.
	
	4. Click Desktop, and then click Save.
	
	5. Open the DxDiag.txt file on your desktop and find the section marked
	  DirectPlay Lobbyable Apps. Note that each game listed here will report either
	  "(DX7)" or "(DX8)" which corresponds to its DirectPlay connection method.
	
	  NOTE: DirectPlay8 games can work with the Internet Connection Firewall (ICF)
	  capabilities of Windows XP. When the game begins hosting, enumerating, or
	  connecting, the appropriate ports will automatically open and when the game
	  shuts down, these ports will automatically close.
	
	Additionally, Windows Me ICS, Windows XP ICS, and UPnP-compliant NATs cooperate
	with DirectPlay8 to make it possible to run full-featured, DirectPlay8 sessions
	through the NAT. Users can host or join DirectPlay8 sessions that are hosted
	inside or outside the NAT. No special configuration is required.
	
	If you are using UPnP compliant network devices and are having difficulty, please
	check the following.
	
	- When using Windows XP, please ensure you are logged into the computer with
	  and account that has administrator privileges.
	
	- If you are using a hardware NAT, check with the manufacturer to see if it is
	  UPnP-compliant or if there are any updates for it, if it isn't.
	
	- When using Windows XP ICS, be sure that the "Allow other network users to
	  control or disable the shared Internet connection" box is checked in the
	  shared network device's Properties.
	
	- A client on a Windows Me ICS machine must join the session before any client
	  behind the NAT joins the session or else the ICS machine will not be able to
	  join.
	
	For additional information about ICS, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q234815 Description of Internet Connection Sharing
	
	Additional query words: msgame direct-x dx fire wall dplay
	
	======================================================================
	Keywords          : kbenv kbnetwork kbimu msgame kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbLinkGolfSearch kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolf2001 kbGolf98 kbGolf99 kbGolfSearch kbMSNSearch kbAllegianceSearch kbMotocrossSearch kbStarlancerSearch kbCloseCombatSearch kbCARTRacingSearch kbMidtownMadSearch kbMonsterTMSearch kbAOESearch kbMechCommSearch kbMonsterTM kbAllegiance kbStarlancer kbUrbanAssault kbMonsterTM2 kbAOEExpRome kbAOE2ExpConquerors kbAOE2Kings kbCloseCombat2 kbCloseCombat3 kbCloseCombat kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbMotocrossM kbMidtownMadness2 kbMotocrossM2 kbCARTRacing kbLinks2001 kbLinksLS2000 kbZone kbMechCommander200 kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
