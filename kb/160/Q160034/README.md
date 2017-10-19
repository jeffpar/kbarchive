---
layout: page
title: "Q160034: Modem Disconnected Before PC Card Modem Detects Dial Tone"
permalink: /kb/160/Q160034/
---

## Q160034: Modem Disconnected Before PC Card Modem Detects Dial Tone

	Article: Q160034
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	When you attempt to dial out using a PC Card modem, the communications
	program may display a Disconnected status before the modem detects a dial
	tone.
	
	CAUSE
	=====
	
	The Disconnected status may be the result of a timing issue when the modem is
	being powered up.
	
	RESOLUTION
	==========
	
	To work around this problem, disable the PC Card modem power management feature
	with the following steps:
	
	1. In Control Panel, double-click Power.
	
	2. Click the PC Card Modems tab.
	
	3. Click the "Turn off PC Card modems when not in use" check box to clear it.
	
	4. Click OK, and then restart your computer.
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
