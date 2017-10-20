---
layout: page
title: "Q156940: Devices Not Detected with Intel 82371SB PIIX3 Controller"
permalink: /kb/156/Q156940/
---

## Q156940: Devices Not Detected with Intel 82371SB PIIX3 Controller

{% raw %}

	Article: Q156940
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw kbsetup diskmem win95 kbHardware kbDiskMemory
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows 95 on a computer with an Intel 82371SB PIIX3 IDE
	hard disk controller, Windows 95 may not detect devices installed on the
	secondary IDE channel. If the devices are initially detected and appear in
	Device Manager, they may no longer appear in Device Manager the next time you
	restart the computer.
	
	CAUSE
	=====
	
	The Intel 82371SB PIIX3 IDE hard disk controller is not included in the
	Mshdc.inf file included with Windows 95. Therefore, although the controller is
	detected by Windows 95 and appears in Device Manager, it may not be properly
	configured. This may prevent devices on the secondary IDE channel from being
	detected or installed properly.
	
	The following computers are known to contain Intel 82371SB PIIX3 IDE hard disk
	controllers:
	
	- Dell Dimension Pentium Pro 200
	
	- Hewlett-Packard Vectra VL 5/xxx Series 4
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that this situation is not caused by problems in Windows 95.
	
	RESOLUTION
	==========
	
	For information about how to work around this problem, please contact Intel.
	
	
	MORE INFORMATION
	================
	
	This problem affects all Intel motherboards that contain the 82371SB PIIX3
	onboard IDE hard disk controller. When you install Windows 95 on a computer that
	contains an 82371SB PIIX3 controller, the controller is detected and installed
	by Windows 95. However, because the Mshdc.inf file does not contain
	configuration information for the controller, the secondary IDE channel on the
	controller may not be configured properly.
	
	Because the secondary channel is not configured properly, it is typically
	disabled by the BIOS the next time you restart your computer. This causes
	Windows 95 to determine that the devices installed on the secondary channel have
	been removed from your computer, and causes Windows 95 to remove the devices
	from Device Manager.
	
	To determine if the 82371SB PIIX3 IDE hard disk controller in your computer is
	configured properly, double-click the System icon in Control Panel, click the
	Device Manager tab, and then double-click the Hard Disk Controllers branch to
	expand it. If the following devices appear under the Hard Disk Controllers
	branch, the 82371SB PIIX3 controller is not configured properly and the problem
	described in this article is likely to occur:
	
	- Primary IDE Controller (single FIFO)
	
	- Standard Dual PCI IDE Controller
	
	- Standard IDE/ESDI Hard Disk Controller
	
	
	Additional query words: oem eide e-ide cd-rom cd
	
	======================================================================
	Keywords          : kbhw kbsetup diskmem win95 kbHardware kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
