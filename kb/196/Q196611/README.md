---
layout: page
title: "Q196611: Error Code 29 After Resuming from Suspend Mode"
permalink: /kb/196/Q196611/
---

## Q196611: Error Code 29 After Resuming from Suspend Mode

	Article: Q196611
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg osr2
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you resume your computer from Suspend mode, a Peripheral Component
	Interconnect (PCI) device may appear in Device Manager with an exclamation point
	in a yellow circle. When you view the properties of the PCI device, the
	following message may be displayed under Device Status:
	
	  The device has been disabled in the hardware. In order to use this
	  device, you must re-enable the hardware. See your hardware
	  documentation for details. (Code 29.)
	
	CAUSE
	=====
	
	This problem occurs because Windows 95 OEM Service Release 2.5 does not
	rebalance interrupt request lines (IRQs) correctly.
	
	RESOLUTION
	==========
	
	To work around this problem, remove or disable an unused device in Device
	Manager to free a system IRQ. To disable a device in Device Manager, follow
	these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, double-click the branch containing the device you
	  want to disable, click the device, and then click Properties.
	
	4. On the General tab, click the Disable In This Hardware Profile check box to
	  select it, and then click OK.
	
	5. Click Close, and then restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 OEM Service
	Release 2.5.
	
	This problem is fixed in Microsoft Windows 98.
	
	
	MORE INFORMATION
	================
	
	When the computer is started, Windows 95 performs a PCI IRQ rebalance to free up
	system IRQs as needed. In order to accomplish this task, Windows 95 routes
	multiple PCI interrupts to a single system interrupt.
	
	Internal data structures in Windows 95 are set up to maintain information on
	which PCI IRQs are routed to which system IRQs. In cases where multiple PCI
	interrupts are routed to a single system interrupt, the pointer to this IRQ
	routing information may be lost. Windows 95 continues to function properly until
	the computer goes into Suspend mode. At that time, Configuration Manager
	attempts to remove resources for all PCI devices. It cannot do so on the device
	or devices that use the PCI interrupt controlled by the missing IRQ routing data
	structure, resulting in that PCI device having an error code 29
	(CM_PROB_HARDWARE_DISABLED).
	
	Due to the nature of PCI interrupts and IRQ routing, this problem may or may not
	be evident on a given computer based on a number of variables, including PCI
	slot design (how the PCI interrupts are routed between slots), PCI card
	interrupt usage, and system IRQ availability.
	
	For additional information about PCI bus IRQ steering, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q182604 Description of PCI Bus IRQ Steering
	
	======================================================================
	Keywords          : kbenv kberrmsg osr2 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
