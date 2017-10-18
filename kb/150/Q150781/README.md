---
layout: page
title: "Q150781: Golf Err Msg: Glfmod2 Caused a Divide Error in Glfani32.dll"
permalink: kb/150/Q150781/
---

## Q150781: Golf Err Msg: Glfmod2 Caused a Divide Error in Glfani32.dll

	Article: Q150781
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0,95
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbimu
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 2.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Golf 2.0 on a Microsoft Windows 95/98-based
	computer, you may receive the following error message:
	
	  Glfmod20 caused a divide error in module Glfani32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- The video driver for your video adapter is outdated.
	
	- Progressive Networks RealPlayer is running in the background.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Install an Updated Video Driver
	-------------------------------
	
	To resolve this issue, contact your video adapter manufacturer to inquire about
	how to obtain and install the latest version of the video driver for your video
	adapter.
	
	For additional information about how to contact your video adapter manufacturer,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To work around this issue, reduce your graphics hardware acceleration setting. To
	do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	Quit RealPlayer
	---------------
	
	To quit RealPlayer or RealPlayer Plus, follow these steps:
	
	1. On the taskbar, right-click the RealPlayer or RealPlayer Plus button, and
	  then click Close.
	
	2. In the status area on the taskbar, right-click the RealPlayer or RealPlayer
	  Plus icon, and then click Close SmartStart.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 2.00 w_golf msgame
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbimu 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf200
	Version           : WINDOWS:2.0,95
	Issue type        : kbprb
	
	=============================================================================
	
