---
layout: page
title: "Q83322: Pen Cursor Doesn't Appear When Tablet in Use"
permalink: /kb/083/Q83322/
---

## Q83322: Pen Cursor Doesn't Appear When Tablet in Use

{% raw %}

	Article: Q83322
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use a tablet after Microsoft Windows for Pen Computing is installed and
	no mouse cursor appears on the screen, use the YESMOUSE.DRV driver.
	
	The mouse cursor is displayed only if the mouse driver detects that mouse
	hardware is present on the system. The workaround is to use the YESMOUSE.DRV
	driver, which displays the mouse cursor.
	
	To install this driver, modify the SYSTEM.INI file. In the [boot] section, change
	the "mouse.drv=" line to:
	
	     [boot]
	     mouse.drv=yesmouse.drv
	
	If the YESMOUSE.DRV file is not in your WINDOWS\SYSTEM directory, then it can be
	expanded from the original disks using the EXPAND utility.
	
	Additional query words: 3.10 3.11 penwin
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
