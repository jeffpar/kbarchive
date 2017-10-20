---
layout: page
title: "Q86742: Using the Microsoft Mouse as a Pen Input Device"
permalink: /kb/086/Q86742/
---

## Q86742: Using the Microsoft Mouse as a Pen Input Device

{% raw %}

	Article: Q86742
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use the Microsoft Mouse as a primary input device in Microsoft
	Windows for Pen Computing, but it is not recommended. This configuration should
	be used only for development and limited testing of Windows for Pen applications
	and drivers.
	
	Currently, pen tablets/computers, drivers, and the retail version of Windows for
	Pens are available only through OEMs (original equipment manufacturers);
	therefore, the components necessary to use the Microsoft Mouse as an inking
	device are only available with the Windows 3.1 SDK.
	
	MORE INFORMATION
	================
	
	To get inking capabilities from the mouse, the mouse driver must be removed (or
	replaced) and a tablet driver must be loaded. Microsoft has written two drivers
	for this functionality: the YESMOUSE driver and the MSMOUSE driver. The YESMOUSE
	driver is a replacement for the mouse driver that instructs Windows to display a
	mouse cursor without loading any mouse driver. (Note that tablet drivers do not
	display mouse cursors by default. The only way to get a mouse cursor is if a
	mouse driver or YESMOUSE driver is loaded.) The MSMOUSE driver is actually a
	tablet driver that is loaded as an installable device driver.
	
	To ink with the Microsoft Mouse, insert the following lines into the appropriate
	sections of the SYSTEM.INI. Make sure that the files referenced in those lines
	are present in the WINDOWS\SYSTEM subdirectory or that the full path to their
	location is specified:
	
	     [boot]
	     mouse.drv=YESMOUSE.DRV
	
	     [drivers]
	     pen=MSMOUSE.DRV
	
	
	KBCategory: kbusage kbdisplay kbhw
	KBSubcategory: win31
	
	Additional query words: 3.10 penwin inking ink
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinPen100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	

{% endraw %}
