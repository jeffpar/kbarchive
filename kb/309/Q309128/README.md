---
layout: page
title: "Q309128: MechWarrior 4: Err Msg Connecting to Multiplayer Game"
permalink: kb/309/Q309128/
---

## Q309128: MechWarrior 4: Err Msg Connecting to Multiplayer Game

	Article: Q309128
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a multiplayer game of Microsoft MechWarrior 4,
	you may receive an error message that states "Unable to Connect" or "Server
	Connection Failed."
	
	CAUSE
	=====
	
	This behavior can occur when you connect to the MechWarrior 4 server through a
	proxy server or firewall.
	
	RESOLUTION
	==========
	
	Firewall users must open up ports to use ZoneMatch and DirectX 8 DirectPlay port
	ranges to successfully participate in games. Matchmaking needs the following TCP
	ports opened:
	
	  
	  27999
	  28805
	  28806
	  28807
	  28808
	
	  For PINGs to work properly, UDP port 28800 must be open.
	
	NOTE: To have statistics posted to stats.zone.com from behind a firewall, you
	must have TCP port 9999 open for outgoing connections.
	
	MORE INFORMATION
	================
	
	In addition to the ports listed earlier in this article, the DirectX8 DirectPlay
	ports are outlined in the following article:
	
	  Q240429 DirectX: Ports Required to Play on a Network
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
