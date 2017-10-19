---
layout: page
title: "Q129955: IRQ Conflicts with PCI Display Adapters"
permalink: /kb/129/Q129955/
---

## Q129955: IRQ Conflicts with PCI Display Adapters

	Article: Q129955
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
	
	When you install a Peripheral Component Interconnect (PCI) video adapter that is
	configured to use a particular interrupt (IRQ), Windows 95 may configure it to
	use another IRQ that is already in use by another device.
	
	CAUSE
	=====
	
	PCI devices can share PCI IRQs, but Windows 95 does not support sharing PCI IRQs
	with other non-PCI devices (such as an IDE controller).
	
	Windows 95 display drivers do not use an IRQ. However, PCI adapters request an
	IRQ for full backward compatibility.
	
	RESOLUTION
	==========
	
	Use Device Manager to resolve the conflict by assigning a different IRQ to one
	of the conflicting devices.
	
	MORE INFORMATION
	================
	
	This behavior is common to all PCI display adapters, but does not apply to
	Industry Standard Architecture (ISA) or VESA Local Bus (VLB) display adapters.
	
	PCI devices can share IRQs. This behavior is in the PCI specification and Windows
	95 supports it. PCI devices must be configured by the computer's BIOS. This
	occurs during the computer's Power-On Self Test (POST) before the operating
	system is loaded. Windows 95 does not configure PCI devices, but uses what the
	BIOS reports.
	
	In order to get full Plug and Play functionality, Windows 95 enables inactive
	devices when it starts. For example, if a second IDE controller is disabled in
	the BIOS but not in Device Manager, the controller is enabled and resources are
	assigned to it. To prevent this behavior, disable the inactive device and remove
	it from the current configuration in Device Manager.
	
	Note that if you are using an early version of the Micron BIOS, you should
	contact Micron for a later version. Early versions of the Micron BIOS do not
	configure PCI cards correctly, leading to conflicts with the video device on IRQ
	15 or other non-valid IRQs. To correct this problem, Micron recommends that you
	upgrade the ROM BIOS to revision 19. You can obtain the ROM BIOS flash upgrade
	from Micron, or from Micron's Web site at:
	
	  http://www.mei.micron.com
	
	Download the 90_PM_19.ZIP file from Micron's Web site.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
