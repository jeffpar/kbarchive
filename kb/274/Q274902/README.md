---
layout: page
title: "Q274902: Combat Flight Simulator 2: Graphics Options Are Turned Off When"
permalink: /kb/274/Q274902/
---

## Q274902: Combat Flight Simulator 2: Graphics Options Are Turned Off When

{% raw %}

	Article: Q274902
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press ALT+TAB to switch to the Microsoft Windows desktop or to another
	program and then press ALT+TAB again to switch back to Microsoft Combat Flight
	Simulator 2, you may unexpectedly disable certain graphics options in the game.
	
	For example, dithering may be turned off.
	
	CAUSE
	=====
	
	This behavior can occur if the Windows color palette is set to True Color (32
	bit).
	
	RESOLUTION
	==========
	
	To resolve this issue, reduce the Windows color palette setting:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Colors or Color Palette box, click High Color (16 bit) or True Color
	  (24 bit), and then click OK.
	
	NOTE: If neither of these settings is available, your video adapter does not
	support lower color palette settings.
	
	5. If you are prompted to restart the computer, do so.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Microsoft Combat Flight
	Simulator 2: WWII Pacific Theater, version 1.0.
	
	Additional query words: 1.00 msgame combatfs cfs2 settings disabled hardware acceleration graphic
	
	======================================================================
	Keywords          : kbdisplay kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
