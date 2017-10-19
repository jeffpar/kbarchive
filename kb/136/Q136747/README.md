---
layout: page
title: "Q136747: SU0014 Error When Detection Reaches 100 Percent Complete"
permalink: /kb/136/Q136747/
---

## Q136747: SU0014 Error When Detection Reaches 100 Percent Complete

	Article: Q136747
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbhw kbsetup win95 kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows 95, you may receive the following error message
	and your computer may stop responding (hang) when the hardware detection portion
	of Setup reaches 100 percent complete:
	
	  Setup Detection Warning
	  Warning SU0014
	  Setup has found a hardware device on your computer that is not responding. To
	  try this device again, click Continue.
	
	CAUSE
	=====
	
	This problem can occur if one of the following network adapters is installed in
	your computer:
	
	- SMC EtherPower 10/100 (9332) PCI Ethernet Adapter
	
	- Thomas-Conrad TC5048 PCI Ethernet Adapter
	
	- 3COM EtherLink 3 #3c509 ISA Plug and Play Adapter
	
	- Cabletron E2200
	
	- DEC450 (21041) Network Adapter
	
	
	When the hardware detection process is finished, Setup checks to make sure that
	all critical hardware devices are still functioning properly. If any of these
	devices do not respond, the error message stated above is displayed. The devices
	listed above are known to cause the computer to hang when Setup attempts to
	check their status.
	
	RESOLUTION
	==========
	
	Turn the computer off, wait a few seconds, turn it back on, run Setup again, and
	choose Safe Recovery when you are prompted.
	
	MORE INFORMATION
	================
	
	The process that Setup uses to check the status of devices installed in the
	computer may cause a device to become unstable. When this occurs, turning the
	computer off and back on again reinitializes the device.
	
	======================================================================
	Keywords          : kbhw kbsetup win95 kbHardware 
	Technology        : kbWin95search kbWin95
	Version           : 95
	
	=============================================================================
	
