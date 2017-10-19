---
layout: page
title: "Q12110: Calling ROM BIOS Routines to Check the Printer Status"
permalink: /kb/012/Q12110/
---

## Q12110: Calling ROM BIOS Routines to Check the Printer Status

	Article: Q12110
	Product(s): Microsoft Programming Utilities
	Version(s): 6.0,6.0a,6.0ax; MS-DOS:7.0; WINDOWS:1.0,1.5
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below provides a method for a C application to check the status of a
	printer before it attempts to write data to the printer.
	
	MORE INFORMATION
	================
	
	Even though the C language does not define a portable method to check printer
	status, your application can retrieve this information using routines in the ROM
	BIOS. To obtain status information, call the _bios_printer() function, an
	interface to Interrupt 17H, Function 2, or call the interrupt directly through
	the int86() functions. For more information, see the online help file or the
	run-time library reference manual provided with your compiler.
	
	In your application, you may want to process printer errors by changing the
	critical error handler interrupt vector (the Interrupt 24H vector). The default
	critical error handler presents the user with the notorious "abort, retry,
	ignore" message. Your application can provide a substitute message, like
	"Printer offline: place printer on line and press Y to continue."
	
	REFERENCES
	==========
	
	For more information about the ROM BIOS routines or interrupt handlers, refer to
	one of the following two books from Microsoft Press:
	
	- "The Peter Norton Programmer's Guide to the IBM PC," by Peter Norton
	
	- "Advanced MS-DOS," by Ray Duncan
	
	Additional query words: kbinf 6.00 6.00a 6.00ax 7.00 1.00 1.50
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbPTProdChange kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbCComp600DOS kbCComp600aDOS kbCComp600axDOS kbCVC700DOS
	Version           : :6.0,6.0a,6.0ax; MS-DOS:7.0; WINDOWS:1.0,1.5
	
	=============================================================================
	
