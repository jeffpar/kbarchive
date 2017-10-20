---
layout: page
title: "Q158389: Games: Redraw Problems with ATI Video Cards"
permalink: /kb/158/Q158389/
---

## Q158389: Games: Redraw Problems with ATI Video Cards

{% raw %}

	Article: Q158389
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Golf for Windows, version 3.0 
	- Microsoft Return of Arcade for Windows, version 1.0 
	- Microsoft Best of Windows Entertainment Pack, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The screen may redraw slowly in the programs listed above when you are using
	some ATI video drivers.
	
	RESOLUTION
	==========
	
	This problem can be corrected by adding the following line to the [Display]
	section of the System.ini file:
	
	  STRETCHENGINE=0
	
	MORE INFORMATION
	================
	
	Adding STRETCHENGINE=0 to the System.ini file changes the stretching of bitmaps
	from the ATI video driver to Windows or the CPU. This solution may work for
	other programs experiencing screen redraw problems using ATI video drivers.
	
	Additional query words: 1.00 3.00 close combat ATI redraw slow video stretchengine stretch engine upsidedown upside down bow golf roa arcade
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbArcadeRet kbZNotKeyword kbGolfSearch kbArcadeSearch kbCloseCombatSearch kbWinEntPkSearch kbZNotKeyword3 kbWinEntPkBest kbCloseCombat kbGolf300
	Version           : WINDOWS:1.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
