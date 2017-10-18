---
layout: page
title: "Q98592: INFO: /Zg Not Designed for Use with .CPP or .CXX Files"
permalink: kb/098/Q98592/
---

## Q98592: INFO: /Zg Not Designed for Use with .CPP or .CXX Files

	Article: Q98592
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,7.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you specify the /Zg compiler option switch when compiling a file with the
	.CPP or .CXX file extension, the compiler may generate a large number of
	function prototypes. If the number of prototypes is very large, a null pointer
	assignment, run-time overflow, or other error can occur. This behavior varies
	depending on the amount of memory available to the compiler.
	
	The /Zg option is not designed for use with .CPP or .CXX files. It is designed to
	generate function prototypes only for .C files.
	
	Sample Code
	-----------
	
	     /*
	      * Compile options needed: /Zg
	      */ 
	
	     #include <iostream.h>
	
	     void main()
	     {
	        cout << "Hello out there";
	     }
	
	REFERENCES
	==========
	
	For an example of the behavior described in this article, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q122042 BUG: Fatal Error C1001 Using /Zg with Large C++ Header Files
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbCVC700DOS kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
