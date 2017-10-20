---
layout: page
title: "Q83429: Logitech Mouse May Not Work in Windowed MS-DOS Application"
permalink: /kb/083/Q83429/
---

## Q83429: Logitech Mouse May Not Work in Windowed MS-DOS Application

{% raw %}

	Article: Q83429
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the Logitech Mouse with the Microsoft Windows operating system
	version 3.1, you may experience problems using the mouse in an MS-DOS window if
	you start the MS-DOS application with a program information file (PIF).
	
	MORE INFORMATION
	================
	
	With Windows 3.1, you can use the mouse in an MS-DOS application that is being
	run in a window if you have an MS-DOS-based mouse driver and a Windows mouse
	driver that support this functionality. The MS-DOS-based mouse driver must be
	able to communicate with Windows mouse driver for this to work correctly. The
	Microsoft mouse driver version 8.2 or later and the Logitech mouse driver
	version 6.02 or later support this feature.
	
	If you are using the Logitech MS-DOS mouse driver and you start an MS-DOS
	application in a window using a PIF, the mouse does not work. You must start the
	application full screen and then move it into a window by pressing ALT+ENTER.
	
	
	Logitech is aware of this problem and is working on an update to their mouse
	driver.
	
	Note: Running an MS-DOS application in a window is a feature of 386 enhanced mode
	only.
	
	The Logitech Mouse is manufactured by Logitech, Inc., vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
