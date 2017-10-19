---
layout: page
title: "Q155115: Windows 95 OSR2 Hangs at Startup with 3Com 3c562"
permalink: /kb/155/Q155115/
---

## Q155115: Windows 95 OSR2 Hangs at Startup with 3Com 3c562

	Article: Q155115
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a computer running Windows 95 OEM Service Release 2 (OSR2) with a
	3Com 3c562 multifunction PC Card inserted, the computer stops responding
	(hangs), or the network is inaccessible.
	
	CAUSE
	=====
	
	The OSR2 Modem PC Card power management feature is not compatible with
	multifunction adapters.
	
	RESOLUTION
	==========
	
	To disable the OSR2 "Turn off PC Card modems when not in use" power feature,
	follow these steps:
	
	1. Remove the 3Com 3c562 from the PC Card socket
	
	2. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	3. In Control Panel, double-click Power.
	
	4. On the PC Card Modem tab, click the "Turn off PC Card modem when not in use"
	  check box to clear it.
	
	5. Click OK.
	
	6. Shut down and then restart the computer normally.
	
	MORE INFORMATION
	================
	
	The 3Com 3c562 multifunction PC Card includes a modem and a network adapter.
	Disabling the OSR2 Modem PC Card power management feature does not adversely
	affect power consumption because this card includes its own power management
	support.
	
	By default, installing the 3Com 3c562 multifunction card disables the "Turn off
	PC Card modems when not in use" feature. Manually enabling this feature may
	result in the inability to start Windows 95 OSR2 with the card in the socket.
	
	
	Additional query words: PCMCIA PC-Card
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	
