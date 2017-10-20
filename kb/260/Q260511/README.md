---
layout: page
title: "Q260511: Asheron's Call Error Message: Server Connection Lost"
permalink: /kb/260/Q260511/
---

## Q260511: Asheron's Call Error Message: Server Connection Lost

{% raw %}

	Article: Q260511
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbimu msgame
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Asheron's Call: Dark Majesty, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Asheron's Call, you may receive the following error
	message:
	
	  Server connection lost.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- You connect to the Asheron's Call game server through a proxy server or
	  firewall.
	
	- You are experiencing high Internet latency.
	
	- The Asheron's Call game servers are down.
	
	- The Asheron's Call game server has lost its connection to the Internet.
	
	- After you connect to the Zone, Asheron's Call is unable to complete the
	  automatic game software update.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented. If the issue continues to occur, proceed to the next method.
	
	Configure the Network:
	
	If you are using Internet Connection Sharing (ICS) or Network Address Translation
	(NAT) you may need to set Asheron's Call use a different network setting. To do
	this, follow these steps:
	
	1. Click Start, point to Programs, point to Microsoft Games, and then click
	  Asheron's Call.
	
	2. Click Settings.
	
	3. Under "Port number to use", select "Derived from your IP address".
	
	4. Click OK, and then click Exit.
	
	NOTE: For Asheron's Call, version 1.0 the network port settings may not be save
	correctly on Windows 2000 or Windows XP.
	For additional information about the network ports that are necessary, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q236430 Asheron's Call: Network Ports Required to Play
	
	Reduce Your Internet Latency
	----------------------------
	
	For additional information about how to reduce your Internet latency, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q232392 Zone.com: High Latency in Game Lobbies or When Playing Games
	
	Select a Different Asheron's Call Game Server
	---------------------------------------------
	
	If the game server on which you are playing loses its connection to the Internet,
	return to the Asheron's Call Game Worlds page and connect to a different game
	world.
	
	If you are unable to connect to a different game world, check the status of the
	Asheron's Call game servers in the game lobby.
	
	If the game servers are down, the Play button is dimmed, and you receive a
	message that contains information regarding the status of the Asheron's Call
	game servers.
	
	To check the state of the network, visit the following MSN Zone Web site:
	
	  http://zone.msn.com/asheronscall/news/ASHEnewsnetwork.asp
	
	Manually Install the Game Download Patch
	----------------------------------------
	
	Download and install the Game Download Patch from the following Zone Web site:
	
	  http://zone.msn.com/asheronscall/downloads.asp
	
	Additional query words: 1.00 msgame igz msngz ashcall ac quits stops asherons
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbMSNSearch kbAsheronSearch kbAsheron100 kbAsheronDarkMaj
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
