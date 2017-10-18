---
layout: page
title: "Q102680: DOCERR: Backslash Edit Descriptor Documented Incorrectly"
permalink: kb/102/Q102680/
---

## Q102680: DOCERR: Backslash Edit Descriptor Documented Incorrectly

	Article: Q102680
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, version 5.1 
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	According to page 84 of the Microsoft FORTRAN "Reference" manual for
	version 5.1, "The backslash edit descriptor is used only for formatted
	output to terminal devices, such as the screen or printer. It is
	ignored in all other situations." However, on page 97, the "Reference"
	manual states, "If the device is the screen, you can use the backslash
	(\) edit descriptor to suppress the end-of-record."
	
	These statements are not correct; FORTRAN version 5.1 extends the use
	of the backslash edit descriptor to file I/O in addition to device
	I/O.
	
	To correct these errors, make the following changes to your copy of
	the "Reference" manual:
	
	- On page 84, change the statement to read as follows: "The backslash edit
	  descriptor is typically used for formatted output to terminal devices, such
	  as the screen or a printer."
	
	- On page 97, change the statement to read as follows: "You can use the
	  backslash (\) edit descriptor to suppress the end-of-record mark."
	
	- Add the following statement to Appendix B to include the change in the
	  devices that the backslash edit descriptor supports: "The backslash (\) edit
	  descriptor will suppress the end-of-record mark for all devices including
	  files, not just terminal devices."
	
	Additional query words: 5.10 nofps
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS kbFORTRAN510OS2
	Version           : :5.1
	
	=============================================================================
	
