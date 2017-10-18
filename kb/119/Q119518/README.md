---
layout: page
title: "Q119518: INFO: Problems Loading a Debuggee That Uses a DLL"
permalink: kb/119/Q119518/
---

## Q119518: INFO: Problems Loading a Debuggee That Uses a DLL

	Article: Q119518
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When debugging a DLL using the Visual Workbench debugger or CodeView for
	Windows, one of the following errors may occur:
	
	In the IDE debugger for Windows:
	
	  DEBUG ERROR: Could not load debugee, Attempt to dynamically link to a task[5]
	
	In Codeview for Windows:
	
	  Could not load debugee, Attempt to dynamically link to a task[5]
	
	In the 32-bit debugger:
	
	  Error loading process
	
	  -or-
	
	  Unable to locate DLL
	
	  -or-
	
	  The application failed to initialize properly (0xc0000135)
	
	These error messages may occur when integer 5 is the return value from Windows
	API LoadLibrary() used by the debugger.
	
	MORE INFORMATION
	================
	
	The error occurs when Windows tries to load a library that it does not recognize
	as a DLL. Most often it is because the definition file for the DLL does not
	contain a LIBRARY statement, instead it uses a NAME statement. To avoid the
	error message, simply changing NAME to LIBRARY in the DLL's .DEF file.
	
	If the DLL is explicitly loaded using LoadLibrary(), failure to specify the .DLL
	extension in the parameter of LoadLibrary() may also trigger a similiar error
	message.
	
	If the import library of a DLL is linked with the application, verify that the
	library name matches the DLL's name.
	
	REFERENCES
	==========
	
	16-bit 16 bit
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
