---
layout: page
title: "Q69195: Using Microsoft Serial Mice with Leading Edge Computers"
permalink: /kb/069/Q69195/
---

## Q69195: Using Microsoft Serial Mice with Leading Edge Computers

{% raw %}

	Article: Q69195
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some Leading Edge Computers (Model D3/SX) contain a built-in proprietary mouse
	port. To use a Microsoft serial mouse on a serial communications port, instead
	of using Leading Edge's mouse, you must disable the built-in mouse port.
	
	MORE INFORMATION
	================
	
	Steps to Setup Microsoft Serial Mouse
	-------------------------------------
	
	1. Disable the built-in mouse port by moving jumper 15 on the motherboard from
	  pins 1 and 2 to 2 and 3.
	
	2. Connect the serial mouse to COM1 or COMx, where x is the COM port of your
	  choice.
	
	3. Check to ensure Windows is configured for the appropriate mouse driver
	  (Microsoft or IBM PS/2 for example).
	
	NOTE: There have been no reported problems with the Microsoft Bus Mouse
	conflicting with the built-in mouse port.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
