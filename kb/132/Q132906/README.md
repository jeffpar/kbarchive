---
layout: page
title: "Q132906: Cannot Configure Disabled Devices in Device Manager"
permalink: kb/132/Q132906/
---

## Q132906: Cannot Configure Disabled Devices in Device Manager

	Article: Q132906
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
	
	When you are using a Plug and Play BIOS, you may not be able to configure in
	Device Manager a device that has been disabled in the BIOS, even though the BIOS
	supports configuring devices for the next time the computer starts.
	
	When you click the device in Device Manager and then click Properties, you see
	the following message in the Status box:
	
	  The device has been disabled in the hardware. In order to use this
	  device, you must re-enable the hardware. See your hardware
	  documentation for details. (Code 29.)
	
	CAUSE
	=====
	
	Device Manager does not allow resources to be allocated to devices that are
	disabled in the BIOS, even if the BIOS supports configuring devices for the next
	time the computer starts.
	
	RESOLUTION
	==========
	
	Enable the device in the BIOS before you try to configure it in Device Manager.
	For information about enabling devices in the BIOS, please contact your computer
	vendor or manufacturer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: pnp nextboot
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
