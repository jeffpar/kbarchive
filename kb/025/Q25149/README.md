---
layout: page
title: "Q25149: Mouse Support in Non-Windows-Based Applications"
permalink: /kb/025/Q25149/
---

## Q25149: Mouse Support in Non-Windows-Based Applications

	Article: Q25149
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.x,2.x,3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 1.1, 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run a non-Windows-based application (such as Microsoft Word for MS-DOS)
	under Windows, no mouse support is available.
	
	MORE INFORMATION
	================
	
	MS-DOS-based applications running under Windows use their own mouse drivers. To
	have mouse support in these applications under Windows, the mouse drivers need
	to be loaded before Windows starts. In the case of Microsoft Word for MS-DOS, it
	is necessary to load MOUSE.COM or MOUSE.SYS before starting Windows. For other
	applications, refer to the program and mouse manuals for the names of the
	necessary drivers.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin110 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:1.x,2.x,3.x
	
	=============================================================================
	
