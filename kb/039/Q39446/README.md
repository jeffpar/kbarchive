---
layout: page
title: "Q39446: Division Operators &quot;/&quot; with .186, .286, and .386"
permalink: /kb/039/Q39446/
---

## Q39446: Division Operators &quot;/&quot; with .186, .286, and .386

	Article: Q39446
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use calculation operators on constant values larger than 17 bits, ".386" has
	to be enabled. Otherwise, the assembler may generate error "A2029 : Division by
	0 or overflow."
	
	Please refer to Page 174 of the "Microsoft Macro Assembler Programmer's Guide" in
	the section "Using Operators" for more specific information. The program below
	demonstrates this information.
	
	This while MASM 5.0, 5.1, and 5.1a were designed with this limitation, MASM 6.0,
	6.0a and 6.0b can perform these calculations.
	
	MORE INFORMATION
	================
	
	When 80386 is enabled by using .386, the program will be assembled without any
	error message. Then the program has to run on a 80386 machine.
	
	The following is the sample program:
	
	      ; sample program
	      .186
	      .model small
	      .data
	      dd  989680h/4h          ; the constant value is more than 17 bits.
	      .code
	      end
	  ...................................................................
	  masm test,,,;
	  Microsoft (R) Macro Assembler Version 5.10
	  Copyright (C) Microsoft Corp 1981, 1988.  All rights reserved.
	
	  test.ASM(7): error A2029: Division by 0 or overflow
	
	    23918 Bytes symbol space free
	
	        0 Warning Errors
	        1 Severe  Errors
	
	Additional query words: kbinf 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500
	Version           : :5.0,5.1
	
	=============================================================================
	
