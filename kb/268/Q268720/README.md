---
layout: page
title: "Q268720: AoE II Expansion: Invalid Page Fault in Age2x_1.exe"
permalink: kb/268/Q268720/
---

## Q268720: AoE II Expansion: Invalid Page Fault in Age2x_1.exe

	Article: Q268720
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv aoe kbimu
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II Expansion: The Conquerors, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Age of Empires II Expansion: The Conquerors,
	the screen may turn black and the computer may stop responding (hang), or you
	may receive one of the following error messages:
	
	   - Age2x_1.exe caused an invalid page fault in Age2x_1.exe.
	
	   - AI Script Error: File random game per Err 8001.
	
	CAUSE
	=====
	
	This behavior can occur if one or more of the following conditions is true:
	
	- Virtual memory is turned off.
	
	- Virtual memory is turned on, but less than 50 megabytes (MB) of hard disk
	  space is allocated or available to be used as virtual memory.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that at least 50 MB of hard disk space is
	available to be used as virtual memory:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Virtual Memory.
	
	4. Click "Let Windows manage my virtual memory settings. (Recommended)", and
	  then click OK.
	
	  NOTE: The "Hard disk" box is unavailable, but the size of the virtual memory
	  file is displayed in it.
	
	5. Click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	Additional query words: 1.00 msgame aoe2 aoeii aok feeze lock blank empty gpf ipf out of disc no crash quit lockup frozen not responding launch run open mbyte megs
	
	======================================================================
	Keywords          : kbenv aoe kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbAOESearch kbAOE2ExpConquerors
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
