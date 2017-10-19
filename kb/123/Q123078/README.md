---
layout: page
title: "Q123078: IDE E-Z Raid-1 Driver Doesn't Load; Uses Real-Mode Drivers"
permalink: /kb/123/Q123078/
---

## Q123078: IDE E-Z Raid-1 Driver Doesn't Load; Uses Real-Mode Drivers

	Article: Q123078
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check the status of your hard disk controller in Device Manager, you
	may see a red circle with a slash mark through it to the left of the controller.
	In addition, the Animated Cursors may be disabled. (To locate Device Manager,
	double-click the System icon in Control Panel and then click the Device Manager
	tab.)
	
	CAUSE
	=====
	
	These problems occur when you have an E-Z Raid-1 controller card installed. The
	E-Z Raid-1 controller card comes with Win32 drivers for Windows 3.1. The Windows
	95 drivers are incompatible with this card, forcing paging to take place through
	real mode.
	
	RESOLUTION
	==========
	
	To correct these problems, run the setup program for the E-Z Raid controller
	card (from the original disk), and install the Windows 3.1 drivers.
	
	MORE INFORMATION
	================
	
	After you install the E-Z Raid drivers and restart Windows 95, you receive an
	error message that reads "Device conflict. Drivers detected that conflict with
	the generic ESDI controller. This device will be disabled." You do not receive
	this error message the next time you start Windows 95. The drivers added by the
	E-Z Raid setup program are TRMINT13.386 and WDCTRL32.386
	
	
	Additional query words: 3rdparty wdctrl int13
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
