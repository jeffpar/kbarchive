---
layout: page
title: "Q76452: PRB: Global TSR Pop-ups Incompatible with Windows"
permalink: kb/076/Q76452/
---

## Q76452: PRB: Global TSR Pop-ups Incompatible with Windows

	Article: Q76452
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a TSR (terminate-and-stay-resident) program loaded before Windows (a global
	TSR) is used to create a pop-up window over the Windows display, the display
	will be disrupted.
	
	CAUSE
	=====
	
	When a global TSR pop-up window attempts to overlay the Windows display, the
	pop-up places the system virtual machine into text mode, which disrupts the
	Windows Virtual Display Device (VDD). When the pop-up is complete, the display
	is not restored properly.
	
	RESOLUTION
	==========
	
	Global TSR pop-ups are incompatible with Windows. The same functionality should
	be written into a Windows-based application.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
