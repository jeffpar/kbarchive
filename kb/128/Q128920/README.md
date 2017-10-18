---
layout: page
title: "Q128920: Setup Hangs on First Boot Configuring Plug and Play Devices"
permalink: kb/128/Q128920/
---

## Q128920: Setup Hangs on First Boot Configuring Plug and Play Devices

	Article: Q128920
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your computer may stop responding (hang) the first time Windows 95 boots after
	Setup is finished.
	
	CAUSE
	=====
	
	This problem can occur if all the following conditions exist:
	
	- Your computer has a PCI bus with PCI adapters.
	
	- There is an ISA adapter (for example, a sound card) in your computer.
	
	- The ISA adapter was not configured or was not running in real mode before you
	  ran Setup.
	
	- You have not changed any of your computer's CMOS settings.
	
	If all the above conditions exist, one hardware device in the computer may be
	conflicting with another. When this occurs, Windows 95 may hang. For example, if
	you have a PCI computer with a PCI video card, PCI SCSI adapter, and ISA sound
	card, Setup runs hardware detection and finds the ISA device. When Setup is
	finished, your computer is restarted and the sound card driver is loaded. When
	Windows 95 enumerates the PCI bus and its adapters, it finds that the BIOS set
	the IRQ for one of the PCI devices to the same IRQ as the sound card, causing
	the computer to hang.
	
	RESOLUTION
	==========
	
	Use any one of the following methods to resolve this problem:
	
	- Contact your hardware manufacturer for information about how to reserve the
	  IRQ for the ISA device in the computer's CMOS settings. This prevents the
	  BIOS from assigning the IRQ to another device.
	
	- Remove the ISA device until the computer is completely configured to run
	  Windows 95, then re-install the device. After you re-install the ISA adapter,
	  run the Add New Hardware Wizard to configure the device.
	
	- Press the F8 key when you see the "Starting Windows 95" message, then choose
	  Command Prompt Only. After your computer boots, configure the hardware and
	  verify that it works correctly.
	
	- If the ISA device is software-configurable, you may be able to assign
	  non-conflicting resources using Device Manager. To do so, follow these
	  steps:
	
	  1. Restart your computer. When you see the "Starting Windows 95" message,
	     press the F8 key, then choose Safe Mode from the Startup menu.
	
	  2. Click the Start button, point to Settings, then click Control Panel.
	
	  3. Double-click the System icon, then click the Device Manager tab.
	
	  4. Click the ISA device, then click Properties.
	
	  5. Click the Original Configuration (Current) check box to clear it, then
	     click OK. Restart Windows 95.
	
	  6. If Windows 95 starts and finishes Setup configuration, click the Start
	     button, point to Settings, then click Control Panel.
	
	  7. Double-click the System icon, then click the Device Manager tab.
	
	  8. Click the ISA device, then click Properties.
	
	  9. Click the Resources tab. On the Resources tab, select a non- conflicting
	     resource for the device if one is available.
	
	Additional query words: w95set
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	
