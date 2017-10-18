---
layout: page
title: "Q115596: Problems with TrueType Fonts and Diamond Video Drivers"
permalink: kb/115/Q115596/
---

## Q115596: Problems with TrueType Fonts and Diamond Video Drivers

	Article: Q115596
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Diamond Stealth 24 or Diamond Stealth Pro video adapter board
	and its related version 2.0 driver (STEALTH.DRV dated 10/6/93) in conjunction
	with Windows or Windows for Workgroups, you may experience the following
	symptoms:
	
	- You receive blank lines when you try to print TrueType fonts.
	
	- When you print to a HP DeskJet 500 (or other series), some characters are not
	  printed.
	
	- When you print to a HP LaserJet, II, III, or IV, some lines do not print
	  properly or are not aligned correctly.
	
	- When you print to an Epson LQ (any series), you receive blank pages if the
	  paper size is changed from the default or 8 1/2.
	
	WORKAROUND
	==========
	
	Diamond has confirmed that drivers earlier than version 3.0 caused these
	symptoms with these printers.
	
	- Download the updated Diamond driver (version 3.0) from CompuServe, America
	  Online, or the Diamond bulletin board service (BBS).
	
	  For the Diamond Stealth 24, download file ST24B.EXE.
	  For the Diamond Stealth Pro, download file STPRO2.EXE.
	
	  NOTE: Diamond cautions that the 3.0 drivers may not work with the
	  Hewlett-Packard (HP) 550C, HP 520C, and Canon BJ200 printers.
	
	  -or-
	
	- Change the display driver to VGA.
	
	STATUS
	======
	
	Diamond Computing has confirmed that the drivers earlier than version 3.0
	included with these boards cause this behavior. Diamond Computing has also
	confirmed the problems with the 3.0 driver and Hewlett-Packard (HP) 550C, HP
	520C, and Canon BJ200 printers.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by Diamond Computing, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.11 tt ttf true-type true type on-line cannon printing drop dropping alignment correct paper feed 8.25 11 Stealth Pro Video dropped desk jet laser word6 money
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
