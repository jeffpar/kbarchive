---
layout: page
title: "Q100180: TrueType Fonts Print Incorrectly on HP DeskJet 500"
permalink: kb/100/Q100180/
---

## Q100180: TrueType Fonts Print Incorrectly on HP DeskJet 500

	Article: Q100180
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print TrueType fonts to a Hewlett-Packard (HP) DeskJet 500 printer, the
	printed page may contain garbage lines, blocks, and characters.
	
	CAUSE
	=====
	
	This problem occurs if you use the original HP DeskJet 500 driver that ships
	with Windows 3.1 (HPDSKJET.DRV version 1.1) with UNIDRV.DLL file (version
	3.1.2).
	
	
	RESOLUTION
	==========
	
	You can correct this problem by updating HPDSKJET.DRV to the new version
	(version 2.1) from Hewlett-Packard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the HPDSKJET.DRV version 1.1
	included with Windows 3.1. This problem does not occur in later versions of the
	driver or Windows.
	
	MORE INFORMATION
	================
	
	The UNIDRV.DLL file is used by many of the drivers in Windows 3.1 and by many of
	the updated drivers. If a driver that uses the newer UNIDRV.DLL is installed and
	the original DeskJet 500 driver that ships with Win 3.1 is not updated, the
	above problem occurs.
	
	Changing resolution from 300dpi to 150dpi will allow printing without the extra
	characters. Change resolution from Printers Control Panel, choose Setup and
	change resolution.
	
	
	Additional query words: 3.10 blocks bars garbage desk jet true type vertical win31 updated characters random barcode
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
