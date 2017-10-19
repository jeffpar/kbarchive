---
layout: page
title: "Q83955: TrueType Problem with Blazer Star II Laser Printer"
permalink: /kb/083/Q83955/
---

## Q83955: TrueType Problem with Blazer Star II Laser Printer

	Article: Q83955
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you print a file with TrueType fonts from Microsoft Windows 3.1 to a Sanyo
	Blazer Star II laser printer, the printout may be missing characters.
	
	RESOLUTION
	==========
	
	To correct this problem, you must upgrade the printer's ROM chips to version
	1.3. To obtain this upgrade, contact Sanyo and ask for the Blazer parts
	department.
	
	To determine what ROM version you have, do a self test on the printer. The test
	page lists the version.
	
	You may be able to work around this problem by opening Control Panel, Printers;
	turning off Print Manager, clicking on Connect and choosing "Lpt1.dos or
	Lpt1.os2" as the output port; and, finally, deactivating Fast Print Direct to
	Port. This, effectively, limits Windows printing to only 9 pins, bypassing the
	ROM problem.
	
	
	
	Additional query words: 3.10 true type tt
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
