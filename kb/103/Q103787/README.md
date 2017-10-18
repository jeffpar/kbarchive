---
layout: page
title: "Q103787: INFO: Compiler Looks for LINK.EXE in CL.EXE Directory First"
permalink: kb/103/Q103787/
---

## Q103787: INFO: Compiler Looks for LINK.EXE in CL.EXE Directory First

	Article: Q103787
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,2.2,4.0,4.1,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Microsoft compilers listed above, and the linker is called by the
	compiler (no /c option specified), the first directory in which the compiler
	searches for LINK.EXE after looking in the current directory is the directory
	that CL.EXE was found in. If LINK.EXE is not found in the same directory as
	CL.EXE, then the directories specified by the PATH environment variable are
	searched.
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbVC220 kbZNotKeyword3 kbVC410 kbCVC700DOS kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,2.2,4.0,4.1,5.0,6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
