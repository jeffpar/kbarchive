---
layout: page
title: "Q242516: Age of Empires II: Screen Turns Black After Opening Movie"
permalink: /kb/242/Q242516/
---

## Q242516: Age of Empires II: Screen Turns Black After Opening Movie

	Article: Q242516
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0; :
	Operating System(s): 
	Keyword(s): kbdisplay kbenv aoe kbimu msgame
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Age of Empires II: The Age of Kings, the screen may turn black
	after the opening movie is finished being played.
	
	In some cases, you may be able to press the ESC key or click the mouse to restore
	the game screen.
	
	CAUSE
	=====
	
	This behavior can occur if an outdated video driver for your video adapter is
	installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your hardware manufacturer for information about
	how to obtain and install the latest video driver available for your video
	adapter.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
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
	
	7. To replace the "Age of Empires II" shortcut on the Windows desktop with the
	  shortcut containing the "Nostartup" parameter:
	
	  a. In the "Age of Empires II" folder in Windows Explorer, right-click the
	     "Age of Empires II" shortcut, and then click Copy.
	
	  b. Close Windows Explorer.
	
	  c. Right-click an empty area on the desktop, and then click Paste. If you are
	     prompted to replace the file, click Yes.
	
	Additional query words: 2.00 aoe2 aok aoeii blank empty film clip
	
	======================================================================
	Keywords          : kbdisplay kbenv aoe kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbAOESearch kbAOE2Kings
	Version           : WINDOWS:2.0; :
	Issue type        : kbprb
	
	=============================================================================
	
