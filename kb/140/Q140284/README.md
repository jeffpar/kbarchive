---
layout: page
title: "Q140284: Bidirectional Printers Supported in Windows 95"
permalink: /kb/140/Q140284/
---

## Q140284: Bidirectional Printers Supported in Windows 95

	Article: Q140284
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Bidirectional printer communication in Windows 95 allows programs to query the
	printer directly to determine the printer's physical attributes. Bidirectional
	printer communication also allows for more detailed status reporting.
	
	To use bidirectional printer communication, the following conditions must be
	met:
	
	- You must have a bidirectional printer.
	
	- You must use an IEEE 1284-compliant printer cable. Typically, such cables
	  have the number 1284 printed on them.
	
	- You must use a correctly configured printer port. Some printer ports are set
	  to AT-compatible mode by default; you must set such ports to PS/2 mode.
	
	- You must use a Windows 95 printer driver that supports bidirectional
	  communication.
	
	MORE INFORMATION
	================
	
	The following printer drivers included with Windows 95 support bidirectional
	communication:
	
	Non-PostScript Drivers
	----------------------
	
	HP LaserJet 4
	HP LaserJet 4M
	HP LaserJet 4M Plus
	HP LaserJet 4ML
	HP LaserJet 4MP
	HP LaserJet 4MV
	HP LaserJet 4Si MX
	HP LaserJet 5MP
	HP LaserJet 4V
	HP LaserJet 4P
	HP LaserJet 4Si
	HP LaserJet 4 Plus
	HP LaserJet 5P
	HP LaserJet 4L
	IBM 4039 LaserPrinter Plus
	
	PostScript Drivers
	------------------
	
	Apple LaserWriter Pro 810 with Fax card
	Apple LaserWriter Pro 810
	Digital DEClaser 5100
	HP DesignJet 650C
	HP DeskJet 1200C/PS
	HP LaserJet 4
	HP LaserJet 4ML
	HP LasetJet 4MP
	HP LaserJet 4Si/4SiMX PS 300dpi
	HP LaserJet 4Si/4SiMX PS 600dpi
	HP PaintJet XL300
	TI MicroLaser Pro 600 2013 PS23
	TI MicroLaser Pro 600 2013 PS65
	
	NOTE: The Hewlett-Packard printer drivers for the 600- and 800-series DeskJet
	printers support bidirectional communication, but do not use the same settings
	in Printer properties as Microsoft's printer drivers to enable or disable
	bidirectional communication.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
