---
layout: page
title: "Q137590: Circled Exclamation Point for IDE Controller with No Device"
permalink: /kb/137/Q137590/
---

## Q137590: Circled Exclamation Point for IDE Controller with No Device

	Article: Q137590
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Device Manager to check the status of an IDE hard disk controller
	with no attached devices, you may see an exclamation point in a yellow circle to
	the left of the controller. However, if you view the controller's properties,
	Device Manager reports that the device is present and that there are no
	problems.
	
	CAUSE
	=====
	
	This problem may occur with any IDE controller that does not have a device
	attached to it.
	
	
	RESOLUTION
	==========
	
	To work around this problem, use any one of the following methods:
	
	- Use Device Manager to disable the IDE controller that has no devices attached
	  to it. To do so, follow these steps:
	
	  1. In Control Panel, double-click the System icon.
	
	  2. Click the Device Manager tab.
	
	  3. Double-click the Hard Disk Controllers branch to expand it, and then
	     double-click the IDE controller.
	
	  4. Click the Original Configuration (Current) check box to clear it, and then
	     click OK.
	
	  NOTE: This procedure causes a red X to appear to the left of the controller in
	  Device Manager, indicating that the device is present, but is currently
	  disabled. If the device is Plug and Play compatible, disabling the device in
	  this manner allows the resources that are normally allocated to the device to
	  be used for another device. If the device is not Plug and Play compatible,
	  you may need to physically remove the device from your computer to free the
	  resources that are allocated to it. To see if the resources have been freed
	  after disabling the device, click the device in Device Manager, click
	  Properties, and then click the Resources tab.
	
	  After you use this procedure to disable the device in Device Manager, you must
	  also disable it using your computer's CMOS Setup program. For information on
	  how to do so, consult the documentation that came with your computer, or
	  contact the computer manufacturer.
	
	- Check to make sure that the IDE controller is enabled using your computer's
	  CMOS Setup program, and then physically attach a device to the controller.
	
	- If you do not intend to use the IDE controller, physically remove it from
	  your computer.
	
	  NOTE: This is a viable, but unnecessary, solution to this problem. Disabling
	  the controller in Device Manager prevents any resources from being allocated
	  to the controller, and makes it much easier for you to reinstall the
	  controller if you decide to use it later.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
