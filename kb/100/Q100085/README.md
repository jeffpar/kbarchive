---
layout: page
title: "Q100085: Using the LINK32 -DUMP Command"
permalink: /kb/100/Q100085/
---

## Q100085: Using the LINK32 -DUMP Command

	Article: Q100085
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below presents the LINK32 command line options that display information
	about a library or an executable file and how to use them.
	
	FORTRAN PowerStation 32 comes with a different linker, LINK. For more information
	on LINK.EXE, please see the documentation.
	
	MORE INFORMATION
	================
	
	LINK32.EXE performs several functions, specified by one of the following
	command-line options:
	
	  -LINK   Create an executable file (linking)
	  -LIB    Create or modify a library (librarian)
	  -DUMP   Display information about a library
	
	The LINK32 -DUMP option provides access to information in COFF object files,
	libraries, and PE executable files.
	
	The LINK32 -DUMP options are as follows:
	
	   -ALL                 Provides all information available as
	                       formatted output
	  -ARCHIVEMEMBERS      Name and size of each object file in a library
	  -DISASM              Disassembles the contents of the file
	  -EXPORTS             Do Not Use
	  -FPO                 Do Not Use
	  -HEADERS             Displays header information from each section
	                       in the file
	  -IMPORTS             Do Not Use
	  -LINENUMBERS         Displays line number information in the
	                       symbolic information
	  -LINKERMEMBER:[1|2]  Displays names of routines in a library
	  -MAP                 Symbol maps of libraries
	  -OUT:filename        Do Not Use - Use output redirection to store
	                       output in a file
	  -RAWDATA             Displays requested information in raw,
	                       unformatted, form
	  -RELOCATIONS         Displays relocation information
	  -SECTION:name        Displays section-specific information
	  -S                   Shorthand notation for -SUMMARY and -SYMBOLS
	  -SUMMARY             Displays header information summary
	  -SYMBOLS             Displays symbol information in object files
	                       and libraries
	
	The following examples demonstrate using these options to perform common library
	management tasks.
	
	Example #1
	----------
	
	To create a file that contains a listing of the object modules in a library, use
	the following command line:
	
	  LINK32 -LIB -LIST TEST.LIB >TEST.LST
	
	Example #2
	----------
	
	To create a file that contains a listing of the code routines in a library, use
	the following command line:
	
	  LINK32 -DUMP -LINKERMEMBER:2 TEST.LIB > TEST.LST
	
	The -LINKERMEMBER:1 option lists the routines in the order in which they occur in
	the library. The -LINKERMEMBER:2 option lists the routines in alphabetical
	order. The -LINKERMEMBER option generates both lists.
	
	Example #3
	----------
	
	To create a file that contains a listing of the routines and the modules in which
	they appear, use the following command line:
	
	  LINK32 -DUMP -SYMBOLS TEST.LIB > TEST.LST
	
	Example #4
	----------
	
	To create a file that contains summary information listing the size (in
	hexadecimal notation) of the sections in an executable file, use the following
	command line:
	
	  LINK32 -DUMP -SUMMARY TEST.EXE
	
	This command produces output such as the following:
	
	  Summary
	    .text     9200   Code
	     .bss    F4600   Uninitialized static data
	   .rdata      200   Resource data
	   .const      200   Constant data
	    .data     2400   Initialized static data
	     .CRT      200   Runtime data
	   .idata      600   Import data
	   .reloc     2200   Relocation data
	
	Example #5
	----------
	
	The following command fails to direct all of its output to the TEST.LST file:
	
	  LINK32 -DUMP -LINKERMEMBER TEST.LIB -OUT:TEST.LST
	
	This command sends only its initial output to the file; the remainder appears on
	the screen. Redirect the output of the command into a file to work around this
	problem.
	
	Additional query words: kbinf 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
