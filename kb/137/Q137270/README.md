---
layout: page
title: "Q137270: CD-ROM Drive Not Detected on Media Vision 3D Sound Card"
permalink: kb/137/Q137270/
---

## Q137270: CD-ROM Drive Not Detected on Media Vision 3D Sound Card

	Article: Q137270
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
	
	A CD-ROM drive connected to a Media Vision 3D sound card with an NCR 406A SCSI
	chip set is not detected by Setup.
	
	CAUSE
	=====
	
	Although Windows 95 includes a driver for the Media Vision 3D sound card, it
	does not include a protected-mode driver for the NCR 406A chip set SCSI
	interface on the sound card.
	
	RESOLUTION
	==========
	
	Load the real-mode drivers for the CD-ROM drive, including the Mini406a.sys
	driver for the SCSI interface. For information about loading the real-mode
	drivers, please consult the CD-ROM drive's documentation.
	
	MORE INFORMATION
	================
	
	You can continue to use the Windows 95 protected-mode drivers for the sound card
	while you are using the real-mode drivers for the CD-ROM drive.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
