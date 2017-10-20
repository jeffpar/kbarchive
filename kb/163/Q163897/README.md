---
layout: page
title: "Q163897: Using GSI Model 18 Add-in IDE Controller Causes STOP 0x7B"
permalink: /kb/163/Q163897/
---

## Q163897: Using GSI Model 18 Add-in IDE Controller Causes STOP 0x7B

{% raw %}

	Article: Q163897
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a GSI model 18 IDE controller is installed in the non-PCI system, Windows NT
	will generate a Blue Screen with a STOP 0X0000007B (INACCESSIBLE_BOOT_DEVICE)
	message.
	
	CAUSE
	=====
	
	This problem does not occur unless the add-in controller also has some device
	attached, such as a fixed disk. Because the system is not PCI, ATAPI does not
	control the second channel, but ATAPI must look at the devices on the card, to
	see if any are ATAPI. After ATAPI determines that it is not to use the second
	channel, it goes back to the boot device and reads Cylinder 0, Head 0, Sector 1
	(Partition Table / MBR). At this point, for unknown reasons, it retries the read
	until the retries run out (even through the data received looks legitimate). It
	then determines that the boot device cannot be accessed, which causes the Blue
	Screen STOP message. The impact of this problem is small because most systems
	today do not use add-in IDE controllers.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact GS-118 support at (714) 261-9744 for an updated
	BIOS, version 5.02. You will need to provide a serial number for support. This
	problem cannot be reproduced if the device is removed from the GSI card, even if
	the card remains installed in the computer.
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Windows NT version 4.0 and a GSI
	model 18 IDE controller
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
