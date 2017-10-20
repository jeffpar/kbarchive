---
layout: page
title: "Q154786: Cannot Launch New Campaign with ATI Mach8 Display Driver"
permalink: /kb/154/Q154786/
---

## Q154786: Cannot Launch New Campaign with ATI Mach8 Display Driver

{% raw %}

	Article: Q154786
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for Windows 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the Campaign button on the Command screen in Close Combat,
	the New Campaign Game screen does not appear as expected.
	
	CAUSE
	=====
	
	You may experience this situation if you are using an ATI Graphics Ultra (Mach8)
	video card and the Windows 95 supplied driver for this card.
	
	Another issue associated with this display driver is a very slow screen redraw
	when you start Close Combat.
	
	RESOLUTION
	==========
	
	To create a new Campaign in Close Combat, use a different display driver.
	
	Follow the steps outlined below to change to the Super VGA display driver:
	
	1. Exit Close Combat.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Display, click the Settings tab, and then click Change Display
	  Type.
	
	4. Click Change next to Adapter Type.
	
	5. Click Show All Devices, click (Standard Display Types) on the left side, and
	  click Super VGA on the right side.
	
	6. Click OK.
	
	7. Click Close, then click Close again.
	
	8. Click Yes to restart your computer.
	
	Additional query words: 1.00 slow draw video
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbCloseCombat
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
