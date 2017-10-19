---
layout: page
title: "Q99712: Err Msg: Cannot Find UNIDRV.DLL When Printing to DeskJet 500C"
permalink: /kb/099/Q99712/
---

## Q99712: Err Msg: Cannot Find UNIDRV.DLL When Printing to DeskJet 500C

	Article: Q99712
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to the Hewlett-Packard (HP) DeskJet 500C from Windows 3.1, the
	following error message may appear:
	
	  Cannot find UNIDRV.DLL
	
	CAUSE
	=====
	
	When you install the HP DeskJet 500C printer, Windows 3.1 asks for an unlisted,
	updated, or vendor-provided printer driver.
	
	If the Windows 3.1 Disk 6 (3.5-inch) or Disk 7 (5.25-inch) is inserted instead,
	Windows copies and expands the HP DeskJet family drivers (HPDSKJET.DR_ and
	UNIDRV.DL_) to the Windows\SYSTEM subdirectory but does not rename them to .DRV
	and .DLL, respectively.
	
	RESOLUTION
	==========
	
	If you receive this error, check the Windows\SYSTEM subdirectory for the files
	HPDSKJET.DR_ and UNIDRVR.DL_. If these files are present, rename HPDESKJET.DR_
	and UNIDRV.DL_ to HPDESKJET.DRV and UNIDRV.DLL, respectively.
	
	MORE INFORMATION
	================
	
	These drivers do not support color printing and may not interpret more than 16
	colors when converting to gray scale while printing graphics.
	
	We recommend that you obtain the correct printer driver for the DeskJet 500C
	(DJ500C.DRV) by calling the HP Fulfillment Center.
	
	
	Additional query words: 3rdparty desk jet 500 c HP hewlett packard
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
