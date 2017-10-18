---
layout: page
title: "Q252404: Baseball 2000: Game Quits or You Receive Error Message"
permalink: kb/252/Q252404/
---

## Q252404: Baseball 2000: Game Quits or You Receive Error Message

	Article: Q252404
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbhw kbimu msgame kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Baseball 2000, you may experience either of the
	following symptoms:
	
	- Baseball 2000 quits, and you are returned to the desktop.
	
	- You receive the following error message:
	
	  Baseball 2000 caused an invalid page fault in module Graphics.dll.
	
	CAUSE
	=====
	
	This behavior can occur if an nVIDIA GeForce 256 video adapter is installed in
	your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable Direct3D support in the DirectX Diagnostic Tool:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Display tab.
	
	4. Click Disable under DirectX Features (next to Direct3D Acceleration).
	
	5. When you receive the following warning, click OK:
	
	  This will disable hardware acceleration of Direct3D for ALL display devices
	  on your system.
	
	6. Click Exit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Baseball 2000.
	
	Additional query words: msgame 1.00 bb2k bball2k gpf ipf
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbhw kbimu msgame kbHardware 
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
