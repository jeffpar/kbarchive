---
layout: page
title: "Q261064: MCM2: Game Does Not Respond to Keyboard Commands in Races"
permalink: /kb/261/Q261064/
---

## Q261064: MCM2: Game Does Not Respond to Keyboard Commands in Races

	Article: Q261064
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbimu msgame
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Motocross Madness 2, the game may not respond to
	keyboard commands during races.
	
	NOTE: Microsoft Windows keyboard commands such as CTRL+ALT+DEL and ALT+F4 still
	function properly.
	
	In addition, when you attempt to place the computer into Hibernate mode, you may
	receive an error message similar to the following:
	
	  The device driver for the 'PC/AT Enhanced PS/2 101/102-Key Keyboard' device
	  is preventing the machine from entering hibernation.
	
	CAUSE
	=====
	
	This behavior can occur if Advanced Power Management (APM) is enabled on the
	computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, turn off Advanced Power Management. To do this, use the
	appropriate method for your version of Microsoft Windows:
	
	Microsoft Windows 95
	--------------------
	
	1. Disable APM in your computer's Basic Input/Output System (BIOS). For
	  information about how to disable APM in your computer's BIOS, consult the
	  documentation provided with your computer.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click System.
	
	4. Click the Device Manager tab.
	
	5. Double-click the plus sign (+) next to System Devices to expand the branch.
	
	6. Click Advanced Power Management Support, and then click Properties.
	
	7. Click the Settings tab, click to clear the Enable Power Management Support
	  check box, and then click OK.
	
	8. Click OK, and then close Control Panel.
	
	9. Restart the computer.
	
	Windows 95 OEM Service Release 2 and Microsoft Windows 98
	---------------------------------------------------------
	
	1. Disable APM in your computer's Basic Input/Output System (BIOS). For
	  information about how to disable APM in your computer's BIOS, consult the
	  documentation provided with your computer.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Power.
	
	4. Click to clear the "Allow Windows to manage power use on this computer" check
	  box.
	
	5. Click OK, and then close Control Panel.
	
	6. Restart the computer.
	
	Microsoft Windows 2000
	----------------------
	
	1. Disable APM in your computer's Basic Input/Output System (BIOS). For
	  information about how to disable APM in your computer's BIOS, consult the
	  documentation provided with your computer.
	
	2. Log on to the computer as an Administrator.
	
	3. Click Start, point to Settings, and then click Control Panel.
	
	4. Double-click Power Options.
	
	5. Click the APM tab.
	
	6. Click to clear the "Enable Advanced Power Management support" check box.
	
	7. Click OK, and then close Control Panel.
	
	8. Restart the computer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Motocross Madness 2,
	version 2.0.
	
	Additional query words: 2.00 msgame mcm2 motorcross key stroke stuck dead move gas win2k
	
	======================================================================
	Keywords          : kbenv kbimu msgame 
	Technology        : kbGamesSearch kbMotocrossSearch kbMotocrossM2
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
