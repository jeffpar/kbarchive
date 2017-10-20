---
layout: page
title: "Q60878: /y Parameter Added to MOUSE.SYS During Windows 3.00 Setup"
permalink: /kb/060/Q60878/
---

## Q60878: /y Parameter Added to MOUSE.SYS During Windows 3.00 Setup

{% raw %}

	Article: Q60878
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows version 3.0 Setup program adds a /y parameter to an
	existing MOUSE.SYS line (in the CONFIG.SYS file) in the event that a Video Seven
	graphics card is installed in the machine. With this parameter, the mouse cursor
	appears as a block in MS-DOS-based applications. If the parameter is removed,
	the cursor becomes a "sprite" or graphics-oriented cursor.
	
	If the parameter is removed and you press ALT+TAB to exit an MS-DOS application,
	there will be two mice cursors, one frozen and one active, when you return to
	the MS-DOS application. By design, the /y parameter prevents this problem from
	occurring and maintains a block cursor.
	
	MORE INFORMATION
	================
	
	Using the /y switch with the Microsoft Mouse driver version 7.04 may prevent the
	following error message from appearing when starting a non-Windows application
	in a window:
	
	  You cannot run this Application while other high-resolution Graphical
	  Applications are running full screen. The Application will be suspended until
	  a low-resolution or text application is running full screen. Check the PIF
	  settings to ensure they are correct.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
