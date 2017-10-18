---
layout: page
title: "Q39439: DOCERR: SMSW, SGDT, SIDT, SLDT, VERR, VERW Don't Assemble"
permalink: kb/039/Q39439/
---

## Q39439: DOCERR: SMSW, SGDT, SIDT, SLDT, VERR, VERW Don't Assemble

	Article: Q39439
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ".286" and ".386" operands do not allow the following to assemble:
	
	  SMSW, SGDT, SIDT, SLDT, VERR, and VERW
	
	One or two error messages are generated for each occurrence of these
	instructions.
	
	MORE INFORMATION
	================
	
	Page 412 (section 20.3) of the "Microsoft Macro Assembler Programmer's Guide" is
	incorrect in saying that these instructions require "privileged mode." Also,
	SMSW is spelled incorrectly (as "SMCW"). These instructions are allowed in all
	modes; however, behavior may differ between real and protected modes.
	
	The reference guide is also incorrect on several addressing points. See the Intel
	"80286 and 80287 Programmer's Reference Manual" for more information.
	
	The following is a sample program:
	
	  ........................................................................
	  ; The following program demonstrates :
	  dosseg
	  .286
	  .model large
	  .data
	  table   dw 64 dup (?)
	  .code
	  start:
	          SMSW ax
	          SGDT table
	          SIDT table
	          SLDT ax
	          VERR ax
	          VERW ax
	
	          end start
	
	  ......................................................................
	
	  C> masm test,,,;
	  Microsoft (R) Macro Assembler Version 5.10
	  Copyright (C) Microsoft Corp 1981, 1988.  All rights reserved.
	
	  test.ASM(6): error A2105: Expected: instruction, directive, or label
	  test.ASM(7): error A2105: Expected: instruction, directive, or label
	  test.ASM(8): error A2105: Expected: instruction, directive, or label
	  test.ASM(9): error A2105: Expected: instruction, directive, or label
	  test.ASM(10): error A2105: Expected: instruction, directive, or label
	  test.ASM(11): error A2105: Expected: instruction, directive, or label
	
	    24002 Bytes symbol space free
	
	        0 Warning Errors
	        6 Severe  Errors
	  .......................................................................
	
	Additional query words: 5.00 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	
	=============================================================================
	
