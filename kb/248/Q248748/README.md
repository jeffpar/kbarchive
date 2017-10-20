---
layout: page
title: "Q248748: Fighter Ace II: Error Messages When You Attempt to Start Game"
permalink: /kb/248/Q248748/
---

## Q248748: Fighter Ace II: Error Messages When You Attempt to Start Game

{% raw %}

	Article: Q248748
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbtool igz kbimu msgame
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fighter Ace II 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Fighter Ace II, you may receive the
	following series of error messages:
	
	   - Error
	
	   - The game has been terminated. Video mode error
	  Can't set video mode 640x480x16
	
	   - Runtime Error!
	
	  Program: C:\Program Files\Microsoft Games\Fighter
	  Ace II\FAII.Exe
	
	  Abnormal Program Termination
	
	CAUSE
	=====
	
	This behavior can occur if the graphics hardware acceleration setting on your
	computer is set too low.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the graphics hardware acceleration setting:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the "Hardware acceleration" slider all the way to Full (the "All
	  accelerator functions" setting).
	
	5. Click OK, and then click OK again.
	
	6. When you are prompted to restart the computer, do so.
	
	If the issue continues to occur, repeat these steps to move the "Hardware
	acceleration" slider one notch to the left of Full (the "Most accelerator
	functions" setting).
	
	Additional query words: 2.00 msgame fa msngz igz
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbtool igz kbimu msgame 
	Technology        : kbGamesSearch kbMSNSearch kbFighterAceSearch kbFighterAce2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
