---
layout: page
title: "Q67078: Different Warnings Appear Using Different Optimizations"
permalink: kb/067/Q67078/
---

## Q67078: Different Warnings Appear Using Different Optimizations

	Article: Q67078
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbCompiler
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article is included in the documentation starting with
	Visual C++ 5.0. Look there for future revisions.
	
	In Microsoft C/C++ compiler, different warning messages can appear during
	separate compilations of the same code when different optimizations are used.
	This is normal behavior that occurs because some warnings are found only while
	optimizing.
	
	MORE INFORMATION
	================
	
	If the sample code below is compiled with /W4 (all warnings) and the /Os
	optimization (optimize for space), no warnings are found. However, when the code
	is compiled with /W4 and /Osle (optimize for size, loop, and global-register
	allocation), the following warning is generated:
	
	  file.c(7) : warning C4202: unreachable code
	
	With Visual C++ for Windows NT versions 1.0, 2.0, and 2.1, as well as Visual C++
	for Windows version 1.5 and 1.51, the following warning is generated when
	compiled with /W4 and /O2:
	
	  file.c(7) : warning C4702: unreachable code
	
	There are several other optimizations and code examples that will exhibit this
	type of behavior. Once again, this is normal and serves to notify the developer
	that there MAY be a problem.
	
	Sample Code
	-----------
	
	    #include <stdio.h>
	
	    void main(void)
	    {
	         goto bottom;
	
	         printf("Not used\n");    /* Code that is not used */ 
	
	  bottom:printf("Hello World!");
	    }
	
	Additional query words: 6.00 6.00a 6.00ax 7.00 8.00 8.00c 1.00 1.50 1.51 1.52 2.00 2.10 4.00
	
	======================================================================
	Keywords          : kbcode kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	
	=============================================================================
	
