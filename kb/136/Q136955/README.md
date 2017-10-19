---
layout: page
title: "Q136955: Hang When Ejecting Audio CD with Panasonic CR-562B Drive"
permalink: /kb/136/Q136955/
---

## Q136955: Hang When Ejecting Audio CD with Panasonic CR-562B Drive

	Article: Q136955
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
	
	If you eject an audio CD from a Panasonic CR-562B CD-ROM drive while it is
	playing, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	The Panasonic CR-562B CD-ROM drive is not completely compatible with the Windows
	95 protected-mode disk drivers.
	
	RESOLUTION
	==========
	
	To work around this problem, load the real-mode drivers for the CD-ROM drive in
	the Config.sys and Autoexec.bat files. For information about the parameters for
	the real-mode driver and Mscdex.exe, please refer to the drive's documentation
	or manufacturer.
	
	If loading the real-mode drivers for the CD-ROM drive does not resolve the
	problem, disable the protected-mode driver for the CD-ROM controller in Device
	Manager. To do so, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the CD-ROM Controllers branch of the
	  hardware tree to expand it.
	
	3. Click MKEPanasonic CD-ROM Drive, and then click Properties.
	
	4. Click the Original Configuration (Current) check box to clear it, and then
	  click OK.
	
	You may want to contact the drive's manufacturer to inquire about a possible
	firmware upgrade that corrects this problem.
	
	MORE INFORMATION
	================
	
	The Panasonic CR-562B CD-ROM drive uses a proprietary interface and controller.
	The real-mode CD-ROM driver that is loaded in the Config.sys file for this drive
	varies, depending on the exact version of the Panasonic CD-ROM drive controller
	being used. If the real-mode CD-ROM driver being used is a driver that Windows
	95 has determined it can safely take over, the Windows 95 protected-mode driver
	for Panasonic CD-ROM controllers is loaded. When this driver is loaded, the
	problem described in this article may occur.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
