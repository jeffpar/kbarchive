---
layout: page
title: "Q145822: DOC: Creating Import Libraries for PowerPC Shared Libraries"
permalink: /kb/145/Q145822/
---

## Q145822: DOC: Creating Import Libraries for PowerPC Shared Libraries

	Article: Q145822
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVC400 kbVC400bug
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for creating an import library for Apple Code Fragment shared
	libraries in "Visual C++ Porting Applications to the Macintosh," Chapter 19
	(Macintosh Shared Libraries) under "Code Fragment Manager Shared Libraries"
	contain various documentation errors. This article gives the correct
	documentation.
	
	MORE INFORMATION
	================
	
	The steps to create an import library should read as follows:
	
	1. Use the MFILE COPY command to copy the code fragment library file from the
	  Macintosh to your computer.
	
	        MFILE COPY ":MACINTOSH HD:MYLIB" MYLIB
	
	2. Use the dumpbin utility to place all exported functions and variables into a
	  file called MY.EXPORTS.
	
	        DUMPBIN /EXPORTS MYLIB > MY.EXPORTS
	
	3. Edit MY.EXPORTS to get just the names of the exported symbols.
	
	4. Create a .DEF file (MYLIB.DEF) that contains the following lines:
	
	        LIBRARY  MYLIBNAME
	        EXPORTS
	
	  Here MYLIBNAME is the fragment name from the 'cfrg' resource in the Macintosh
	  shared library, and the list of export names in MY.EXPORTS is placed after
	  the EXPORTS keyword.
	
	5. Use the LIB utility to create MYLIBNAME.LIB.
	
	        LIB /MACHINE:MPPC /DEF:MYLIB.DEF
	
	Additional query words: mpw2lib dll def afxdll mac cfrg cfm vcmac
	
	======================================================================
	Keywords          : kbdocerr kbVC400 kbVC400bug 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac
	Version           : MACINTOSH:4.0
	
	=============================================================================
	
