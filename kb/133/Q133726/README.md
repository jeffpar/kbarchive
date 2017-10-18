---
layout: page
title: "Q133726: EISA Bus Computer Detects Display Adapter Incorrectly"
permalink: kb/133/Q133726/
---

## Q133726: EISA Bus Computer Detects Display Adapter Incorrectly

	Article: Q133726
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
	
	After you set up Windows 95 on a computer with an EISA bus, the display adapter
	may not function correctly. You may receive the following error message:
	
	  There is a problem with your display adapter. The hardware settings are
	  incorrect, or the current settings do not work with your hardware.
	
	In Device Manager, there may be an exclamation point in a yellow circle next to
	the display adapter, with the following status in the adapter's properties:
	
	  Device Failure: Try changing the driver for this device. If that doesn't
	  work, see your hardware documentation. (Code 27)"
	
	You may also notice that the display adapter driver is not the correct type. For
	example, you may notice that Windows 95 has installed the Cirrus Logic 5422
	display adapter even though you actually have an ATI Mach32 display adapter.
	
	CAUSE
	=====
	
	The EISA configuration in the EISA BIOS for the display adapter is configured
	for a device other than the one installed.
	
	RESOLUTION
	==========
	
	Use the computer's EISA configuration tool to reconfigure the slot for the
	correct display adapter type, and then run the Add New Hardware Wizard to
	redetect the display adapter. To redetect the display adapter, follow these
	steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. On the Device Manager tab, click the incorrect display adapter, and then
	  click Remove.
	
	4. When you are prompted to restart your computer, click No, and then click
	  Close.
	
	5. Click the Start button, point to Settings, and then click Control Panel.
	
	6. Double-click the Add New Hardware icon, and then click Next.
	
	7. When you are prompted "Do you want Windows to search for your new hardware?"
	  click Yes, and then click Next.
	
	8. Click Next.
	
	MORE INFORMATION
	================
	
	Some computers with an EISA bus have a utility for configuring the expansion
	slots in the computer for a specific device. Replacing the device in a
	particular slot may lead to unexpected behavior from the computer and from
	Windows 95.
	
	For information about configuring the slots in your computer, please consult your
	computer documentation or manufacturer.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
