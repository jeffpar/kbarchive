---
layout: page
title: "Q138341: Dialing with &quot;W&quot; Calling Card Dialing Rules Hangs Modem"
permalink: /kb/138/Q138341/
---

## Q138341: Dialing with &quot;W&quot; Calling Card Dialing Rules Hangs Modem

	Article: Q138341
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 msnetwork
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you dial using a calling card that is configured to use the "Wait for
	second dial tone" (or "W") dialing rule, the modem may stop dialing.
	
	CAUSE
	=====
	
	The "W" dialing rule causes the modem to wait for a second dial tone. Some
	modems may not recognize the second dial tone, causing the modem to wait
	indefinitely.
	
	RESOLUTION
	==========
	
	To work around this behavior, follow these steps:
	
	1. In Control Panel, double-click the Modems icon.
	
	2. Click Dialing Properties.
	
	3. Click Change to edit the properties for the calling card.
	
	4. Click New, type a name for the custom calling card, and then click OK.
	
	5. Click Advanced.
	
	6. Edit the dialing rules. Replace all instances of "W" with four commas. You
	  can adjust the number of commas as is appropriate for your modem.
	
	  NOTE: Commas may not be necessary on some digital lines.
	
	7. Click Close or OK until you return to Control Panel.
	
	MORE INFORMATION
	================
	
	For almost all modems, a comma (,) defaults to a 2-second pause in the dialing
	process. You can adjust the number of commas for a longer or shorter pause.
	
	You can also adjust the default pause length produced by a comma on most modems
	by using the "ATS8=<n>" command, where <n> is the number of seconds
	(from 0 to 255) the dialing process pauses for each comma. To add this setting,
	double-click Modems in Control Panel, click your modem, click Properties, click
	Advanced on the Connection tab, and type the command in the Extra Settings box.
	
	======================================================================
	Keywords          : win95 msnetwork 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
