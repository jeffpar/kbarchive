---
layout: page
title: "Q266038: BB2001: Cannot Start Program After You Enable 3D Acceleration"
permalink: kb/266/Q266038/
---

## Q266038: BB2001: Cannot Start Program After You Enable 3D Acceleration

	Article: Q266038
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbimu msgame bball3d
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2001, version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you enable 3D hardware acceleration in Microsoft Baseball 2001, you may
	experience one or more of the following symptoms:
	
	- You may be unable to start the game.
	
	- The game may stop responding (hang).
	
	- Graphics in the game may be distorted or scrambled.
	
	CAUSE
	=====
	
	This behavior can occur if your video adapter does not properly support Direct3D
	hardware acceleration.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	Method 1: You Are Able to Start Baseball 2001
	---------------------------------------------
	
	If you are able to start Baseball 2001, click the following article number to
	view the article in the Microsoft Knowledge Base.
	
	  Q258591 Baseball 2001: How to Troubleshoot Video Problems
	
	Method 2: You Are Unable to Start Baseball 2001
	-----------------------------------------------
	
	If you are unable to start Baseball 2001, uninstall and then reinstall the
	program:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft Baseball 2001, and then click
	  Add/Remove.
	
	4. Follow the instructions on the screen to uninstall Baseball 2001.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\setup.exe
	
	  where <cd-rom> is the drive letter of your CD-ROM drive.
	
	7. Follow the instructions on the screen to reinstall Baseball 2001.
	
	NOTE: Baseball 2001 is configured to use software 3D rendering by default.
	
	The first time you start Baseball 2001, when you are prompted to enable 3D
	hardware acceleration, click to select the Don't Show Again check box, and then
	click OK.
	
	
	Additional query words: msgame bb2001 bball base ball lock freeze crash dump open launch
	
	======================================================================
	Keywords          : kbdisplay kbimu msgame bball3d 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbBaseballSearch kbBaseBall2001
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
