---
layout: page
title: "Q159266: Error Message at Boot with Ositech Trumpcard Ethernet Adapter"
permalink: kb/159/Q159266/
---

## Q159266: Error Message at Boot with Ositech Trumpcard Ethernet Adapter

	Article: Q159266
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an Ositech Trumpcard PC card (Ethernet + modem) while not
	connected to a network, you may receive an error message similar to the
	following message during Windows 95 startup:
	
	  Your network adapter Ositech Trumpcard Ethernet Adapter is not working
	  properly. You may need to set it up again. For more information see the
	  Network Troubleshooter in Windows Help.
	
	An exclamation point in a yellow circle may appear on the card in Device Manager.
	
	CAUSE
	=====
	
	The Ositech Trumpcard shuts down power to the Ethernet portion of the card to
	save battery power if no cable is connected to the network.
	
	RESOLUTION
	==========
	
	You can ignore the error message. If you want to disable the error message,
	follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Ositech Trumpcard adapter, and then click Properties.
	
	3. Click the Advanced tab.
	
	4. In the Connector Type box, click the media (cable type) that you are using.
	
	5. Click OK or Close until you return to Control Panel. When you are prompted to
	  restart the computer, do so.
	
	
	MORE INFORMATION
	================
	
	The modem portion of the card continues to function when the error message is
	received.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
