---
layout: page
title: "Q82367: Erratic Mouse Behavior on Computers with Phoenix BIOS"
permalink: /kb/082/Q82367/
---

## Q82367: Erratic Mouse Behavior on Computers with Phoenix BIOS

{% raw %}

	Article: Q82367
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.0,2.0,3.1,3.11; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft BallPoint Mouse versions 1.0, 2.0 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The mouse pointer may move erratically when you move it across the screen in
	Windows.
	
	CAUSE
	=====
	
	This behavior can occur when you use a PS/2-style BallPoint Mouse with a Phoenix
	Technologies BIOS.
	
	RESOLUTION
	==========
	
	Windows 3.1x and Windows for Workgroups 3.1x
	--------------------------------------------
	
	To correct this problem, follow these steps:
	
	1. Use any text editor (such as Notepad) to open the Mouse.ini file in the
	  Windows folder.
	
	2. Add the following line to the [Mouse] section of the file:
	
	  PhoenixBIOS=True
	
	3. Save and then close the file.
	
	4. Restart Windows.
	
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbMSHardwareSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbBallPointMouse100 kbBallPointMouse200
	Version           : WINDOWS:1.0,2.0,3.1,3.11; :
	
	=============================================================================
	

{% endraw %}
