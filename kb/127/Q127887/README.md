---
layout: page
title: "Q127887: Cannot Print Legal Documents on TI MicroLaser Printer"
permalink: kb/127/Q127887/
---

## Q127887: Cannot Print Legal Documents on TI MicroLaser Printer

	Article: Q127887
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a Texas Instruments (TI) MicroLaser 17 or 35 PostScript
	printer using legal-size (8.5 x 14 inches) paper, the last three inches of the
	page are blank.
	
	CAUSE
	=====
	
	The Microsoft Windows PostScript printer driver version 3.58 does not print
	legal-size documents properly on the TI MicroLaser 17 or 35 PostScript printer.
	This is a limitation of the Microsoft Windows PostScript driver with the TI
	MicroLaser printer.
	
	RESOLUTION
	==========
	
	Use the TI MicroLaser 17 or 35 PostScript printer driver that is supplied by
	Texas Instruments (instead of the Microsoft Windows PostScript printer driver).
	This driver is called ADOBEPS.DRV and is copied to the Windows\SYSTEM
	subdirectory when you install it.
	
	Additional query words: 3.10 3.11 micro laser
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
