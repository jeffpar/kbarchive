---
layout: page
title: "Q176949: Microsoft Game Quits Unexpectedly with No Error Message"
permalink: kb/176/Q176949/
---

## Q176949: Microsoft Game Quits Unexpectedly with No Error Message

	Article: Q176949
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv aoe kbimu msgamekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	- Microsoft Urban Assault, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run one of the programs listed at the beginning of this article, the
	program may quit unexpectedly. You do not receive an error message.
	
	RESOLUTION
	==========
	
	To resolve this issue, reduce the graphics hardware acceleration. To do this,
	follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click OK again.
	
	6. When you are prompted to restart the computer, do so.
	
	If the issue is resolved, repeat these steps to move the Hardware Acceleration
	slider one notch to the right (the Most acceleration setting). If the issue
	returns, repeat these steps to move the slider back to the Basic acceleration
	setting.
	
	If the issue continues to occur, the Microsoft Video for Windows files installed
	in your computer may be damaged. To resolve this issue, remove and then
	reinstall the appropriate Video for Windows files. For additional information
	about how to do this, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q139806 Err Msg: MMSYSTEM266 The Device Could Not Be Loaded...
	
	If the issue continues to occur, disable the external cache on your computer, or
	enable palette snooping on your computer. For information about how to do this,
	please contact your computer manufacturer.
	
	NOTE: You can only enable palette snooping by adjusting the system CMOS settings
	of your computer. This function may not be available on some computers.
	
	Additional query words: 1.00 msgame ages ageofempires golf99 ua exits stops
	
	======================================================================
	Keywords          : kbdisplay kbenv aoe kbimu msgame kbfaq
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbZNotKeyword kbGolf99 kbGolfSearch kbAOESearch kbUrbanAssault
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
