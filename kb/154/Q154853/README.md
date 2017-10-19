---
layout: page
title: "Q154853: Intel MMX Technology Support in Visual C++"
permalink: /kb/154/Q154853/
---

## Q154853: Intel MMX Technology Support in Visual C++

	Article: Q154853
	Product(s): Microsoft C Compiler
	Version(s): 4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC kbVC410 kbVC420 kbVC500 kbVC600 kbHWx86
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Beginning with Microsoft Visual C++ version 4.1 for Intel, support of Intel's
	MMX Technology is available in the Microsoft C/C++ compiler Cl.exe. This
	capability is enabled with the /GM compiler switch and is only available within
	inline assembly.
	
	NOTE: The /GM switch is not necessary in Visual C++ versions 5.0 and 6.0.
	
	MORE INFORMATION
	================
	
	Microsoft provides MMX Technology compiler support but does not provide
	programming support.
	
	Included here is a trivial sample using the PAND instruction with the two MMX
	registers MM0 and MM1. This sample just illustrates MMX Technology support. For
	information on MMX programming, refer to Intel documentation.
	
	Note that running a program that uses MMX instructions on a standard Pentium (P5)
	processor will generate an invalid instruction exception. This is the expected
	behavior because the P5C processor is required. Again, for more information,
	refer to the Intel web site.
	
	
	Sample Code
	-----------
	
	     /* Compile options needed: /GM
	     */ 
	
	     void main(void)
	     {
	         _asm {
	             pand mm0, mm1  ; packed and
	             emms           ; empty MMX state
	         }
	     }
	
	Additional query words: Pentium P5C Pro illegal instruction
	
	======================================================================
	Keywords          : kbCompiler kbVC kbVC410 kbVC420 kbVC500 kbVC600 kbHWx86 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.1,4.2,5.0,6.0
	
	=============================================================================
	
