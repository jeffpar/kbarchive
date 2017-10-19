---
layout: page
title: "Q127140: Hardware Detection Hangs with Relialogic SCSI Card Installed"
permalink: /kb/127/Q127140/
---

## Q127140: Hardware Detection Hangs with Relialogic SCSI Card Installed

	Article: Q127140
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
	
	When you are running the hardware detection portion of Setup, or when you select
	the Automatically Detect Installed Hardware option in the Add New Hardware
	Wizard, the computer stops responding (hangs).
	
	CAUSE
	=====
	
	This problem can occur if you have a Relialogic XL-220 or XL-221 SCSI card
	installed in the computer. The hardware detection routine detects these cards as
	a Mitsumi CD-ROM controller card and then receives incorrect information from
	the card.
	
	RESOLUTION
	==========
	
	Select the Install Specific Hardware option in the Add New Hardware Wizard or
	Setup, and then do not choose to detect SCSI cards or CD-ROM controllers.
	
	MORE INFORMATION
	================
	
	Relialogic has been notified of this problem. They are working on BIOS revisions
	and Windows 95 drivers for these cards.
	
	
	The third-party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
