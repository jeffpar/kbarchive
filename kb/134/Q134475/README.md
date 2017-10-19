---
layout: page
title: "Q134475: PCI Device Status Shows Error Code 29"
permalink: /kb/134/Q134475/
---

## Q134475: PCI Device Status Shows Error Code 29

	Article: Q134475
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are viewing a PCI device in Device Manager, it may report error code 29
	for the device's status.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The PCI device is disabled in the computer's BIOS or at the hardware level.
	
	- In Windows 95 OEM Service Release 2 (OSR2), IRQ steering is disabled.
	
	RESOLUTION
	==========
	
	If the device is disabled, consult the device's documentation or manufacturer
	for information about enabling the device and assigning an IRQ to it.
	
	If you are using Windows 95 OSR2, use the following steps to enable IRQ
	steering:
	
	1. In Control Panel, double-click System.
	
	2. Click the Device Manager tab.
	
	3. Double-click the System Devices branch to expand it.
	
	4. Click PCI Bus, and then click Properties.
	
	5. Click the IRQ Steering tab, and then click the IRQ Steering check box to
	  select it.
	
	6. Click OK.
	
	MORE INFORMATION
	================
	
	Windows 95 requires that the IRQ for a disabled PCI device be included in the
	PCI configuration information in the BIOS. If the BIOS does not enable the
	device (and therefore does not assign an IRQ to it), Windows 95 shows error code
	29 because it cannot enable the device without an IRQ and it cannot assign an
	IRQ to a PCI device.
	
	IRQ steering is the ability to intercept requests issued for an IRQ and route
	them to the next available IRQ. IRQ steering is disabled by default in Windows
	95 OEM Service Release 2. Although Windows 95 supports most PCI chip sets,
	Windows 95 does not support IRQ steering prior to the release of OEM Service
	Release 2. IRQ steering is most useful on portable computers with docking
	stations on which the hardware state of the system frequently changes.
	
	
	Additional query words: PnP yellow exclamation
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	
