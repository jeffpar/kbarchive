---
layout: page
title: "Q131807: COM2 Not Started with EtherExpress 16 and Plug and Play BIOS"
permalink: /kb/131/Q131807/
---

## Q131807: COM2 Not Started with EtherExpress 16 and Plug and Play BIOS

	Article: Q131807
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The COM2 port is not started on a computer with a Plug and Play BIOS and an
	Intel EtherExpress 16 network adapter. In addition, a new communications port is
	detected and the Add New Hardware Wizard is started every time you access Modems
	properties by double-clicking the Modems icon in Control Panel.
	
	CAUSE
	=====
	
	Both the EtherExpress 16 network adapter and the COM2 port are configured to use
	IRQ 3, causing a resource conflict that prevents the COM2 port from being
	started.
	
	The Add New Hardware Wizard starts because the number of ports that have been
	started and that Windows 95 knows to be present differs from the number that the
	BIOS reports. The Add New Hardware Wizard is started to detect and configure the
	new port.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure the EtherExpress 16 network adapter to use a
	different IRQ. To do so, follow these steps:
	
	1. Use the Intel SoftSet utility to change the Interrupt (IRQ) setting to an IRQ
	  that is not being used by another device.
	
	2. Click the Start button, point to Settings, then click Control Panel.
	
	3. Double-click the Network icon.
	
	4. Click the EtherExpress 16 network adapter, then click Properties.
	
	5. Click the Resources tab.
	
	6. Change the Interrupt (IRQ) setting to the IRQ that you set using SoftSet.
	
	7. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
