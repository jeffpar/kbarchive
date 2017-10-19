---
layout: page
title: "Q274615: CFS2: Other Players Cannot Find Your Multiplayer Session"
permalink: /kb/274/Q274615/
---

## Q274615: CFS2: Other Players Cannot Find Your Multiplayer Session

	Article: Q274615
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork igz kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to host a multiplayer game of Microsoft Combat Flight Simulator
	2: WWII Pacific Theater, you may experience the following symptoms:
	
	- Other players may be unable to find your game session.
	
	- When you click Get IP on the Ready Room screen, Combat Flight Simulator 2 may
	  report your IP address as the reserved IP loopback address (127.00.00.01).
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions is true:
	
	- You used the IP Configuration tool (Ipconfig.exe or Winipcfg.exe) to release
	  and renew the IP address for your dial-up Internet connection, and then
	  attempted to host a multiplayer game.
	
	- You used the IP Configuration tool to release the IP address for your network
	  adapter, and did not renew the IP address.
	
	- When you started your computer, the computer could not automatically obtain
	  an IP address from your network domain name server.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your TCP/IP network
	connection.
	
	Dial-Up Internet Connection
	---------------------------
	
	Disconnect from the Internet, and then establish a new connection to the
	Internet.
	
	Local Area Network (LAN) Connection
	-----------------------------------
	
	Use the IP Configuration tool (Ipconfig.exe or Winipcfg.exe) to renew the IP
	address for your network adapter. To do this:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the appropriate line for your version of Microsoft
	  Windows, and then click OK:
	
	  Microsoft Windows 95 or later:
	
	  winipcfg.exe
	
	  Microsoft Windows NT 4.0 or Microsoft Windows 2000:
	
	  ipconfig.exe
	
	3. Click Release All, click Renew All, and then click OK.
	
	If the issue continues to occur, restart the computer, and then log on to your
	LAN.
	
	MORE INFORMATION
	================
	
	When you use the IP Configuration tool to release your IP address, Windows
	reports that your IP address is the reserved IP loopback address (127.0.0.01).
	The IP loopback address is reserved for use in diagnosing TCP/IP connection
	problems. It is not a valid IP network address.
	
	Additional query words: 1.00 msgame combatfs cfs2 multiplay
	
	======================================================================
	Keywords          : kbnetwork igz kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
