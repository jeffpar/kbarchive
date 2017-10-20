---
layout: page
title: "Q85417: DEC PC 320SX with Logitech Mouse May Not Enter Enhanced Mode"
permalink: /kb/085/Q85417/
---

## Q85417: DEC PC 320SX with Logitech Mouse May Not Enter Enhanced Mode

{% raw %}

	Article: Q85417
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Windows version 3.1 in enhanced mode on a DEC PC 320SX with
	an external Logitech Mouse, Windows may return to the MS-DOS command prompt.
	
	
	CAUSE
	=====
	
	This is caused by a conflict with the built-in keyboard mouse device.
	
	RESOLUTION
	==========
	
	To resolve the problem, press CTRL+ALT+SHIFT+DEL to enter the CMOS setup and
	disable the DEC PC 320SX keyboard mouse.
	
	MORE INFORMATION
	================
	
	The DEC PC 320SX is a laptop with a built-in cursor controller that emulates a
	Microsoft Mouse. If Logitech drivers are used for a Logitech Mouse, the cursor
	controller will prevent the system from entering enhanced mode due to the
	Logitech driver.
	
	If the Microsoft or IBM PS/2 Mouse driver is selected, Windows will work in
	enhanced mode, but the mouse will not function. Both Windows and the mouse will
	function correctly in standard mode.
	
	To resolve this problem and allow use of a Logitech or any other type of mouse,
	press CTRL+ALT+SHIFT+DEL to enter the CMOS setup and disable the keyboard cursor
	controller that emulates a Microsoft Mouse.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 320
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
