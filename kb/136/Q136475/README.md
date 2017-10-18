---
layout: page
title: "Q136475: Err Msg: Explorer Caused a Divide Error in Module Shell32.dll"
permalink: kb/136/Q136475/
---

## Q136475: Err Msg: Explorer Caused a Divide Error in Module Shell32.dll

	Article: Q136475
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbui win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open an icon in Windows 95 (particularly, the My Computer,
	Microsoft Exchange Inbox, Recycle Bin, or Control Panel icon), you may receive
	the following error message:
	
	  Explorer:
	  This program has performed an illegal operation and will be shut down.
	
	If you click the Details button, the following information is displayed:
	
	  EXPLORER caused a divide error in module SHELL32.DLL at
	  0137:7fe1402f.
	
	CAUSE
	=====
	
	This error may be caused by a combination of the following conditions:
	
	- The horizontal spacing for icons is set too high or set to 0.
	
	- You are using a video resolution of 640 x 480.
	
	- The taskbar is placed at the left or right edge of the screen, and has been
	  expanded to larger than the default size.
	
	
	RESOLUTION
	==========
	
	To correct this problem, use any one of the following methods:
	
	Method 1
	--------
	
	Decrease the horizontal icon spacing. To do so, follow these steps:
	
	1. Use the right mouse button to click an empty area on the desktop, and then
	  click Properties on the menu that appears.
	
	2. On the Appearance tab, click Icon Spacing (Horizontal) in the Item box, and
	  then decrease the value in the Size box to a value greater than 0.
	
	3. Click OK.
	
	Method 2
	--------
	
	Change the video resolution so that it is greater than 640 x 480. To do so,
	follow these steps:
	
	1. Use the right mouse button to click an empty area on the desktop, and then
	  click Properties on the menu that appears.
	
	2. On the Settings tab, move the Desktop Area slider one notch to the right.
	
	3. Click OK.
	
	Method 3
	--------
	
	Decrease the size of the taskbar.
	
	Method 4
	--------
	
	Move the taskbar from the left or right edge of the screen to the top or bottom
	of the screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : kbenv kberrmsg kbui win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
