---
layout: page
title: "Q261071: MCM2: Game Stops Responding After Long Period of Inactivity"
permalink: /kb/261/Q261071/
---

## Q261071: MCM2: Game Stops Responding After Long Period of Inactivity

{% raw %}

	Article: Q261071
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbimu msgame
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Motocross Madness 2, the game may stop responding after
	a long period of inactivity.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You selected the Minimum installation option when you installed Motocross
	  Madness 2.
	
	- Advanced Power Management is enabled on the computer.
	
	RESOLUTION
	==========
	
	To work around this issue, turn off Advanced Power Management before you start
	Motocross Madness 2. To do this, use the appropriate method for your operating
	system.
	
	Microsoft Windows 95
	--------------------
	
	To turn off Advanced Power Management:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Power.
	
	3. On the Power tab, click to clear the "Allow Windows to manage power use on
	  this computer" check box.
	
	4. Click the Disk Drives tab.
	
	5. Click to clear the "When Powered By AC Power" check box.
	
	6. Click OK, and then close Control Panel.
	
	Microsoft Windows 98, Microsoft Windows Millennium Edition (Me), or Microsoft Windows 2000
	------------------------------------------------------------------------------------------
	
	To turn off Advanced Power Management:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Power Management or Power Options.
	
	3. On the Power Schemes tab, click Always On under "Power schemes".
	
	4. In the "Turn off monitor" box, click Never.
	
	5. In the "Turn off hard disks" box (if available), click Never.
	
	6. Click OK, and then close Control Panel.
	
	Additional query words: 2.00 msgame mcm2 motorcross hangs apm freeze lock
	
	======================================================================
	Keywords          : kbenv kbimu msgame 
	Technology        : kbGamesSearch kbMotocrossSearch kbMotocrossM2
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
