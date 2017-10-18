---
layout: page
title: "Q137801: Wrong Mouse Displayed in Mouse Properties"
permalink: kb/137/Q137801/
---

## Q137801: Wrong Mouse Displayed in Mouse Properties

	Article: Q137801
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The General tab in Mouse properties may indicate that a PS/2-style mouse is
	installed, even though you are using a serial mouse.
	
	When this occurs, the PS/2 mouse port is displayed with an exclamation point in a
	yellow circle in Device Manager.
	
	CAUSE
	=====
	
	This behavior can occur if your computer has a PS/2 mouse port, but you are
	using a mouse connected to a serial port. The PS/2 mouse port is the first mouse
	port displayed in Device Manager, so the PS/2 mouse is displayed as the
	installed device in Mouse properties.
	
	RESOLUTION
	==========
	
	To correctly configure the mouse settings, follow these steps:
	
	1. Disable the PS/2 mouse port in your computer's CMOS settings. For information
	  about how to do so, please consult your computer's documentation or
	  manufacturer.
	
	  NOTES:
	
	   - This may not work if your computer is a Plug and Play system, as the PS/2
	     mouse port will be redetected and reenabled the next time you start
	     Windows 95.
	
	   - On some older computers, disabling the PS/2 mouse port may not be an
	     option in the CMOS settings. Instead, there may be a jumper on the
	     motherboard to disable the port. Consult the computer's documentation or
	     manufacturer if you are not sure how to disable the port.
	
	2. In Control Panel, double-click the System icon.
	
	3. On the Device Manager tab, click Standard PS/2 Port Mouse, and then click
	  Properties.
	
	4. Click the Original Configuration (Current) check box to clear it, and then
	  click OK.
	
	If you decide later to use the PS/2 mouse port, reenable the port in your
	computer's CMOS settings, and then run the Add New Hardware Wizard to redetect
	it in Windows 95.
	
	MORE INFORMATION
	================
	
	Some Plug and Play motherboards may actually have pinholes for a PS/2 mouse port
	but have no PS/2 mouse port installed. In some cases, there may be no CMOS
	settings or jumpers to disable the PS/2 mouse port. If this is the case,
	following steps 2-4 above may resolve the situation.
	
	Additional query words: ps2
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
