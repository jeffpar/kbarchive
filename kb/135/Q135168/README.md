---
layout: page
title: "Q135168: PCMCIA Disk Drive Not Available in Windows 95"
permalink: kb/135/Q135168/
---

## Q135168: PCMCIA Disk Drive Not Available in Windows 95

	Article: Q135168
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
	
	When you insert a PCMCIA disk drive into a PCMCIA slot, your computer beeps,
	indicating that the PCMCIA card is recognized, but the disk drive is unavailable
	in Windows 95.
	
	CAUSE
	=====
	
	A resource conflict may exist if the PCMCIA disk controller is configured to use
	I/O ports 170-177 and your computer uses the same ports for some other purpose.
	
	RESOLUTION
	==========
	
	Examine the computer settings in Device Manager. If the PCMCIA disk controller
	is using ports 170-177, try either of the following methods to resolve the
	conflict:
	
	- Reserve I/O ports 170-177, forcing Windows 95 to configure the PCMCIA disk
	  controller at another I/O address. To do so, follow these steps:
	
	   - In Control Panel, double-click the System icon.
	
	   - On the Device Manager tab, click Properties.
	
	   - On the Reserve Resources tab, click the Input/Output (I/O) option button,
	     and then click Add.
	
	   - In the Start Value box, enter 170.
	
	   - In the End Value box, enter 177.
	
	   - Click OK until you return to Control Panel
	
	   - Restart your computer.
	
	  Windows 95 will not configure any device to use I/O ports 170-177 if it can
	  avoid doing so.
	
	- Try disabling any secondary disk controller that uses I/O ports 170-177 in
	  the computer's CMOS settings.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
