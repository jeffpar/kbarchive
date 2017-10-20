---
layout: page
title: "Q268811: AoE II Expansion: Unable to Join Multiplayer Game"
permalink: /kb/268/Q268811/
---

## Q268811: AoE II Expansion: Unable to Join Multiplayer Game

{% raw %}

	Article: Q268811
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II Expansion: The Conquerors, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to host an Internet multiplayer game of Microsoft Age of
	Empires II Expansion: The Conquerors, other players may be unable to join the
	game.
	
	CAUSE
	=====
	
	This behavior can occur if more than one network interface card is installed in
	your computer.
	
	When you click IP Address on the Multiplayer Game screen in Age of Empires II
	Expansion: The Conquerors, the game may report an incorrect IP address.
	
	RESOLUTION
	==========
	
	If your guest players are unable to use this IP address to connect to your game,
	use the IP Configuration tool included with Microsoft Windows to determine the
	IP address for the network interface card that you want to use for the game.
	
	To do this:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "winipcfg" (without the quotation marks), and then
	  click OK.
	
	3. In the unlabeled box, click the network interface card that you want to use
	  to host the game.
	
	  NOTE: If you want to use a dial-up Internet connection to host the game, click
	  PPP Adapter.
	
	4. In the IP Address box, note the IP address for the network interface card,
	  and then click OK.
	
	5. Provide the IP address that you noted in step 4 to your guest players.
	
	The guest players should now be able to connect to the game that you are hosting.
	
	Additional query words: 1.00 msgame aok aoeii aoe2 expansion pack adapter multiplay win98x
	
	======================================================================
	Keywords          : kbnetwork kbtool kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbAOESearch kbAOE2ExpConquerors
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
