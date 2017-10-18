---
layout: page
title: "Q169744: Setup Hangs While Detecting Adaptec SCSI Controllers"
permalink: kb/169/Q169744/
---

## Q169744: Setup Hangs While Detecting Adaptec SCSI Controllers

	Article: Q169744
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsetup osr2 win95 kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows 95 Setup, the computer may stop responding (hang) on the
	first reboot while Plug and Play devices are being detected.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions exists:
	
	- You have one of the following SCSI controllers installed with a SCSI hard
	  disk:
	
	   - Adaptec AHA 2940
	   - Adaptec 2940AU
	   - Adaptec 2940W
	   - Adaptec AIC 7860
	
	
	- An Hewlett-Packard (HP) ScanJet 4C scanner is the only device attached to the
	  SCSI controller.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one or more of the following methods.
	
	Method 1
	--------
	
	Disable the SCSI controller and allow Setup to finish the Plug and Play Device
	detection. To do so, follow these steps:
	
	1. Enable Plug And Play SCAM Support in the Adaptec SCSI controller BIOS Setup.
	
	2. Disable BIOS Support For Int13 Extension in the Adaptec SCSI controller BIOS
	  Setup.
	
	3. Restart Windows 95, press the F8 key when you see the "Starting Windows 95"
	  message, and then choose Safe Mode from the Startup menu.
	
	4. In Control Panel, double-click the System icon, click the Performance tab,
	  click File System, and then click the Troubleshooting tab.
	
	5. Enable the following options:
	
	   - Disable protect-mode hard disk interrupt handling
	   - Disable all 32 bit protect-mode disk drivers
	
	  For more information about the file system troubleshooting options in Windows
	  95, see the following article in the Microsoft Knowledge Base:
	
	  Q165503 Description of the File System Troubleshooting Options
	
	6. Click OK, and then click OK again.
	
	7. When you are prompted to restart your computer, click Yes to continue with
	  Setup.
	
	8. After Windows 95 is installed, disable the options you enabled in step 5.
	
	Method 2
	--------
	
	Reinstall Windows 95 OEM Service Release 2 (OSR2) using the following command:
	
	  setup /p i
	
	The "/p i" switch causes Setup not to report the existence of a Plug and Play
	BIOS. When you disable the serial port in your computer's CMOS settings after
	using this command to reinstall Windows 95, the resources that the serial port
	is configured to use are freed. For more information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q128400 Windows 95 Setup Switches
	
	Obtain the latest drivers for your SCSI controller from Adaptec. This may be
	necessary if there is an exclamation point in a yellow circle next to the SCSI
	controller in Device Manager, and the controller has the following status:
	
	  This device is not present, not working properly, or does
	  not have all the drivers installed. See your hardware
	  documentation (Code 10.)
	
	Additional query words: pnp adapter
	
	======================================================================
	Keywords          : kbenv kbhw kbsetup osr2 win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
