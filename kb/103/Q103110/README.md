---
layout: page
title: "Q103110: Golf: ATI Ultra Video Drivers May Cause System to Lock Up"
permalink: /kb/103/Q103110/
---

## Q103110: Golf: ATI Ultra Video Drivers May Cause System to Lock Up

	Article: Q103110
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use an ATI Ultra video driver while playing Microsoft Golf version 1.0,
	your system may lock when switching between active Windows-based applications.
	This problem may occur if you are using the 1024 x 768, 800 x 600, or 640 x 480
	resolution ATI Ultra video drivers dated 4/22/92.
	
	RESOLUTION
	==========
	
	There are two resolutions to work around this problem:
	
	1. Click Standard VGA from Windows Setup for Display.
	
	2. Do not use ALT+TAB to bring up another application while in the Post Shot
	  Selections dialog box while using the ATI Ultra video drivers.
	
	MORE INFORMATION
	================
	
	This problem will not occur using the Forward selection from the Post Shot
	Selections dialog box.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or switch to Notepad on a system that is using an ATI Ultra video driver
	  dated 4/22/92. Minimize Notepad.
	
	2. Open or switch to Microsoft Golf.
	
	3. After hitting the ball, click Reverse from the Post Shot Selections dialog
	  box to view the shot in reverse.
	
	4. Once the reverse shot is completed, the Post Shot Selections dialog box will
	  appear again.
	
	5. Press CTRL+ESC to display the Task List. Click Notepad and click Switch To.
	
	6. Minimize Notepad.
	
	7. In Golf, click Reverse again from the Post Shot Selections dialog box.
	
	The mouse and keyboard will now be locked (that is they will not respond).
	
	Additional query words: 1.00 ATI Ultra hang hung locked-up lock up crash freeze frozen
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
