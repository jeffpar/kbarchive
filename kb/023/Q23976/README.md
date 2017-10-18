---
layout: page
title: "Q23976: Sending Output to a Printer"
permalink: kb/023/Q23976/
---

## Q23976: Sending Output to a Printer

	Article: Q23976
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.5,5.1,6.0,6.0a,6.0ax; MS-DOS:7.0; winnt:1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, version 1.5 
	- Microsoft Visual C++, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article presents three methods an application can use to send output to a
	printer.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	The first method uses the fprintf() function with the preopened "stdprn" stream.
	The following code example demonstrates this technique:
	
	     #include <stdio.h>
	     main()
	     {
	        fprintf(stdprn, "a line of text\n");
	     }
	
	This method works only in the MS-DOS operating system because the "stdprn" stream
	is not defined by Microsoft Windows or Microsoft Windows NT.
	
	Method 2
	--------
	
	Another method uses the fopen() function to open the LPT1, LPT2, or PRN device as
	a file and uses the fprintf() function to write data to the file handle returned
	by fopen(). The following code example demonstrates this technique:
	
	     #include <stdio.h>
	     main()
	     {
	        FILE *stream;
	
	        stream = fopen("PRN", "w");
	        fprintf(stream, "a line of text\n");
	     }
	
	This method works in Windows NT as well as the MS-DOS and Windows operating
	systems.
	
	Method 3
	--------
	
	Finally, in MS-DOS, an application can use the int86() or int86x() functions to
	call one of the following BIOS printer services provided by Interrupt 17h:
	
	  service 0: send byte to the printer.
	  service 1: initialize the printer.
	  service 2: get printer status.
	
	REFERENCES
	==========
	
	For more information on the int86() and int86x() functions, refer to the
	Microsoft C "Run-Time Library Reference" manual.
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 4.00 5.10 6.00 6.00a 6.00ax 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbPTProdChange kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbCComp510DOS kbCComp600DOS kbCComp600aDOS kbCComp600axDOS kbCVC700DOS kbVC200
	Version           : :1.0,1.5,5.1,6.0,6.0a,6.0ax; MS-DOS:7.0; winnt:1.0,2.0,4.0
	
	=============================================================================
	
