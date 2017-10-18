---
layout: page
title: "Q123780: BUG: Link Fails w/ Unresolved External When Call SWAP.H"
permalink: kb/123/Q123780/
---

## Q123780: BUG: Link Fails w/ Unresolved External When Call SWAP.H

	Article: Q123780
	Product(s): Microsoft C Compiler
	Version(s): 4.0b
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling the functions defined in SWAP.H from a C++ program, the link fails
	with an unresolved external, such as this one:
	
	  
	
	  TEST.OBJ : error LNK2001: unresolved external symbol
	   "?CbFreeSwapMem@@YCJJ@Z (long  __pascal CbFreeSwapMem(long))"
	  TEST.OBJ : error LNK2001: unresolved external symbol
	   "?SetMaxSwapSize@@YAXK@Z (void  __cdecl SetMaxSwapSize(unsigned long))"
	  MacDebug/TEST.exe : error LNK1120: 2 unresolved externals
	
	CAUSE
	=====
	
	The header file (SWAP.H) in the MSVC20\M68K\INCLUDE directory is missing the
	necessary extern "C" block around the swap function declarations.
	
	RESOLUTION
	==========
	
	Surround the include of SWAP.H with an extern "C" block, as in this example:
	
	     extern "C"
	     {
	     #include <swap.h>
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     test.cpp
	     #include <swap.h>
	     void testFunc(void)
	     {
	        CbFreeSwapMem(2048);
	        SetMaxSwapSize(4096);
	     }
	
	Additional query words: buglist2.00
	
	======================================================================
	Keywords          : kbLangCPP kbVC 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400bMac
	Version           : :4.0b
	Issue type        : kbbug
	
	=============================================================================
	
