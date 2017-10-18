---
layout: page
title: "Q189317: MTM2: &quot;Application Error&quot; Installing Game in Windows NT 4.0"
permalink: kb/189/Q189317/
---

## Q189317: MTM2: &quot;Application Error&quot; Installing Game in Windows NT 4.0

	Article: Q189317
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu msgame mtm2
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Monster Truck Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Monster Truck Madness 2 on a computer running
	Microsoft Windows NT Workstation version 4.0, you may receive the following
	error message:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  EBUxx.exe
	  Exception: access violation (0xc0000005)
	
	CAUSE
	=====
	
	This behavior can occur if your computer is configured to use more than one
	processor.
	
	The Monster Truck Madness 2 Setup program creates a temporary program named
	Ebuxx.exe (where xx is a randomly assigned number). Ebuxx.exe cannot run on
	computers configured to use multiple processors.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure the Ebuxx.exe program to use only one
	processor. To do this, follow these steps:
	
	1. Start the Monster Truck Madness 2 Setup program.
	
	2. When the opening Setup screen is displayed, press CTRL+ALT+DELETE.
	
	3. Click Task Manager.
	
	4. Click the Processes tab.
	
	5. Right-click the Ebuxx.exe process, and then click Set Affinity.
	
	6. Click each CPU check box to clear it, with the exception of CPU 0, and then
	  click OK.
	
	7. On the File menu, click Exit Task Manager.
	
	8. Follow the instructions on the screen to complete the installation of Monster
	  Truck Madness 2.
	
	MORE INFORMATION
	================
	
	The Ebuxx.exe program is deleted when Monster Truck Madness 2 Setup is finished.
	
	Additional query words: 2.00 msgame mtm2 general invalid page fault winnt
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu msgame mtm2 
	Technology        : kbGamesSearch kbMonsterTMSearch kbMonsterTM2
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
