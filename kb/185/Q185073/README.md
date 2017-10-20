---
layout: page
title: "Q185073: CardBus Controller Displays Error Code 29 on IBM ThinkPad"
permalink: /kb/185/Q185073/
---

## Q185073: CardBus Controller Displays Error Code 29 on IBM ThinkPad

{% raw %}

	Article: Q185073
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw osr2 kbHardware
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using an IBM ThinkPad notebook computer, the CardBus Controller
	device may appear in Device Manager with an exclamation point in a yellow
	circle. When you view the properties of the CardBus Controller device, the
	following message may be displayed under Device STATUS
	
	  The device has been disabled in the hardware. In order to use this
	  device, you must re-enable the hardware. See your hardware
	  documentation for details. (Code 29.)
	
	In addition, PCI bus IRQ steering may be disabled, and the Use IRQ Steering check
	box may be unavailable on the IRQ Steering tab in Device Manager.
	
	CAUSE
	=====
	
	This issue can occur if both of the following conditions exist:
	
	- You are using one of the following IBM ThinkPad models:
	
	   - IBM ThinkPad 380XD
	
	   - IBM ThinkPad 560X
	
	   - IBM ThinkPad 770
	
	
	- You are using version 4.00.1120 or later of the Pci.vxd file.
	
	NOTE: This issue may be dependent upon the version of your computer's BIOS or
	other hardware involved (for example, a docking station).
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the computer manufacturer for information about a
	possible updated BIOS or another hardware-based solution.
	
	To prevent this issue from occurring, do not install a version of the Pci.vxd
	file later than 4.00.1119.
	
	MORE INFORMATION
	================
	
	For information about how to determine which Windows 95 updates are installed on
	a specific computer, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	  Q145990 Windows 95 Update Information Tool (Qfecheck.exe)
	
	For additional information about PCI bus IRQ steering, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q182604 Description of PCI Bus IRQ Steering
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbhw osr2 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
