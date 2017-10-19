---
layout: page
title: "Q94143: HPPCL5E: Printer Fonts Are Displayed Twice in Font List"
permalink: /kb/094/Q94143/
---

## Q94143: HPPCL5E: Printer Fonts Are Displayed Twice in Font List

	Article: Q94143
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the printer driver for the Hewlett-Packard (HP) LaserJet 4/4M
	(HPPCL5E.DRV), if the TrueType Screen Fonts Installed check box located in the
	driver's setup dialog box is NOT selected, but the Intellifont equivalent
	TrueType fonts for the printer are installed into Windows, the font list in an
	application will appear to have two copies of the same font listed.
	
	To display only one copy of each font, use Control Panel to access the Setup
	dialog box of the HPPCL5E driver and select the TrueType Screen Fonts Installed
	check box.
	
	MORE INFORMATION
	================
	
	Enumeration of TrueType fonts is handled by Windows rather than the driver. If
	equivalent TrueType fonts for the internal Intellifont fonts of the printer are
	installed, Windows enumerates these fonts regardless of whether the driver
	enumerates the internal Intellifont fonts. Selecting the TrueType Screen Fonts
	Installed check box causes the driver not to enumerate the internal Intellifont
	fonts.
	
	
	Additional query words: win31 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
