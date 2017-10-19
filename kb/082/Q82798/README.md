---
layout: page
title: "Q82798: TrueType and Graphics on HP LaserJet Printers"
permalink: /kb/082/Q82798/
---

## Q82798: TrueType and Graphics on HP LaserJet Printers

	Article: Q82798
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Under the Microsoft Windows version 3.1, mixing TrueType (TT) fonts and graphics
	objects on the Hewlett-Packard (HP) LaserJet printer can cause inconsistent
	results (that is, not true WYSIWYG). To get the printout to match the screen,
	turn on Print TrueType As Graphics in the Printers Setup dialog box.
	
	MORE INFORMATION
	================
	
	TT characters are downloaded to the HP LaserJet II and III series of printers by
	default and are treated as device fonts. This dramatically increases the speed
	of printing but can cause the printed output to not match the screen display in
	certain situations.
	
	In the most common situation, an opaque graphics object overlays TT text in the
	document; on the screen the TT font does not show through the object, but on the
	printout, it does. Another related problem concerns printing white TT fonts on a
	shaded background; the HP LaserJet II series of printers can't do this, but the
	HP III series can. Turning on Print TrueType as Graphics in the Printer Setup
	dialog box corrects both of these problems but the print job takes longer to
	complete.
	
	
	Additional query words: 3.10 True Type win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
