---
layout: page
title: "Q119871: FIX: Optimization Bug Using Shift Operators and outp()"
permalink: kb/119/Q119871/
---

## Q119871: FIX: Optimization Bug Using Shift Operators and outp()

	Article: Q119871
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE) 
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Optimizing the shift operators may generate incorrect code when used in
	conjunction with outp(). In the sample code in the "MORE INFORMATION" section,
	below, no code is generated for the line "addr >>= 8;".
	
	RESOLUTION
	==========
	
	Disable optimization, or perform the shift operation directly in the argument
	list of the function outp().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed
	above. This problem was corrected in Visual C++, 32-bit Edition, version 2.0.
	
	MORE INFORMATION
	================
	
	When compiled with /Ox, the following sample does not generate code for the line
	"addr >>= 8;"
	
	NOTE: When the line of code marked "3" replaces the lines marked "1" and "2",
	"mov al,ah" is no longer incorrectly optimized out of the assembler listing
	produced by /Fc.
	
	Sample Code
	-----------
	
	  // Compile options needed: /c /Ox /Fc
	
	     unsigned long test(char * baseport, unsigned long addr)
	     {
	         unsigned long   offset;
	
	         offset = ((addr >> 3) & 0x00003fff);
	
	         addr >>= 8;                     //Line 1
	         outp(baseport + 4, addr);       //Line 2
	
	  // Replacing the above two lines of code with the line below
	  // fixes the problem.
	
	  //       outp(baseport + 4, addr >> 8);  //Line 3--okay with /Ox.
	
	         return offset;
	     }
	
	Additional query words: 1.00 8.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbvc100 kbCVCComp
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
