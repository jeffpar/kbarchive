---
layout: page
title: "Q93202: C. Itoh Support Under Windows"
permalink: /kb/093/Q93202/
---

## Q93202: C. Itoh Support Under Windows

	Article: Q93202
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the Microsoft Windows drivers and emulation modes recommended
	by C. Itoh technical support for its printers.
	
	MORE INFORMATION
	================
	
	C. Itoh printer drivers shipped with Windows:
	
	  Details           Windows 3.0    Windows 3.1
	  ----------------------------------------------
	  Driver            C. Itoh 8510    C. Itoh 8510
	  Filename          CITOH.DRV      CITOH.DRV
	  File Size         19456          4720
	  Date              10/31/90       10/1/92
	  Driver Version    1.0            3.0
	
	Emulation modes for C. Itoh printers under Windows:
	
	  Printer                Emulation
	  -------------------------------------------------------------------
	
	  8510a 8510b 8510s      None needed; use C. Itoh 8510 driver shipped
	                         with Windows
	  8510bep 8510sep        IBM Graphics Printer
	  C310 C315p C315r       Use C. Itoh 8510 driver shipped with Windows
	  C310xp C315xr          IBM Proprinter or Epson FX-80
	  C210xp C215xr          IBM Proprinter or Epson FX-80
	  610                    IBM Proprinter XL
	  C610 C610II            IBM Proprinter X24 or Epson LQ-850
	  C645                   IBM Proprinter XL or Epson FX-286
	  C315 C315a             IBM Proprinter XL or Epson LQ-1000
	  CI4                    HP LaserJet IIP (see note below)
	  CI8 CI8E               HP LaserJet III
	  CPX310                 Epson JX-80
	
	NOTE: To print TrueType fonts in landscape mode using the C. Itoh CI4, use the
	driver for the Hewlett-Packard (HP) LaserJet Series II and contact C. Itoh for a
	ROM update to the printer.
	
	For more information, contact C. Itoh and Company.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: win31 3.10 c.itoh c-itoh 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
