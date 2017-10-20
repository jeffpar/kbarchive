---
layout: page
title: "Q194808: Combat Flight Simulator: Missing, Distorted, or Blurred Textures"
permalink: /kb/194/Q194808/
---

## Q194808: Combat Flight Simulator: Missing, Distorted, or Blurred Textures

{% raw %}

	Article: Q194808
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu msgamekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Combat Flight Simulator, you may experience any of the following
	symptoms:
	
	- Textures are missing.
	
	- Textures are distorted.
	
	- Texture colors are distorted.
	
	- Textures are blurred.
	
	- Screen text is blurred or illegible.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- You need to update the drivers for the 3D accelerator card or display adapter
	  installed in your computer.
	
	- 3D hardware acceleration and MIP mapping are enabled in Combat Flight
	  Simulator.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your hardware manufacturer to inquire about
	obtaining the latest drivers for your 3D accelerator card or display adapter.
	For information about how to contact your hardware manufacturer, please see the
	"More Information" section later in this article.
	
	To work around this issue, disable MIP Mapping in Combat Flight Simulator. To do
	this, follow these steps:
	
	1. Start Combat Flight Simulator.
	
	2. On the startup screen, click Settings.
	
	3. Click Advanced Display Settings.
	
	4. Under Hardware Acceleration, click to clear the MIP Mapping check box, and
	  then click OK.
	
	5. Click OK.
	
	If the issue continues to occur, disable 3D hardware acceleration in Combat
	Flight Simulator. To do this, follow these steps:
	
	1. Start Combat Flight Simulator.
	
	2. On the startup screen, click Settings.
	
	3. Click to clear the Enable Hardware Acceleration check box, and then click OK.
	
	MORE INFORMATION
	================
	
	For additional information about how to contact your hardware manufacturer,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words: 1.00 msgame combatfs cfs blurry unreadable kbfaq
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu msgame kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
