---
layout: page
title: "Q177901: Age of Empires: Cannot See Multiplayer Game After Modem Connects"
permalink: /kb/177/Q177901/
---

## Q177901: Age of Empires: Cannot See Multiplayer Game After Modem Connects

{% raw %}

	Article: Q177901
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv aoe
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a multiplayer game using a modem connection, you may be able to
	connect with the modem, but you may not be able to see the game.
	
	CAUSE
	=====
	
	This behavior can occur if you have only the Transport Control Protocol/Internet
	Protocol (TCP/IP) installed in the Network tool in Control Panel, and the Obtain
	An IP Address Automatically option is enabled.
	
	RESOLUTION
	==========
	
	To resolve this behavior, install the NetBios Enhanced User Interface protocol
	(NetBEUI), and select the NetBEUI check box in the game connection properties.
	To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. Click Add, click Protocol, and then click Add.
	
	4. In the Manufacturers box, click Microsoft.
	
	5. In the Network Protocols box, click NetBEUI, and then click OK.
	
	6. Click OK. When you are prompted to restart the computer, click Yes.
	
	7. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	8. Right-click the Age of Empires game connection, and then click Properties.
	
	9. Click the Server Types tab, and then click the NetBEUI check box to select
	  it.
	
	10. Click OK, and then close the Dial-Up Networking window.
	
	NOTE: All players participating in the multiplayer Age of Empires game should
	install the NetBEUI protocol, and modify their game connection properties to
	include NetBEUI as an allowed network protocol.
	
	MORE INFORMATION
	================
	
	If the Obtain An IP Address Automatically option is enabled in the TCP/IP
	properties, the computer waits for an IP address from a server. If both players
	participating in the game have only TCP/IP installed and have the Obtain An IP
	Address Automatically option enabled, both computers wait for an IP address.
	Because neither computer is connected to a server, the computers wait
	indefinitely.
	
	Additional query words: 1.00 rise of rome expansion pack age aoe multi-player multiple head-to-head
	
	======================================================================
	Keywords          : kbenv aoe 
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbZNotKeyword kbAOESearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
