---
layout: page
title: "Q67012: Windows Err Msg: Warning! Overwriting an Old Copy..."
permalink: /kb/067/Q67012/
---

## Q67012: Windows Err Msg: Warning! Overwriting an Old Copy...

{% raw %}

	Article: Q67012
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is displayed when you start your system:
	
	  Warning!! Overwriting an old copy of the EGA Device Driver
	
	CAUSE
	=====
	
	This error occurs if the MOUSE.SYS 7.04 device driver is loaded in the
	CONFIG.SYS file before the EGA.SYS 2.10.18 driver.
	
	RESOLUTION
	==========
	
	Microsoft recommends that the MOUSE.SYS driver be loaded after the EGA.SYS
	driver in the CONFIG.SYS. Both of these drivers are included with Microsoft
	Windows version 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows 3.0 and the Microsoft
	Mouse driver, version 7.04. Microsoft is researching this problem and will post
	new information here as it becomes available.
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
