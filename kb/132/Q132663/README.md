---
layout: page
title: "Q132663: Windows 95 Hangs When You Start It Again After Setup"
permalink: kb/132/Q132663/
---

## Q132663: Windows 95 Hangs When You Start It Again After Setup

	Article: Q132663
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
	
	Windows 95 may stop responding (hang) when you start Windows 95 for a second
	time after you have completed Setup.
	
	CAUSE
	=====
	
	This problem occurs when you manually add a SCSI adapter to the system using the
	Add New Hardware Wizard if the resource settings for that adapter are not set to
	the correct values in Device Manager. When you run Setup again, Windows 95 skips
	the detection of the incorrect resources because it detects that a card is
	already installed with the actual resources it is using.
	
	This results in two entries for the same SCSI controller (that is, one with the
	correct resource settings, and the other with incorrect resource settings). When
	Windows 95 attempts to load the SCSI drivers for the card with the incorrect
	resource settings, the computer hangs.
	
	RESOLUTION
	==========
	
	To resolve this problem, start Windows 95 in safe mode and remove the incorrect
	SCSI adapter entry. You can safely remove both entries. Then, after you start
	Windows 95 in normal mode, the detection option from the Add New Hardware Wizard
	detects the SCSI adapter and sets it up using the correct resources.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
