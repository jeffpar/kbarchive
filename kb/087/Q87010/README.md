---
layout: page
title: "Q87010: Kyocera F Series Printer Prints One Line of Text per Page"
permalink: kb/087/Q87010/
---

## Q87010: Kyocera F Series Printer Prints One Line of Text per Page

	Article: Q87010
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print TrueType fonts from Microsoft Windows 3.1 on a Kyocera F Series
	printer, only one line of text is printed per page.
	
	CAUSE
	=====
	
	According to Kyocera technical support, earlier Kyocera F Series printers do not
	accommodate more than one font on a page. When you use TrueType fonts, the
	printer ejects a new page for every font change.
	
	RESOLUTION
	==========
	
	This problem has been corrected with a printer BIOS chip upgrade. BIOS versions
	6.32 or higher work correctly.
	
	MORE INFORMATION
	================
	
	To determine the Kyocera BIOS version, print a self test page. This page will
	also show available memory in the printer.
	
	In the Windows 3.1 PRINTERS.WRI file, section 6.5 "Printing TrueType fonts on
	Kyocera F-Series Printers" states that TrueType fonts must be printed as
	graphics. Printing TrueType as graphics is an effective workaround.
	
	Kyocera Technical Support confirms that upgrading the printer BIOS will enable
	TrueType fonts to print properly.
	
	NOTE: F series laser printers use approximately 200 K of their resident memory
	for internal functions. This may limit the size of the print job when printing
	TrueType as graphics. This is applicable to all F Series printers.
	
	For further information, contact Kyocera Technical Support.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.10 WIN31 PRINTERS.WRI True Type KBHW 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
