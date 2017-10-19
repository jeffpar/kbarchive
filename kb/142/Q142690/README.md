---
layout: page
title: "Q142690: Windows NT Explorer Hangs With NEC CD-ROM"
permalink: /kb/142/Q142690/
---

## Q142690: Windows NT Explorer Hangs With NEC CD-ROM

	Article: Q142690
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to start Windows NT Explorer, your computer may stop responding
	(hang).
	
	CAUSE
	=====
	
	This behavior can occur if you are using a model of the NEC CD-ROM drive that
	supports SCSI 2 and the Cdaudio service is enabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the Cdaudio service. To do this, follow these
	steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Devices.
	
	2. Click Cdaudio, and then click Startup.
	
	3. Click Disabled, click OK, and then click Close.
	
	4. Restart your computer.
	
	MORE INFORMATION
	================
	
	The Cdaudio.sys driver attempts to detect non SCSI 2 devices at startup. This
	detection is based on the Inquiry string of the device. Although earlier models
	of the NEC CD-ROM drives require the Cdaudio.sys driver, newer models of the NEC
	CD_ROM drives do not require the Cdaudio.sys driver.
	
	Disabling the Cdaudio service on a computer with a model of the NEC CD-ROM drive
	that supports SCSI 2 does not affect the functionality of the product.
	
	
	Additional query words: prodnt scsci-ii scsciii scsi-2 hangs
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
