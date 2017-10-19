---
layout: page
title: "Q68536: Helvetica and Times Roman Font Substitutions in Windows 3.00"
permalink: /kb/068/Q68536/
---

## Q68536: Helvetica and Times Roman Font Substitutions in Windows 3.00

	Article: Q68536
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.0 recognizes six different font family names. These
	font family names are:
	
	- Dontcare
	
	- Decorative
	
	- Modern
	
	- Roman
	
	- Script
	
	- Swiss
	
	When you select a font in Windows, Windows attempts to use a screen font of the
	same family for display and printing. The printer font name and the screen font
	name may be different, although the printed output does appear the same as the
	font on the screen.
	
	MORE INFORMATION
	================
	
	This is because both fonts belong to the same font family. The following is a
	list of fonts that belong to the same font family:
	
	Font Family     Bitstream    Canon    Adobe        HP
	-----------     ---------    -----    -----        --
	
	Swiss (Helv)    Swiss        Swiss    Helvetica    Universe
	Roman (Tms Rmn) Dutch        Dutch    Times Roman  CG Times
	
	An example where this might cause some confusion is if you type the font name
	Helvetica in a Windows applications printing to a Hewlett-Packard (HP) LaserJet
	III and the printed output resembles Helvetica even though Helvetica is not a
	font supported on this printer. This behavior occurs because the driver
	interprets the request for Helvetica and selects Universe on the printer.
	
	There are similar fonts with different names because these font names are
	copyrighted. Windows uses the Helv font name for Swiss family screen fonts and
	the Tms Rmn font name for Roman family screen fonts.
	
	REFERENCES
	==========
	
	"Microsoft Windows Software Development Kit," Reference -- Volume 1, pages 2-29,
	2-30, and 2-36 to 2-39.
	
	Additional query words: 3.00 3.00a windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
