---
layout: page
title: "Q129516: Exclusive Mode Mouse Setting Prevents Resizing a Window"
permalink: /kb/129/Q129516/
---

## Q129516: Exclusive Mode Mouse Setting Prevents Resizing a Window

	Article: Q129516
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to move or resize an MS-DOS-based application's window using the
	mouse.
	
	CAUSE
	=====
	
	Mouse operations are exclusive to the application running in the window.
	
	RESOLUTION
	==========
	
	If you want to control the window features of an MS-DOS-based application, do
	not enable the Exclusive Mode option for the application's mouse settings.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you enable the mouse's Exclusive Mode option for an MS-DOS-based
	application, you can interact with the application's window only by using the
	keyboard, and the window controls (such as the toolbar and the Minimize,
	Maximize, and Restore buttons) are not available. Also, the window's sizing
	controls are not operational when you enable the Exclusive Mode option.
	
	To enable the Exclusive Mode option for an MS-DOS-based application, follow these
	steps:
	
	1. With the MS-DOS-based application running in a window, use the right mouse
	  button to click the window's title bar and then click Properties on the menu
	  that appears.
	
	2. Click the Misc tab.
	
	3. In the Mouse section, click the Exclusive Mode check box.
	
	4. Click OK.
	
	To disable the Exclusive Mode option for an MS-DOS-based application running in a
	window, follow these steps:
	
	1. Press ALT+ENTER to switch the application to run in a full screen.
	
	2. Press ALT+TAB until the application is minimized.
	
	3. Use the right mouse button to click the application's button on the taskbar
	  and then click Properties on the menu that appears.
	
	4. Click the Misc tab.
	
	5. In the Mouse section, click the Exclusive Mode check box to clear it.
	
	6. Click OK.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
