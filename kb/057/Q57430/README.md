---
layout: page
title: "Q57430: Print Screen Does Not Issue a Formfeed After Printing"
permalink: kb/057/Q57430/
---

## Q57430: Print Screen Does Not Issue a Formfeed After Printing

	Article: Q57430
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the SHIFT+PRINT SCREEN key combination to print the contents of a
	screen, you must press the formfeed button on your printer to receive the
	printout.
	
	The Print Screen function, activated by pressing SHIFT+PRINT SCREEN on the IBM
	keyboard, does not issue a formfeed command to the printer after printing the
	contents of the screen. Since multiple screens may be desired on the same
	printer page, the formfeed is not sent.
	
	This causes problems for printers that generate a complete page image in memory
	before printing the page. Such printers wait until either the memory image of a
	page is full or a formfeed character is received.
	
	A formfeed character can be sent to the printer from the MS-DOS command prompt by
	entering the following command:
	
	  ECHO ^L >lpt1:
	
	MORE INFORMATION
	================
	
	Several commercial software packages are available for printing graphics and
	text on a variety of types and brands of printers. Many of these packages come
	with drivers for various printers and may issue a formfeed on those printers
	that require it.
	
	Public domain software that installs a memory-resident program which sends a
	formfeed to the printer on request is also available. A variation of this type
	of software may replace the Print Screen routine with one that always issues a
	formfeed after printing the screen.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
