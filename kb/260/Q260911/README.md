---
layout: page
title: "Q260911: AoE II: Unable to Connect by Using Direct Cable Connection"
permalink: /kb/260/Q260911/
---

## Q260911: AoE II: Unable to Connect by Using Direct Cable Connection

{% raw %}

	Article: Q260911
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbimu
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a Direct Cable Connection to play a multiplayer game of
	Microsoft Age of Empires II, The Age of Kings, you may receive an error message,
	stating that you cannot connect.
	
	CAUSE
	=====
	
	This behavior can occur if one or more of the following conditions are true:
	
	- A Direct Cable Connection is already established.
	
	- The computers are connected with a parallel cable.
	
	- The computers are using a network protocol that is not supported by Age of
	  Empires II, The Age of Kings.
	
	- Direct Cable Connection is not properly installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Install the Age of Empires II: The Age of Kings 2.0a Update
	-----------------------------------------------------------
	
	Install the latest update for Age of Empires II: Age of Kings. The latest update,
	Microsoft Age of Empires II: The Age of Kings 2.0a Update, includes multiplayer
	performance enhancements.
	
	To download the Age of Kings 2.0a Update, visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/games/age2/downloads.htm
	
	Close the Existing Direct Cable Connection
	------------------------------------------
	
	If a Direct Cable Connection is already established, close the connection, and
	then start Age of Empires II, The Age of Kings.
	
	Install and Use the IPX/SPX Network Protocol
	--------------------------------------------
	
	If your computers are connected with a parallel cable, install and use the
	IPX/SPX network protocol:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. Click Add, click Protocol, and then click Add.
	
	4. Click Microsoft, and then click IPX/SPX Compatible Protocol from the list.
	
	5. Click OK, and then click OK again.
	
	6. When you are prompted to restart your computer, click Yes.
	
	7. Click Start, point to Settings, and then click Control Panel.
	
	8. Double-click Network.
	
	9. Click IPX/SPX-compatible Protocol, and then click Properties.
	
	10. Click to select the "I want to enable NetBIOS over IPX/SPX" check box.
	
	11. Click the Advanced tab.
	
	12. In the Properties box, click Ethernet 802.3 in the Frame Type box.
	
	13. Click Maximum Connections, and then select or type "10" (without the
	  quotation marks), in the Value box.
	
	14. Click Maximum Sockets and then select or type "10" (without the quotation
	  marks), in the Value box.
	
	15. Click to select the "Set this Protocol to be the default protocol" check
	  box.
	
	If you use this method, make sure that you establish the Direct Cable Connection
	before you start the game, and make sure that you select an IPX/SPX game instead
	of a Direct Cable Connection game.
	
	NOTE: NetBEUI is an unsupported network protocol for all Microsoft DirectPlay
	games. Do not use the NetBEUI network protocol to play a DirectPlay game when
	you use Direct Cable Connection.
	
	Make Sure That Direct Cable Connection Is Properly Installed
	------------------------------------------------------------
	
	To make sure that Direct Cable Connection is properly installed:
	
	- Click Start, point to Settings, and then click Control Panel.
	
	- Double-click Add/Remove Programs.
	
	- Click the Windows Setup tab.
	
	- Under Components, click Communications, and then click Details.
	
	- Click to clear the Direct Cable Connection check box, click OK, and then
	  click Apply.
	
	- Under Components, click Communications, and then click Details.
	
	- Click to select the Direct Cable Connection check box, and then click OK.
	
	- Click OK again.
	
	  NOTE: You may be prompted to insert your Microsoft Windows CD-ROM into your
	  CD-ROM drive.
	
	For additional information about how to install Direct Cable Connection, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q188167 Unable to Connect Using Direct Cable Connection
	
	  Q159578 Cannot Find Host Computer Using Direct Cable Connection
	
	  Q195240 How to Configure Direct Cable Connection for Optimal Performance
	
	Additional query words: 2.00 msgame aok aoe2 aoeii upgrade patch
	
	======================================================================
	Keywords          : kbnetwork kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbAOESearch kbAOE2Kings
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
