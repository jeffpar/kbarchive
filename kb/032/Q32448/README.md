---
layout: page
title: "Q32448: INFO: Specifying .DEF Files on the CL Command Line"
permalink: /kb/032/Q32448/
---

## Q32448: INFO: Specifying .DEF Files on the CL Command Line

{% raw %}

	Article: Q32448
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft C and C/C++ compiler command lines can include files with the
	.DEF, .LIB, and .OBJ filename extensions.
	
	If you specify one or more of these files on the command line, the CL driver
	passes them appropriately as arguments to LINK.EXE. If the name of a file does
	not have an extension, CL treats it as a .OBJ file and appropriately passes it
	to the linker.
	
	The following command line builds an application called MYAPP.EXE by compiling
	MYAPP.C into MYAPP.OBJ, then linking MYAPP.OBJ and MYSUB.OBJ with the MYLIB.LIB
	library and the MYDEF.DEF module definition file:
	
	  cl myapp.c mysub mylib.lib mydef.def
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
