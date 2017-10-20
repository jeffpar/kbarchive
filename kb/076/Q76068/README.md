---
layout: page
title: "Q76068: PRB: Pen Cursor Does Not Appear When Tablet Used"
permalink: /kb/076/Q76068/
---

## Q76068: PRB: Pen Cursor Does Not Appear When Tablet Used

{% raw %}

	Article: Q76068
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Microsoft Windows for Pen Computing, no mouse cursor appears on
	the screen.
	
	CAUSE
	=====
	
	The tablet drivers supplied with Windows for Pen Computing are not mouse
	drivers. The mouse cursor is displayed only if a mouse driver detects the
	presence of mouse hardware on the system.
	
	RESOLUTION
	==========
	
	To ensure that the mouse cursor is shown, you must either load a mouse driver or
	load the YESMOUSE.DRV file in place of a mouse driver. Mouse hardware is
	required to use a mouse driver; mouse hardware is not required to use the
	YESMOUSE driver.
	
	MORE INFORMATION
	================
	
	When the Pen Windows system queries the hardware to determine whether a mouse is
	installed, the YESMOUSE driver acts as the mouse hardware. Therefore, Pen
	Windows acts as if a mouse is installed.
	
	To install the YESMOUSE driver, modify the "mouse.drv" line in the [boot] section
	of the SYSTEM.INI file as follows:
	
	     [boot]
	     mouse.drv=yesmouse.drv
	
	If the YESMOUSE.DRV file is not in the Windows system directory, in the
	SYSTEM.INI file, specify the complete path to the YESMOUSE.DRV file.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
