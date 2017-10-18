---
layout: page
title: "Q242511: AoE II: Hangs or Quits Unexpectedly During Opening Movie"
permalink: kb/242/Q242511/
---

## Q242511: AoE II: Hangs or Quits Unexpectedly During Opening Movie

	Article: Q242511
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0; :
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbenv kbimu msgame
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Age of Empires II: The Age of Kings, the program may stop
	responding (hang) or quit unexpectedly during the opening movie.
	
	CAUSE
	=====
	
	This behavior can occur if an Intergraph Intense3D 100 video adapter is
	installed in your computer.
	
	RESOLUTION
	==========
	
	To work around this issue, add the "Nostartup" parameter to the command line in
	the "Age of Empires II" shortcut to prevent the opening movie from being played
	when you start the game. To do this:
	
	1. Right-click Start, and then click Explore.
	
	2. In the Start Menu folder, double-click the Programs folder.
	
	3. Double-click the Microsoft Games folder.
	
	4. Double-click the "Age of Empires II" folder.
	
	5. Right-click the "Age of Empires II" shortcut, and then click Properties.
	
	6. On the Shortcut tab, click the Target box, press the END key, press the
	  SPACEBAR, type "Nostartup" (without the quotation marks), and then click OK.
	
	7. To replace the "Age of Empires II" shortcut on the Windows desktop:
	
	  a. In the "Age of Empires II" folder in Windows Explorer, right-click the
	     "Age of Empires II" shortcut, and then click Copy.
	
	  b. Close Windows Explorer.
	
	  c. Right-click an empty area on the desktop, and then click Paste. If you are
	     prompted to replace the file, click Yes.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 2.00 aoe2 aok aoeii film clip freeze lock crash cinematic
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbenv kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbAOESearch kbAOE2Kings
	Version           : WINDOWS:2.0; :
	Issue type        : kbprb
	
	=============================================================================
	
