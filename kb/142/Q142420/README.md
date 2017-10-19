---
layout: page
title: "Q142420: DOC: Setdflag.c Sample for _CrtSetDbgFlag Missing Tilde (~)"
permalink: /kb/142/Q142420/
---

## Q142420: DOC: Setdflag.c Sample for _CrtSetDbgFlag Missing Tilde (~)

	Article: Q142420
	Product(s): Microsoft C Compiler
	Version(s): WinNT:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbdocerr kbCRT kbVC400 kbVC410 kbVC420 kbVC500
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setdflag.c sample program in the Help under _CrtSetDbgFlag(), contains the
	following section of code which is missing a tilde (~) character:
	
	  /*
	  * Set the debug-heap flag to no longer keep freed blocks in the
	  * heap's linked list and turn on Debug type allocations (CLIENT)
	  */ 
	   tmpDbgFlag = _CrtSetDbgFlag(_CRTDBG_REPORT_FLAG);
	   tmpDbgFlag |= _CRTDBG_ALLOC_MEM_DF;
	   tmpDbgFlag &= _CRTDBG_DELAY_FREE_MEM_DF;  // This line is wrong
	   _CrtSetDbgFlag(tmpDbgFlag);
	
	The third line of code should be:
	
	   tmpDbgFlag &= ~_CRTDBG_DELAY_FREE_MEM_DF;
	
	MORE INFORMATION
	================
	
	To disable a flag with the _CrtSetDbgFlag() function, you should AND the
	variable with the bitwise NOT of the bitmask.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbdocerr kbCRT kbVC400 kbVC410 kbVC420 kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : WinNT:4.0,4.1,4.2,5.0
	
	=============================================================================
	
