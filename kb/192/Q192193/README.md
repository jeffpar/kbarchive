---
layout: page
title: "Q192193: Windows Cannot Find USB Drivers on OSR2.1 CD-ROM"
permalink: /kb/192/Q192193/
---

## Q192193: Windows Cannot Find USB Drivers on OSR2.1 CD-ROM

	Article: Q192193
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbsetup osr2 win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Universal Serial Bus (USB) Supplement from the Windows 95
	OEM Service Release 2.1 (OSR2.1) CD-ROM and restart your computer, Windows
	detects a USB device on the computer and then looks for but cannot locate the
	drivers on the CD-ROM.
	
	CAUSE
	=====
	
	The necessary files are not found on the CD-ROM. After you install the USB
	Supplement, the files are located in the Windows\System folder.
	
	RESOLUTION
	==========
	
	When Windows prompts you for the path to the drivers, change the path to the
	Windows\System folder.
	
	MORE INFORMATION
	================
	
	The files that are not found may include:
	
	  Openhci.sys
	  Uhcd.sys
	  Usbcamd.sys
	  Usbd.sys
	  Usbhub.sys
	
	======================================================================
	Keywords          : kbsetup osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
