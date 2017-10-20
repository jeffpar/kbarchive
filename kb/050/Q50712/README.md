---
layout: page
title: "Q50712: DOC: Run-Time Routines Assume Direction Flag Is Clear in C"
permalink: /kb/050/Q50712/
---

## Q50712: DOC: Run-Time Routines Assume Direction Flag Is Clear in C

{% raw %}

	Article: Q50712
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS: 5.1, 6.0, 6.00a, 6.00ax, 7.0; WINDOWS: 1.0, 1.5; WINDOWS NT: 1.0, 2.0, 2.1, 4.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, and 6.0ax 
	   - Microsoft C/C++ for MS-DOS, versions 7.0 
	   - Microsoft C for OS/2, versions 5.1, 6.0, and 6.0a 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The C run-time routines assume that the direction flag is cleared. If you are
	using other functions with the C run-time functions, you must ensure that the
	other functions leave the direction flag alone or restore it to its original
	condition. Expecting the direction flag to be clear upon entry makes the
	run-time code faster and more efficient.
	
	MORE INFORMATION
	================
	
	The direction flag is a CPU flag specific to Intel 80x86 processors. It applies
	to all assembly instructions that use the REP (repeat) prefix, such as MOVS,
	MOVSD, MOVSW, etc. Addresses provided to applicable instructions are increased
	if the direction flag is cleared.
	
	The CRT function, such as the string manipulation and buffer manipulation
	routines, expect the direction flag to be clear. This is usually the case and is
	documented in the "Microsoft Macro Assembler Programmer's Guide," for versions
	5.0 and 5.1, as follows:
	
	     Under DOS, the direction flag will normally be cleared if your
	     program has not changed it.
	
	
	Additional query words: kbCRT kbOLDocs kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbDSupport
	
	======================================================================
	Keywords          : kbdocerr kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS: 5.1, 6.0, 6.00a, 6.00ax, 7.0; WINDOWS: 1.0, 1.5; WINDOWS NT: 1.0, 2.0, 2.1, 4.0, 5.0
	
	=============================================================================
	

{% endraw %}
