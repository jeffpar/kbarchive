---
layout: page
title: "Q132631: Setup Does Not Find CD-ROM Drive On HP Vectra Computer"
permalink: kb/132/Q132631/
---

## Q132631: Setup Does Not Find CD-ROM Drive On HP Vectra Computer

	Article: Q132631
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
	
	The CD-ROM drive attached to your HP Vectra computer does not function properly
	within Windows 95 and does not appear in Device Manager. Additionally, an
	Adaptec SCSI device appears in Device Manager with a yellow exclamation point
	next to it.
	
	CAUSE
	=====
	
	Some HP Vectra computers include a DSP sound card with a built-in Adaptec
	AID6x60 SCSI chip that is used to control the CD-ROM. The IRQ for this sound
	card is software configurable and must be set with the /Q: switch in the
	DEVICE=c:\xxx\DSP16.SYS line in the computer's Config.sys file. If this switch
	is not present, the Adaptec SCSI chip will not have an IRQ and will not work
	with the Windows 95 miniport driver for the device.
	
	RESOLUTION
	==========
	
	Assign an unused IRQ to the DSP sound card. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel on
	  the menu that appears.
	
	2. In Control Panel, double-click the System icon, and in the System Properties
	  dialog box, click the Device Manager tab, and then double- click Computer.
	
	3. In the Computer Properties dialog box, make sure the Interrupt Request (IRQ)
	  button is selected.
	
	4. Locate an unused IRQ that is supported by the Adaptec SCSI device, and then
	  click the OK button to close the Computer Properties dialog box.
	
	5. In the System Properties dialog box, double-click the SCSI Controllers icon,
	  select the Adaptec SCSI device, and then click Remove.
	
	6. Add the /Q:<nn> switch (where <nn> is the unused IRQ you
	  selected) to the DEVICE=C:\xxx\DSP16.SYS line of the Config.sys file, and
	  then restart the computer.
	
	7. When Windows 95 is running, click the Start button, point to Settings, and
	  then click Control Panel.
	
	8. In Control Panel, double-click the Add New Hardware icon, and have Windows 95
	  detect the SCSI device.
	
	After Windows 95 finishes detecting the device, the CD-ROM drive should be
	functional and should be visible within Device Manager.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
