---
layout: page
title: "Q216918: Err Msg: Combat Flight Simulator Requires a Higher Refresh Rate"
permalink: /kb/216/Q216918/
---

## Q216918: Err Msg: Combat Flight Simulator Requires a Higher Refresh Rate

	Article: Q216918
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a flight in Microsoft Combat Flight Simulator, you may receive an
	error message indicating that the program requires a higher refresh rate than
	your monitor supports.
	
	CAUSE
	=====
	
	This behavior can occur if Combat Flight Simulator attempts to change the
	default refresh rate your video adapter sends to your monitor.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest version of DirectX from
	the following Microsoft Web site:
	
	  http://www.microsoft.com/directx
	
	For additional information about how to download and install DirectX, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	If the issue continues to occur, set the default refresh rate your video adapter
	sends to your monitor. To do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type Dxdiag.exe, and then click OK.
	
	3. Click the More Help tab, and then click Override.
	
	4. Click the Override Value option, and type a value in the Override Value box
	  that is supported by both your video adapter and your monitor.
	
	  NOTE: Typical values are 60, 72, and 75.
	
	To determine a value that is supported by both your video adapter and your
	monitor, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Advanced or Advanced Properties.
	
	4. On the Monitor tab, make sure your monitor is selected. If an incorrect
	  monitor is selected, or if a standard or unknown monitor is selected, click
	  Change, click the manufacturer and model of your monitor, and then click OK.
	
	5. On the Adapter tab, click the Refresh Rate box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Combat Flight
	Simulator: WWII Europe Series, version 1.0.
	
	Additional query words: 1.00 msgame combatfs cfs
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
